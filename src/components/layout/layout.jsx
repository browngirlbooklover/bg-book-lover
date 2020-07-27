import Head from 'next/head';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './layout.module.scss';

const Layout = ({ data, navLinks, children }) => {
  const { title = '', description = '' } = data;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description}></meta>
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
