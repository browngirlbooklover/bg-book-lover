import { useMemo } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Layout from '../components/layout/layout';
import '../themes/global.scss';
import { AnimatePresence } from 'framer-motion';
import { TinaProvider, TinaCMS } from 'tinacms';

function MyApp({ Component, pageProps }) {
  // during build process these properties are null and can cause errors
  const { navLinks = [], data = {}, logoImage = {} } = pageProps;

  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: true,
      toolbar: { hidden: false },
      sidebar: true,
    });
  }, []);

  return (
    <TinaProvider cms={cms}>
      <ThemeProvider>
        <CSSReset />

        <Layout logoImage={logoImage} data={data} navLinks={navLinks}>
          <AnimatePresence initial={false} exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </TinaProvider>
  );
}

export default MyApp;
