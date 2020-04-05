import React from 'react';
import {monthNames} from './consts';

const ItemMonth = ({months}) => {
  const timeTextList = months.map((month) => {
    return `${monthNames[month.start]}-${monthNames[month.end]}`;
  });
  return (
    <div><span className="bold">Months:</span> {timeTextList.join(' & ')}</div>
  )
};

export default ItemMonth;
