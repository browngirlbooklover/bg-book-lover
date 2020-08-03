import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';

const Reviews = ({ data }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    Reviews
  </motion.div>
);

export const getStaticProps = async () => getPageProps('index');

export default Reviews;
