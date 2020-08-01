import styles from './accordion.module.scss';
import { Children, isValidElement, cloneElement, useState } from 'react';

const Accordion = ({ children }) => {
  const [sel, setSel] = useState(0);
  return (
    <div className={styles.accordion}>
      {Children.map(children, (child, i) => {
        if (isValidElement(child)) {
          const open = sel === i;
          console.log(open, sel, i);
          const props = {
            open: sel === undefined ? i === 0 : sel === i,
            onSel: () => {
              setSel(i);
              console.log(sel);
            },
          };
          return cloneElement(child, props);
        }

        return child;
      })}
    </div>
  );
};

export default Accordion;
