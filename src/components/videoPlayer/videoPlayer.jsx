import styles from './videoPlayer.module.scss';
import Image from '../image/image';
import { FaPlay } from 'react-icons/fa';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/core';

const VideoPlayer = ({ image, title, link }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <figure className={styles.video}>
        <button className={styles.poster} onClick={onOpen}>
          <Image src={image?.src} alt={image?.alt} />
          <div className={styles.play}>
            <FaPlay />
          </div>
        </button>
        <figcaption>{`${title}`}</figcaption>
      </figure>
      <Modal isOpen={isOpen} size={'600px'} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={styles['yt-container']}>
              <iframe
                width="100%"
                height="100%"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoPlayer;
