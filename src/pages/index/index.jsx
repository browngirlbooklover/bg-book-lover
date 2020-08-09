import styles from './index.module.scss';
import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';
import Accordion from '../../components/accordion/accordion';
import AccordionPanel from '../../components/accordionPanel/accordionPanel';
import BookTile from '../../components/bookTile/bookTile';
import BlockQuote from '../../components/blockQuote/blockQuote';
import CtaBtn from '../../components/cta-btn/ctaBtn';
import CardCta from '../../components/cardCta/cardCta';
import GroupLayout from '../../components/groupLayout/groupLayout';
import Link from 'next/link';
import PlaceholderBlock from '../../components/placeholderBlock/PlaceholderBlock';
import { useForm, usePlugin } from 'tinacms';
import homeFormConfig from '../../data/cmsForm/homeForm';

const Home = ({ data }) => {
  const formConfig = homeFormConfig(data);
  const [dataA, form] = useForm(formConfig);
  usePlugin(form);
  const { mainHeader, drawer, blockQuote, callToActionCards = [] } = dataA;
  return (
    <motion.div
      className={styles.layout}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <h1 className="header-1">{mainHeader}</h1>
      <BlockQuote {...blockQuote} />
      <CtaBtn link={blockQuote.link} text={blockQuote['cta_text']} />
      <Accordion>
        {drawer.map((obj, i) => (
          <AccordionPanel idx={`ap${i}`} key={`ACC${i}`} title={obj.label}>
            {obj?.books?.length > 0 ? (
              <div className={styles['acc-container']}>
                {obj?.books?.map((bk, x) => (
                  <BookTile
                    key={`${i}book${x}`}
                    title={bk.title}
                    link={bk.link}
                    src={bk.image}
                    alt={bk.alt}
                  />
                ))}
              </div>
            ) : (
              <PlaceholderBlock />
            )}
          </AccordionPanel>
        ))}
      </Accordion>
      <GroupLayout>
        {callToActionCards.map(({ image, caption, link }, i) => {
          const relativePath = /^\//.test(link);
          return relativePath ? (
            <Link href={link} key={`card${i}`} passHref>
              <CardCta image={image} text={caption} />
            </Link>
          ) : (
            <CardCta
              key={`card${i}`}
              href={link}
              image={image}
              text={caption}
            />
          );
        })}
      </GroupLayout>
    </motion.div>
  );
};

export const getStaticProps = async () => getPageProps('index');

export default Home;
