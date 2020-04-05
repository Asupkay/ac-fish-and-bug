import {monthNames, dayNames} from './consts';

export const formatTime = (date) => {
  const minNum = date.getMinutes();
  const min = (minNum < 10) ? `0${minNum}`: `${minNum}`;
  const milTime = date.getHours();
  let hours = milTime;
  if (milTime > 12) {
    hours -= 12;
  } else if (milTime === 0) {
    hours = 12;
  }

  const hourString = (hours < 10) ? `0${hours}` : `${hours}`;
  return (milTime >= 12) ? `${hourString}:${min}pm` : `${hourString}:${min}am`;
}

export const formatDate = (date) => {
  const dayOfWeek = dayNames[date.getDay()];
  const month = monthNames[date.getMonth()];
  const dayOfMonth = date.getDate();

  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}

