import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Layout from '../components/layout/layout';
import '../themes/global.scss';

function MyApp({ Component, pageProps }) {
  const { navLinks } = pageProps;
  return (
    <ThemeProvider>
      <CSSReset />
      <Layout navLinks={navLinks}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
