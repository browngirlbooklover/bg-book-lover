import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';

const Events = ({ content }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    Events
  </motion.div>
);

export const getStaticProps = async () => getPageProps('about');

export default Events;
