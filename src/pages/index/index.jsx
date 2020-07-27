// import style from './index.module.scss';
import { getPageProps } from '../../lib/api';

const Home = ({ content }) => (
  <>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

export const getStaticProps = async () => getPageProps('index');

export default Home;
