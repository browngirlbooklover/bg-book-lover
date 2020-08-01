import styles from './accordionPanel.module.scss';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const AccordionPanel = ({ id, title, children, open = false }) => (
  <>
    <h3>
      <button
        aria-expanded={open}
        className={styles['trigger']}
        aria-controls={`sect${id}`}
        id={`accordion${id}`}
      >
        <span className={styles['title']}>
          {title}
          <span className={styles['icon']}>
            {open ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </span>
        </span>
      </button>
    </h3>
    <div
      id={`sect${id}`}
      role="region"
      aria-labelledby={`accordion${id}`}
      className={`panel ${open ? 'open' : ''}`}
    >
      {children}
    </div>
  </>
);

export default AccordionPanel;
