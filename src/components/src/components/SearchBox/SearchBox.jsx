import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label} htmlFor="filter">Find contacts by name</label>
      <input
        className={styles.input}
        id="filter"
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default SearchBox;