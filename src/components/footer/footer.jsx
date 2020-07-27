import styles from './footer.module.scss';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles['jsx-footer']}>
    <div className={styles.copyright}>
      <small>&copy; 2020, Example Corporation</small>
    </div>
    <div className={styles.social}>
      <a aria-label="facebook" href="#">
        <FaFacebookF />
      </a>
      <a aria-label="Instagram" href="#">
        <FaInstagram />
      </a>
      <a aria-label="Youtube" href="#">
        <FaYoutube />
      </a>
    </div>
  </footer>
);

export default Footer;
