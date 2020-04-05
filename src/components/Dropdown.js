import React from 'react';
import './Dropdown.css';

const Dropdown = ({options, selected, handleChange, title}) => {
  return (
    <div className="dropdown-container">
      <label htmlFor="dropdown">{title}</label>
      <select className="sort-select" id="dropdown" onChange={handleChange} value={selected}>
        {Object.keys(options).map((option) => {
          return <option key={option} value={options[option]}>{options[option]}</option>
        })}
      </select>
    </div>
  );
}

export default Dropdown;
