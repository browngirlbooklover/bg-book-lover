import Image from '../image/image';
import styles from './bookTile.module.scss';

const BookTile = ({ title, src, alt, link }) => (
  <div className={styles.tile}>
    <a className={styles.link} href={link}>
      <div className={styles.title}>{title}</div>
      <div className={styles.img}>
        <Image src={src} alt={alt} />
      </div>
    </a>
  </div>
);

export default BookTile;
