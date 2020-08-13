import { useAuth0 } from '@auth0/auth0-react';
import { getPageProps } from '../../util/api';
import styles from './master.module.scss';

const Master = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div>
      <h1>
        Your are currently{' '}
        {isAuthenticated ? 'Logged In!' : 'not logged in.  :('}
      </h1>
      <button className={styles.button} onClick={() => loginWithRedirect()}>
        Log In
      </button>
      <button
        className={styles.button}
        onClick={() => logout({ returnTo: window?.location?.origin })}
      >
        Log Out
      </button>
    </div>
  );
};

export const getStaticProps = async ({ preview, previewData }) =>
  getPageProps('index', preview, previewData);

export default Master;
