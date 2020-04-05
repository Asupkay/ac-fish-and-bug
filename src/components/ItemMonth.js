import React from 'react';
import {monthNames} from './consts';

const ItemMonth = ({months}) => {
  const timeTextList = months.map((month) => {
    return `${monthNames[month.start]}-${monthNames[month.end]}`;
  });
  return (
    <p>Months: {timeTextList.join(' & ')}</p>
  )
};

export default ItemMonth;
