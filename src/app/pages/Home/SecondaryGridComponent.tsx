import cx from "classnames";
import styles from "./Home.module.sass";

interface IProps {
  indexGrid: number;
  details: string;
  title: string;
  img: string;
}

const SecondaryGridComponent: React.FC<IProps> = ({
  indexGrid,
  details,
  title,
  img,
}) => {
  if (details === undefined || img === undefined || title === undefined)
    return null;

  return (
    <div
      className={cx({
        [styles.container_grid]: true,
        [styles.third_type_grid]: indexGrid === 2,
        [styles.forth_type_grid]: indexGrid === 3,
        [styles.fifth_type_grid]: indexGrid === 4,
      })}
    >
      <img src={img} alt="grid-photo" />
      <div className={styles.container_details}>
        <p className={styles.captions_grid}>{title}</p>
        <p className={styles.details_container}>{details}</p>
      </div>
    </div>
  );
};

export default SecondaryGridComponent;
