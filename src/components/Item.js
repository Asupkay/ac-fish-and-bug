import React from 'react';
import './Item.css';

const Item = ({item, onClick}) => {
  return (<img 
    onClick={onClick}
    className="item-icon" 
    src={item.icon} 
    alt={item.name}
  />);
}

export default Item;
