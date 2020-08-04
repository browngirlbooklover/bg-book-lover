import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';
import VideoPlayer from '../../components/videoPlayer/videoPlayer';
import styles from './reviews.module.scss';

const Reviews = ({ data }) => (
  <motion.div
    className={styles.layout}
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    <h1 className="header-1">{data?.header}</h1>
    <div className={styles['video-container']}>
      {console.log(data)}
      {data?.videos.map((v) => (
        <VideoPlayer
          image={v.poster}
          title={v.title}
          date={v.date}
          link={v.videoLink}
        />
      ))}
    </div>
  </motion.div>
);

export const getStaticProps = async () => getPageProps('reviews');

export default Reviews;
