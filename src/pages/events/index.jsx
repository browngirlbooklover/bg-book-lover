import { getPageProps } from '../../utils/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../util/motionVariants';
import styles from './events.module.scss';
import CardCta from '../../components/cardCta/cardCta';
import BlockQuote from '../../components/blockQuote/blockQuote';
import ComingSoonBlock from '../../components/placeholderBlock/PlaceholderBlock';
import PlaceholderBlock from '../../components/placeholderBlock/PlaceholderBlock';

const Events = ({ data, content }) => (
  <motion.div
    className={styles.layout}
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    <h1 className="header-1">{data?.header}</h1>
    <section>
      <h2 className="header-two">{data?.upComingEvent?.title}</h2>
      {data?.upComingEvent?.events?.length > 0 ? (
        <div className={styles['card-container']}>
          {data?.upComingEvent?.events?.map((obj, i) => {
            return (
              <CardCta key={`upComingEvent${i}`} image={obj?.image}>
                <div>
                  <strong>{obj?.title}</strong>
                </div>
                <time>{obj?.date}</time> <span>{obj?.location}</span>
                <div className={styles['card-btn']}>Attend this Event</div>
              </CardCta>
            );
          })}
        </div>
      ) : (
        <PlaceholderBlock />
      )}
    </section>
    <section>
      <h2 className="header-two">{data?.pastEvent?.title}</h2>
      {data?.pastEvent?.events?.length > 0 ? (
        <div className={styles['card-container']}>
          {data?.pastEvent?.events?.map((obj, i) => {
            return (
              <CardCta key={`pastEvents${i}`} image={obj?.image}>
                <div>
                  <strong>{obj?.title}</strong>
                </div>
                <time>{obj?.date}</time> <span>{obj?.location}</span>
                <div className={styles['card-btn']}>View Past Event</div>
              </CardCta>
            );
          })}
        </div>
      ) : (
        <PlaceholderBlock />
      )}
    </section>
    <section>
      <h2 className="header-two">{data?.reviews?.title}</h2>
      <div className={styles['block-section']}>
        {data?.reviews?.reviews?.map((v, i) => (
          <BlockQuote key={`bp${i}`} {...v} />
        ))}
      </div>
    </section>
  </motion.div>
);

export const getStaticProps = async () => getPageProps('events');

export default Events;
