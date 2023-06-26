import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = [
    { img: 'src/assets/img/email.svg', text: 'SaulDesign@gmail.com' },
    { img: 'src/assets/img/phone.svg', text: '+123 456 789' },
    { img: 'src/assets/img/location.svg', text: '123 Street 456 House' },
  ];

  return (
    <>
      <h1 className="cor-0 font-large">
        Let's discuss on something <span className="cor-1">cool</span> together
      </h1>

      <ul className={styles.itemsContainer}>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.index}
            src={contact.img}
            text={contact.text}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
