import { getPageProps } from '../../util/api';
import styles from './master.module.scss';
import Link from 'next/link';
import { useFetchUser } from '../../util/user';

const Master = () => {
  const { user, loading } = useFetchUser();

  return (
    <div>
      <h1>
        Your are currently{' '}
        {user && !loading ? 'Logged In!' : 'not logged in.  :('}
      </h1>
      <Link href="/api/login">
        <a className={styles.button}>Log In</a>
      </Link>

      <Link href="/api/logout">
        <a className={styles.button}>Log out</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async ({ preview, previewData }) =>
  getPageProps('index', preview, previewData);

export default Master;
