import React from 'react';
import './ItemInfo.css';

const ItemInfo = ({item}) => {
  return (
    <div className="item-info">
      <img alt={item.name} src={item.icon}/>
      <h3>{item.name}</h3>
      <p>Location: {item.location}</p>
      <p>Price: {item.price} Bells</p>
    </div>
  )
};

export default ItemInfo;
