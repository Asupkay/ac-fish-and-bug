import React from 'react';
import {formatTime} from './timeUtils';

const ItemTime = ({times}) => {
  const timeTextList = times.map((time) => {
    if (time.start === (time.end) % 24) {
      return 'All Day';
    }
    const timeStart = new Date();
    const timeEnd = new Date();
    
    timeStart.setHours(time.start);
    timeEnd.setHours(time.end);
    timeStart.setMinutes(0);
    timeEnd.setMinutes(0);
    return `${formatTime(timeStart)}-${formatTime(timeEnd)}`;
  });
  return (
    <div><span className="bold">Times:</span> {timeTextList.join(' & ')}</div>
  )
};

export default ItemTime;
