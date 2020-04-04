import React from 'react';
import Tracker from './Tracker';
import {data} from '../data'; 

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
  console.log(data.fish.filter(fish => filterData(fish, 3, 3)));
  return (
    <div>
      <Tracker title="Fish"/>
      <Tracker title="Bugs"/>
    </div> 
  );
};

export default Trackers;
