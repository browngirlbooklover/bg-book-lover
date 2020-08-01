// import style from './index.module.scss';
import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';
import ReactMarkdown from 'react-markdown';

const Home = ({ data, content }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    <h1 className="header-1">{data.mainHeader}</h1>
    {/* <ReactMarkdown>{content}</ReactMarkdown> */}
  </motion.div>
);

export const getStaticProps = async () => getPageProps('index');

export default Home;
