import React from 'react';
import './Tracker.css';

const renderItems = (items) => {
  return items.map((item, index) => 
    <img key={index} src={item.icon} alt={item.name}/>
  );
};

const Tracker = ({title, items}) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      {renderItems(items)} 
    </div>
  );
};

export default Tracker;
