import React from 'react';
import './Clock.css';

const formatTime = (date) => {
  const minNum = date.getMinutes();
  const min = (minNum < 10) ? `0${minNum}`: `${minNum}`;
  const milTime = date.getHours();
  return (milTime > 12) ? `${milTime - 12}:${min}pm` : `${milTime}:${min}am`;
}

const formatDate = (date) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();

  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}

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
