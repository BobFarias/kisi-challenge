import cx from "classnames";
import styles from "./Home.module.sass";

interface IProps {
  indexGrid: number;
  title: string;
  details: string;
  img: string;
  pageNumber: number;
}

const FirstGridComponent: React.FC<IProps> = ({
  indexGrid,
  title,
  details,
  img,
  pageNumber,
}) => {
  if (title === undefined || details === undefined || img === undefined)
    return null;

  return (
    <div
      className={cx({
        [styles.main_container_first_grid]: true,
        [styles.main_container_first_grid_title]:
          pageNumber === 1 && indexGrid === 0,
      })}
    >
      {pageNumber === 1 && indexGrid === 0 && (
        <h1 className={styles.title_grid}>Connect people & spaces</h1>
      )}
      <div
        className={cx({
          [styles.container_grid]: true,
          [styles.first_type_grid]: indexGrid === 0,
          [styles.second_type_grid]: indexGrid === 1,
        })}
      >
        <img src={img} alt="grid-photo" />
        <div className={styles.container_details}>
          <p className={styles.captions_grid}>{title}</p>
          <p className={styles.details_container}>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default FirstGridComponent;
