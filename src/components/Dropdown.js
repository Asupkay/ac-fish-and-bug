import React from 'react';
import './Dropdown.css';

const SortDropdown = ({options, selected, handleChange}) => {
  return (
    <div className="dropdown-container">
      <label htmlFor="sortBy">Sort by:</label>
      <select className="sort-select" id="sortBy" onChange={handleChange} value={selected}>
        {Object.keys(options).map((option) => {
          return <option key={option} value={options[option]}>{options[option]}</option>
        })}
      </select>
    </div>
  );
}

export default SortDropdown;
