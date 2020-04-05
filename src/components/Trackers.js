import React, {useState} from 'react';
import './Trackers.css';
import Tracker from './Tracker';
import Dropdown from './Dropdown';
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

const sortOptions = {
  ALPHABETICAL: 'Alphabetical',
  MOST_VALUABLE: 'Most Valuable',
}

const sortItems = (option, items) => {
  switch(option) {
    case(sortOptions.ALPHABETICAL):
      items.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      });
      break;
    case(sortOptions.MOST_VALUABLE):
      items.sort((a, b) => {
        return b.price - a.price; 
      });
      break;
    default:
      return;
  }
}

const Trackers = ({date}) => {
  const [sortBy, setSortBy] = useState(sortOptions.ALPHABETICAL)

  const handleChange = (e) => {
    setSortBy(e.target.value);
  }

  const cMonth = date.getMonth();
  const cHour = date.getHours();
  const cFish = fish.filter(fish => filterData(fish, cMonth, cHour));
  const cBugs = bugs.filter(bug => filterData(bug, cMonth, cHour));
  sortItems(sortBy, cFish);
  sortItems(sortBy, cBugs);
  return (
    <div className="trackers-container">
      <Dropdown 
        options={sortOptions} 
        handleChange={handleChange}
        selected={sortBy}
      />
      <Tracker title="Fish" items={cFish}/>
      <Tracker title="Bugs" items={cBugs}/>
    </div> 
  );
};

export default Trackers;
