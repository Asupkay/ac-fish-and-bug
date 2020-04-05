import React from 'react';
import './ItemInfo.css';
import ItemTime from './ItemTime';
import ItemMonth from './ItemMonth';

const ItemInfo = ({item, handleCheck, checked}) => {
  return (
    <div className="item-info">
      <img alt={item.name} src={item.icon}/>
      <h3>{item.name}</h3>
      <input type="checkbox" 
        checked={checked === 'true'} 
        onChange={handleCheck} 
        id={item.name} 
        name={item.name} 
        value={item.name}
      />
      <label htmlFor={item.name}>Donated</label>
      <p>Location: {item.location}</p>
      <p>Price: {item.price} Bells</p>
      <ItemTime times={item.availability.times}/>
      <ItemMonth months={item.availability.months}/>
    </div>
  )
};

export default ItemInfo;
