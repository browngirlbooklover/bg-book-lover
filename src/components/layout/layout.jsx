import Head from 'next/head';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './layout.module.scss';

const Layout = ({ data, navLinks, children }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="Description" content={data.description}></meta>
        <meta name="keywords" content="next,sean,panda"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header navLinks={navLinks} />
      <main className={styles.body}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
