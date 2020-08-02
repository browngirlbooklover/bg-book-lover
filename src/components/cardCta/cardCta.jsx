import Image from '../image/image';
import styles from './cardCta.module.scss';

const CardCta = ({ image, text, href, onClick, ref }) => (
  <figure className={styles.card}>
    <a className={styles.link} href={href} onClick={onClick} ref={ref}>
      <div className={styles['img-container']}>
        <Image {...image} />
      </div>
      <figcaption>{text}</figcaption>
    </a>
  </figure>
);

export default CardCta;
