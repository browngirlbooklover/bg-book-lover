import styles from './videoPlayer.module.scss';
import Image from '../image/image';
import { FaPlay } from 'react-icons/fa';

const VideoPlayer = ({ image, title, data }) => {
  return (
    <figure className={styles.video}>
      <button className={styles.poster}>
        <Image src={image?.src} alt={image?.alt} />
        <div className={styles.play}>
          <FaPlay />
        </div>
      </button>
      <figcaption>{`${title} ${data}`}</figcaption>
    </figure>
  );
};

export default VideoPlayer;
