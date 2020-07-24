import Layout from '../components/layout/layout';
import '../themes/global.scss';

function MyApp({ Component, pageProps }) {
  const { navLinks } = pageProps;
  return (
    <Layout navLinks={navLinks}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
