import { useMemo, useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Layout from '../components/layout/layout';
import '../themes/global.scss';
import { AnimatePresence } from 'framer-motion';
import { TinaProvider, TinaCMS } from 'tinacms';
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github';
import { useFetchUser } from '../util/user';
import Link from 'next/link';

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null;
  const headers = new Headers();

  if (token) {
    headers.append('Authorization', 'Bearer ' + token);
  }

  const resp = await fetch(`/api/preview`, { headers });
  const data = await resp.json();

  if (resp.status === 200) {
    console.log(resp, data);
    window.location.reload();
  } else {
    throw new Error(data.message);
  }
};

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload();
  });
};

const github = new GithubClient({
  proxy: '/api/proxy-github',
  authCallbackRoute: '/api/create-github-access-token',
  clientId: process.env.GITHUB_CLIENT_ID,
  baseRepoFullName: process.env.REPO_FULL_NAME,
});

/**
 *
 * @param {{cms: TinaCMS}} param0
 */
export const EditLink = ({ cms }) => {
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </button>
  );
};

function MyApp({ Component, pageProps }) {
  // during build process these properties are null and can cause errors
  const { navLinks = [], data = {}, logoImage = {} } = pageProps;
  const { user, loading } = useFetchUser();

  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: pageProps?.preview,
      apis: {
        github,
      },
      toolbar: pageProps?.preview,
      sidebar: pageProps?.preview,
    });
  }, []);

  useEffect(() => {
    if (cms.enabled && !user && !loading) {
      onLogout();
    }
  }, [user, loading]);

  return (
    <TinaProvider cms={cms}>
      <TinacmsGithubProvider
        onLogin={onLogin}
        onLogout={onLogout}
        error={pageProps?.error}
      >
        {user && !loading && (
          <>
            <EditLink cms={cms} />
            <p>
              {user && !loading
                ? `you are logedin, ${user.given_name}!`
                : 'better luck next time'}
            </p>
            <Link href="/api/logout">
              <a>Log out</a>
            </Link>
          </>
        )}
        <ThemeProvider>
          <CSSReset />
          <Layout logoImage={logoImage} data={data} navLinks={navLinks}>
            <AnimatePresence initial={false} exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </TinacmsGithubProvider>
    </TinaProvider>
  );
}

export default MyApp;
