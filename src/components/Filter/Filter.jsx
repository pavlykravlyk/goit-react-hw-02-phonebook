import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ contactName, onFindContact }) => {
  return (
    <label className={styles.Label} htmlFor="">
      Find contacts by name
      <input
        className={styles.Input}
        type="text"
        value={contactName}
        onChange={onFindContact}
      />
    </label>
  );
};

export default Filter;
