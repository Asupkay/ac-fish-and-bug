import React from 'react';
import './Item.css';

const Item = ({item, onClick}) => {
  return (
    <div className="item-container">
      <img 
        onClick={onClick}
        className="item-icon" 
        src={item.icon} 
        alt={item.name}
      />
    </div>
  );
}

export default Item;
