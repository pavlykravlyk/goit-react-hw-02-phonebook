import React from 'react';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.List}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.Item}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
