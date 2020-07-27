import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';

const About = ({ content }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </motion.div>
);

export const getStaticProps = async () => getPageProps('about');

export default About;
