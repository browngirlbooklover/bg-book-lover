import Head from 'next/head';
import style from './index.scss';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className={style.header1}>Yo Yo Yo</h1>
      <div className={style.container}>
        <div>Box 1</div>
        <div>box 2</div>
      </div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>
  </div>
);

export default Home;
