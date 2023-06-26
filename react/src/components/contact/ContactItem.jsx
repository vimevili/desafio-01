import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ src, text }) => {
  return (
    <>
      <li className={styles.containerFlex}>
        <img src={src} alt="" />
        <a href="#">{text}</a>
      </li>
    </>
  );
};

export default ContactItem;
