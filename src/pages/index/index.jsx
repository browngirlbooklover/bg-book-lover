import Head from 'next/head';
// import style from './index.module.scss';
import { getPageProps } from '../../lib/api';

const Home = ({ data, content }) => (
  <>
    <Head>
      <title>{data.title}</title>
      <meta name="Description" content={data.description}></meta>
    </Head>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

export const getStaticProps = async () => getPageProps('index');

export default Home;
