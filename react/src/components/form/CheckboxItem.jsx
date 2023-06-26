import styles from './CheckboxItem.module.css';

const Checkbox = ({ id, value }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {value}
      </label>
      <input type="checkbox" value={value} className={styles.checkboxItem} />
    </>
  );
};

export default Checkbox;
