import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.body}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
