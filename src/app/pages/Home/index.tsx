import { useEffect } from "react";
// import { IDetailedMovieList } from "./../../interfaces";

import { getListMovies } from "../../api";

const Home: React.FC = () => {
  // TODO: update states from the API
  // const [movieList, setMovieList] = useState<IDetailedMovieList | undefined>();
  // const [loadingMovieList, setLoadingMovieList] = useState<boolean>(false);

  useEffect(() => {
    getListMovies()
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        // TODO: notification of errors
        // toast.error(
        //  "It was not possible to find the ranking between the newjoiners."
        // );
      });
  }, []);

  return <div>Home page</div>;
};

export default Home;
