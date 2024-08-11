import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      <p className={styles.contactName}>{contact.name}</p>
      <p className={styles.contactNumber}>{contact.number}</p>
      <button className={styles.deleteButton} onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;