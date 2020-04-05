import React from 'react';
import './Clock.css';
import {formatTime, formatDate} from './timeUtils';

const Clock = ({date}) => {
  return (
    <div className="clock-container">
      <div className="time-container">
        {formatTime(date)}
      </div>
      <div className="date-container">{formatDate(date)}</div>
    </div>
  );
};

export default Clock;
