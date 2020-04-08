import React from 'react';
import {monthNames} from './consts';

const ItemMonth = ({months, offset}) => {
  const timeTextList = months.map((month) => {
    const monthText = `${monthNames[(month.start + offset) % 12]}-${monthNames[(month.end + offset) % 12]}`;
    return (month.start === (month.end + 1) % 12) ? 'All Year' : monthText;
  });
  return (
    <div><span className="bold">Months:</span> {timeTextList.join(' & ')}</div>
  )
};

export default ItemMonth;
