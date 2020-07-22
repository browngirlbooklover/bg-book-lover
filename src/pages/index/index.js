import Head from 'next/head';
import style from './index.module.scss';

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className={style.header1}>Yo Yo Yo</h1>
    <div className={style.container}>
      <div>Box 1</div>
      <div>box 2</div>
    </div>
  </>
);

export default Home;
