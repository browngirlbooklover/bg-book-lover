import Head from 'next/head';
import style from './index.module.scss';
import { getPageProps } from '../../lib/api';

const Home = ({ data }) => (
  <>
    <Head>
      <title>{data.title}</title>
      <meta name="Description" content={data.description}></meta>
    </Head>
    <h1 className={style.header1}>{data.header}</h1>
    <div className={style.container}>
      <div>Box 1</div>
      <div>box 2</div>
    </div>
  </>
);

export const getStaticProps = async () => getPageProps('index');

export default Home;
