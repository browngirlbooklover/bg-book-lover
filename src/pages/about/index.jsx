import Head from 'next/head';
import { getPageProps } from '../../lib/api';

const About = ({ data }) => (
  <>
    <Head>
      <title>{data.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>{data.header}</h1>
  </>
);

export const getStaticProps = async () => getPageProps('about');

export default About;
