import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';

const Interviews = ({ content }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    Interview
  </motion.div>
);

export const getStaticProps = async () => getPageProps('about');

export default Interviews;
