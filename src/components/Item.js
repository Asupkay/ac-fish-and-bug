import React from 'react';
import './Item.css';

import NewDot from './NewDot';
import LeavingDot from './LeavingDot';

const isItemNew = (item, offset) => {
  let isNew = false;
  item.availability.months.forEach((month) => {
    isNew = isNew || (month.start === new Date().getMonth() + offset && month.end - 11 !== month.start)
  });
  return isNew;
}

const isItemLeaving = (item, offset) => {
  let isLeaving = false;
  item.availability.months.forEach((month) => {
    isLeaving = isLeaving || (month.end === new Date().getMonth() + offset && month.start + 11 !== month.end)
  });
  return isLeaving;
}

const Item = ({item, onClick, found, offset}) => {
  const foundStyle = (found === 'true') ? 'found-opacity' : '';
  const isNew = isItemNew(item, offset);
  const isLeaving = isItemLeaving(item, offset);
  return (
    <div className={`item-container ${foundStyle}`}>
      <div className="content-container">
        <img 
          onClick={onClick}
          className="item-icon" 
          src={item.icon} 
          alt={item.name}
        />
        {isNew && <div className="new-dot-container"><NewDot/></div>}
        {isLeaving && <div className="leaving-dot-container"><LeavingDot/></div>}
      </div>
    </div>
  );
}

export default Item;
