import styles from './blockQuote.module.scss';
import Image from '../image/image';

const BlockQuote = ({ image, quote, book, author }) => (
  <blockquote className={styles.blockquote}>
    <div className={styles['img-container']}>
      <Image src={image.src} alt={image.alt} />
    </div>
    <p>{quote}</p>
    <footer>
      —{author}
      {book && (
        <>
          , <cite>{book}</cite>
        </>
      )}
    </footer>
  </blockquote>
);

export default BlockQuote;
