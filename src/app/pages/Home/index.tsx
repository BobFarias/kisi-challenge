import { useEffect, useState } from "react";
import { IDetailedMovieList, IPageMovies } from "./../../interfaces";

import { getListMovies } from "../../api";

import styles from "./Home.module.sass";
import GridComponent from "./GridComponent";

const Home: React.FC = () => {
  const [recordsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [listOfPages, setListOfPages] = useState<number[]>([1]);
  // FETCH DATA
  const [movieList, setMovieList] = useState<
    IDetailedMovieList[] | undefined
  >();
  const [moviesPerPage, setMoviesPerPage] = useState<IPageMovies | undefined>();

  // PAGINATION LOGIC
  let indexOfLastRecord: number = -1;
  let indexOfFirstRecord: number = -1;

  const updateMoviesPerPage = (data: IDetailedMovieList[]): void => {
    const currentMovieList: IPageMovies | undefined = moviesPerPage;

    const nextPageData: IDetailedMovieList[] = data.slice(
      indexOfFirstRecord,
      indexOfLastRecord,
    );

    const setNewPage: IPageMovies = {
      ...currentMovieList,
      [currentPage]: nextPageData,
    };

    setMoviesPerPage(setNewPage);
  };

  useEffect(() => {
    indexOfLastRecord = currentPage * recordsPerPage;
    indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    if (movieList === undefined || movieList.length === 0) return;

    updateMoviesPerPage(movieList);
  }, [currentPage]);

  useEffect(() => {
    getListMovies()
      .then((data) => {
        setMovieList(data);
        updateMoviesPerPage(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function nextPage(): void {
    const nextPageCounter: number = currentPage + 1;

    setCurrentPage(nextPageCounter);
    setListOfPages(listOfPages.concat(nextPageCounter));
  }

  return (
    <div
      className={`${styles.body_container_home_page} ${styles.kisi_warm_grey}`}
    >
      <div className={styles.container_grids_home_page}>
        {listOfPages.map((page, index) => {
          const lastPage: boolean =
            listOfPages[listOfPages.length - 1] === page;

          return (
            <GridComponent
              key={index}
              pageNumber={page}
              data={moviesPerPage?.[page]}
              lastPage={lastPage}
              nextPage={nextPage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
