import React from 'react';
import {formatTime} from './timeUtils';

const ItemTime = ({times}) => {
  const timeTextList = times.map((time) => {
    const timeStart = new Date();
    const timeEnd = new Date();
    
    timeStart.setHours(time.start);
    timeEnd.setHours(time.end);
    timeStart.setMinutes(0);
    timeEnd.setMinutes(0);
    return `${formatTime(timeStart)}-${formatTime(timeEnd)}`;
  });
  return (
    <p>Time: {timeTextList.join(' & ')}</p>
  )
};

export default ItemTime;
