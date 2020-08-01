import styles from './accordionPanel.module.scss';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  open: { opacity: 1, height: 'auto' },
  collapsed: { opacity: 0, height: 0 },
};

const AccordionPanel = ({
  id,
  index,
  title,
  children,
  open = false,
  onSel,
}) => (
  <>
    <h3>
      <button
        onClick={() => {
          onSel(open ? false : index);
        }}
        aria-expanded={open}
        className={styles['trigger']}
        aria-controls={`sect${id}`}
        id={`accordion${id}`}
      >
        <div className={styles['title']}>
          <span className={styles['icon']}>
            {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </span>
          {title}
        </div>
      </button>
    </h3>
    {open && (
      <AnimatePresence>
        <motion.div
          id={`sect${id}`}
          role="region"
          aria-labelledby={`accordion${id}`}
          className={styles.panel}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )}
  </>
);

export default AccordionPanel;
