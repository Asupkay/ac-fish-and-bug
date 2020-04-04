import React from 'react';
import './Tracker.css';

const renderItems = (items) => {
  return items.map((item) => 
    <p key={item.name}>{item.name}</p>
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
