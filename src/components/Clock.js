import React from 'react';
import './Clock.css';

const formatTime = (date) => {
  const minNum = date.getMinutes();
  const min = (minNum < 10) ? `0${minNum}`: `${minNum}`;
  const milTime = date.getHours();
  let hours = milTime;
  if (milTime > 12) {
    hours -= 12;
  } else if (milTime == 0) {
    hours = 12;
  }

  const hourString = (hours < 10) ? `0${hours}` : `${hours}`;
  return (milTime >= 12) ? `${hourString}:${min}pm` : `${hourString}:${min}am`;
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
