import React from 'react';
import './Trackers.css';
import Tracker from './Tracker';
import {fish} from '../data/fish'; 
import {bugs} from '../data/bugs';

const withinBound = (bound, currentNum) => {
  const {start, end} = bound;
  if (end < start) {
    return currentNum >= start || currentNum <= end;
  }
  return currentNum >= start && currentNum <= end;
}

const isWithinAllBounds = (bounds, currentNum) => {
  let keep = false;
  bounds.forEach((bound) => {
    keep = keep || withinBound(bound, currentNum);
  });
  return keep;
}

const filterData = (item, month, time) => {
  const {availability} = item;
  return isWithinAllBounds(availability.times, time) && isWithinAllBounds(availability.months, month);
}

const Trackers = ({date}) => {
  const cMonth = date.getMonth();
  const cHour = date.getHours();
  const cFish = fish.filter(fish => filterData(fish, cMonth, cHour));
  const cBugs = bugs.filter(bug => filterData(bug, cMonth, cHour));
  return (
    <div className="trackers-container">
      <Tracker title="Fish" items={cFish}/>
      <Tracker title="Bugs" items={cBugs}/>
    </div> 
  );
};

export default Trackers;
