import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';
import ReactMarkdown from 'react-markdown';
import styles from './about.module.scss';
import Profile from '../../components/profile/profile';

const About = ({ data, content }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    <section>
      <h1 className="header-1">{data?.header}</h1>
      <p className={styles.about}>{data?.about}</p>
    </section>
    <section>
      <Profile markup={content} image={data.authorImage} />
    </section>
    <section>
      <h2></h2>
    </section>
  </motion.div>
);

export const getStaticProps = async () => getPageProps('about');

export default About;
