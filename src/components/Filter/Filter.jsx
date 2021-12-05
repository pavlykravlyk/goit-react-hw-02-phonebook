import React from 'react';
// import styles from './Filter.module.css';

const Filter = ({ contactName, onFindContact }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        // type="input"
        // name=""
        // pattern=""
        // title=""
        value={contactName}
        onChange={onFindContact}
      />
    </label>
  );
};

export default Filter;
