import styles from "./Home.module.sass";

import { IDetailedMovieList } from "../../interfaces";
import FirstGridComponent from "./FirstGridComponent";
import SecondaryGridComponent from "./SecondaryGridComponent";
import SecondGridComponent from "./SecondGridComponent";

interface IProps {
  data: IDetailedMovieList[] | undefined;
  pageNumber: number;
  lastPage: boolean;
  nextPage: () => void;
}

const GridComponent: React.FC<IProps> = ({
  data,
  pageNumber,
  lastPage,
  nextPage,
}) => {
  if (data === undefined) return null;

  function renderFirstGrid(): Array<JSX.Element | null> | null {
    if (data === undefined) return null;

    return data.map((component, index) => {
      if (index > 1) return null;
      return (
        <FirstGridComponent
          key={index}
          img={component.image}
          pageNumber={pageNumber}
          details={component.description}
          title={component.title}
          indexGrid={index}
        />
      );
    });
  }

  function renderSecondaryGrid(): Array<JSX.Element | null> | null {
    if (data === undefined) return null;

    return data.map((component, index) => {
      if (index < 2 || index > 4) return null;
      return (
        <SecondaryGridComponent
          key={index}
          img={component.image}
          details={component.description}
          title={component.title}
          indexGrid={index}
        />
      );
    });
  }

  function renderSecondGrid(): Array<JSX.Element | null> | null {
    if (data === undefined) return null;

    return data.map((component, index) => {
      if (index < 5) return null;
      return (
        <SecondGridComponent
          key={index}
          img={component.image}
          details={component.description}
          title={component.title}
          indexGrid={index}
          lastPage={lastPage}
          nextPage={nextPage}
        />
      );
    });
  }

  return (
    <>
      <div className={styles.main_container_first_grid}>
        {renderFirstGrid()}
      </div>
      <div className={styles.main_container_second_grid}>
        <div className={styles.container_secondary_grid}>
          {renderSecondaryGrid()}
        </div>
        {renderSecondGrid()}
      </div>
    </>
  );
};

export default GridComponent;
