import React from 'react';
import CheckboxItem from './CheckboxItem';
import styles from './Checkboxes.module.css';
import { FormContext } from '../FormContext';

const Checkboxes = () => {
  const formData = React.useContext(FormContext);

  const items = [
    { id: 'user-design', value: 'UI/UX design' },
    { id: 'web-design', value: 'Web Design' },
    { id: 'graphic-design', value: 'Graphic Design' },
    { id: 'design-system', value: 'Design System' },
    { id: 'other', value: 'Other' },
  ];
  return (
    <div>
      <h2 className={styles.subtitle}>I'm interested in...</h2>
      <ul className={styles.checkboxesContainer}>
        {items.map((item, index) => (
          <li key={index}>
            <CheckboxItem
              id={item.id}
              value={item.value}
              ref={(el) => (formData.checkboxesRef.current[index] = el)}
              onChange={({ target }) =>
                formData.handleCheckboxChange({ target }, item.id)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkboxes;
