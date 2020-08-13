import { useMemo } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Layout from '../components/layout/layout';
import '../themes/global.scss';
import { AnimatePresence } from 'framer-motion';
import { TinaProvider, TinaCMS } from 'tinacms';
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github';
import { Auth0Provider } from '@auth0/auth0-react';

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

  return (
    <Auth0Provider
      domain="hartecode.us.auth0.com"
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri="https://bg-book-lover.vercel.app/master"
    >
      <TinaProvider cms={cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps?.error}
        >
          <EditLink cms={cms} />
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
    </Auth0Provider>
  );
}

export default MyApp;
