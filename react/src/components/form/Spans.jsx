import styles from './Spans.module.css';

const Spans = ({ span, spanClass }) => {
  return (
    <>
      <span className={`${styles[spanClass]}`}>{span}</span>
    </>
  );
};

export default Spans;
