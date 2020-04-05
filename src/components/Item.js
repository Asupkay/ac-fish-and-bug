import React from 'react';
import './Item.css';

const Item = ({item, onClick, found}) => {
  const foundStyle = (found === 'true') ? 'found-opacity' : '';
  return (
    <div className={`item-container ${foundStyle}`}>
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
