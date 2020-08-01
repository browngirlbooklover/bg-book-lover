// import style from './index.module.scss';
import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';
import Accordion from '../../components/accordion/accordion';
import AccordionPanel from '../../components/accordionPanel/accordionPanel';
import Image from '../../components/image/image';

const Home = ({ data }) => {
  const { mainHeader, drawer } = data;
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <h1 className="header-1">{mainHeader}</h1>
      <Accordion>
        {drawer.map((obj, i) => (
          <AccordionPanel id={`ap${i}`} key={i} title={obj.label}>
            {obj.books.map((bk) => (
              <Image key={bk.alt} src={bk.image} alt={bk.alt} />
            ))}
          </AccordionPanel>
        ))}
      </Accordion>
    </motion.div>
  );
};

export const getStaticProps = async () => getPageProps('index');

export default Home;
