import Head from 'next/head';
import { getPageLists } from '../../lib/api';

const About = () => (
  <>
    <Head>
      <title>Create Next App/About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>About</h1>
  </>
);

export const getStaticProps = async () => {
  return {
    props: {
      navLinks: getPageLists(),
    },
  };
};

export default About;
