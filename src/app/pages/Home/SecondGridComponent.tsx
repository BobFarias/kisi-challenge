import cx from "classnames";
import styles from "./Home.module.sass";

interface IProps {
  indexGrid: number;
  details: string;
  title: string;
  img: string;
  lastPage: boolean;
  nextPage: () => void;
}

const SecondGridComponent: React.FC<IProps> = ({
  indexGrid,
  title,
  details,
  img,
  lastPage,
  nextPage,
}) => {
  if (details === undefined || img === undefined || title === undefined)
    return null;

  return (
    <div
      className={cx({
        [styles.main_container_second_grid]: true,
        [styles.main_container_second_grid_next_page]:
          lastPage && indexGrid === 6,
      })}
    >
      <div
        className={cx({
          [styles.container_grid]: true,
          [styles.fifth_type_grid]: indexGrid === 5,
          [styles.sixth_type_grid]: indexGrid === 5,
          [styles.seventh_type_grid]: indexGrid === 6,
        })}
      >
        <img src={img} alt="grid-photo" />
        <div className={styles.container_details}>
          <p className={styles.captions_grid}>{title}</p>
          <p className={styles.details_container}>{details}</p>
        </div>
      </div>
      {lastPage && indexGrid === 6 && (
        <button onClick={nextPage} className={styles.button_next_page}>
          Button
        </button>
      )}
    </div>
  );
};

export default SecondGridComponent;
