import React from 'react';
import './Item.css';

const isItemNew = (item) => {
  let isNew = false;
  item.availability.months.forEach((month) => {
    isNew = isNew || (month.start === new Date().getMonth() && month.end - 11 != month.start)
  });
  return isNew;
}

const isItemLeaving = (item) => {
  let isLeaving = false;
  item.availability.months.forEach((month) => {
    isLeaving = isLeaving || (month.end === new Date().getMonth() && month.start + 11 != month.end)
  });
  return isLeaving;}

const Item = ({item, onClick, found}) => {
  const foundStyle = (found === 'true') ? 'found-opacity' : '';
  const isNew = isItemNew(item);
  const isLeaving = isItemLeaving(item);
  return (
    <div className={`item-container ${foundStyle}`}>
      <div className="content-container">
        <img 
          onClick={onClick}
          className="item-icon" 
          src={item.icon} 
          alt={item.name}
        />
        {isNew && <div className="new-dot"/>}
        {isLeaving && <div className="leaving-dot"/>}
      </div>
    </div>
  );
}

export default Item;
