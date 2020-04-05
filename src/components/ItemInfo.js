import React from 'react';
import './ItemInfo.css';
import ItemTime from './ItemTime';
import ItemMonth from './ItemMonth';

const ItemInfo = ({item, handleCheck, checked}) => {
  return (
    <div className="item-info">
      <img alt={item.name} src={item.icon}/>
      <h3 className="item-info-header">{item.name}</h3>
      <div className="donate-checkbox-container">
        <input type="checkbox" 
          checked={checked === 'true'} 
          onChange={handleCheck} 
          id={item.name} 
          name={item.name} 
          value={item.name}
        />
        <label htmlFor={item.name}>Donated</label>
      </div>
      <div className="info-container">
        <div><span className="bold">Location:</span> {item.location}</div>
        <div><span className="bold">Price:</span> {item.price} Bells</div>
        <ItemTime times={item.availability.times}/>
        <ItemMonth months={item.availability.months}/>
      </div>
    </div>
  )
};

export default ItemInfo;
