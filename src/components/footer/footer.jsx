import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles['jsx-footer']}>
    <div className={styles.copyright}>
      <small>&copy; Copyright 202020, Example Corporation</small>
    </div>
    <div className={styles.social}>
      <a href="#">
        <img src="/facebook-logo.svg" alt="Face Book" />
      </a>
      <a href="#">
        <img src="/instagram-logo.svg" alt="Instagram" />
      </a>
      <a href="#">
        <img src="/youtube-logo.svg" alt="YouTube" />
      </a>
    </div>
  </footer>
);

export default Footer;
