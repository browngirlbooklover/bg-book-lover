import styles from './accordionPanel.module.scss';

const AccordionPanel = ({ id, title, children, open = false }) => (
  <>
    <h3>
      <button
        aria-expanded={open}
        className={styles['accordion-trigger']}
        aria-controls="sect1"
        id={`accordion${id}`}
      >
        <span className={styles['accordion-title']}>
          {title}
          <span className={styles['accordion-icon']}></span>
        </span>
      </button>
    </h3>
    <div
      id="sect1"
      role="region"
      aria-labelledby={`accordion${id}`}
      className="Accordion-panel"
    >
      {children}
    </div>
  </>
);
