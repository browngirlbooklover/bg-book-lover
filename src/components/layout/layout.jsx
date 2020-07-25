import Head from 'next/head';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './layout.module.scss';

const Layout = ({ navLinks, children }) => {
  return (
    <>
      <Head>
        <meta name="keywords" content="next,sean,panda"></meta>
        <meta name="robots" content="noindex, nofollow"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header navLinks={navLinks} />
      <main className={styles.body}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
