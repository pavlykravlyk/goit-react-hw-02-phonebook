import React from 'react';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {/* {contacts !== [] ? <h2>Contacts</h2> : null} */}
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
    </div>
  );
};

export default ContactsList;
