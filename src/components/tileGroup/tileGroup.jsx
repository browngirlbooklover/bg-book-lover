import Image from '../image/image';
import styles from './tileGroup.module.scss';

const TileGroup = ({ tiles }) => {
  return (
    <div className={styles.group}>
      {tiles.map((v) => (
        <div className={styles.tile}>
          <div className={styles['img-container']}>
            <Image {...v.image} />
          </div>
          <div className={styles.content}>
            <p className={styles.person}>
              <span className={styles.name}>{v.name}</span>
              <span className={styles.location}>{v.location}</span>
            </p>
            <p className={styles.literary}>
              <span className={styles.book}>{v.book}</span>
              <span className={styles.author}>{v.author}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileGroup;
