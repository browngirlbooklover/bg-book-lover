import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './layout.module.scss';

const Layout = ({ navLinks, children }) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <main className={styles.body}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
