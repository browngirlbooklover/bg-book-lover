import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Layout from '../components/layout/layout';
import '../themes/global.scss';

function MyApp({ Component, pageProps }) {
  const { navLinks, data } = pageProps;
  return (
    <ThemeProvider>
      <CSSReset />
      <Layout data={data} navLinks={navLinks}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
