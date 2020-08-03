import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';

const ReadingNow = ({ content }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    Reading Now
  </motion.div>
);

export const getStaticProps = async () => getPageProps('about');

export default ReadingNow;
