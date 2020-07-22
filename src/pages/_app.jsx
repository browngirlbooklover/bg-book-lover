import Layout from '../components/layout/layout';
import '../themes/global.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
