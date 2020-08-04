import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';
import styles from './about.module.scss';
import Profile from '../../components/profile/profile';
import BadgeGroup from '../../components/badgeGroup/badgeGroup';

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
      <Profile markup={content} image={data?.authorImage} />
    </section>
    <section>
      <h2>{data?.authorFacts?.title}</h2>
      <BadgeGroup badges={data?.authorFacts?.facts} />
    </section>
    <section>
      <h2>{data?.siteFacts?.title}</h2>
      <BadgeGroup badges={data?.siteFacts?.facts} />
    </section>
  </motion.div>
);

export const getStaticProps = async () => getPageProps('about');

export default About;
