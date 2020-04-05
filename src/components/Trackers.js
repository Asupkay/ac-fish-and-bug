import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import './Trackers.css';
import Tracker from './Tracker';
import Dropdown from './Dropdown';
import LeavingDot from './LeavingDot';
import NewDot from './NewDot';
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
  NOT_DONATED: 'Not Donated',
}

const hemisphereOptions = {
  NORTHERN_HEMISPHERE: 'North',
  SOUTHERN_HEMISPHERE: 'South'
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
    case(sortOptions.NOT_DONATED):
      const cookies = new Cookies();      
      items.sort((a, b) => {
        const aVal = (cookies.get(a.name) === 'true') ? 1 : 0;
        const bVal =(cookies.get(b.name) === 'true') ? 1 : 0;
        return aVal - bVal;
      });
      break;
    default:
      return;
  }
}



const Trackers = ({date}) => {
  const cookies = new Cookies();
  const [sortBy, setSortBy] = useState(sortOptions.ALPHABETICAL)
  const [hemisphere, setHemisphere] = useState(cookies.get('hemisphere') || hemisphereOptions.NORTHERN_HEMISPHERE);

  const handleChange = (e) => {
    setSortBy(e.target.value);
  }

  const handleHemisphereChange = (e) => {
    setHemisphere(e.target.value);
    cookies.set('hemisphere', e.target.value);
  }

  const cMonth = date.getMonth();
  const offset = (hemisphere === hemisphereOptions.SOUTHERN_HEMISPHERE) ? 6 : 0;
  const cHour = date.getHours();
  const cFish = fish.filter(fish => filterData(fish, cMonth + offset, cHour));
  const cBugs = bugs.filter(bug => filterData(bug, cMonth + offset, cHour));
  sortItems(sortBy, cFish);
  sortItems(sortBy, cBugs);
  return (
    <div className="trackers-container">
      <Dropdown 
        title="Sort by:"
        options={sortOptions} 
        handleChange={handleChange}
        selected={sortBy}
      />
      <Dropdown
        title="Hemisphere:"
        handleChange={handleHemisphereChange}
        options={hemisphereOptions}
        selected={hemisphere}
      />
      <div className="key-container">
        <span className="key">
          <div className="padding-right">
            <NewDot/>
          </div> 
          New this month
        </span>
        <span className="key">
          <div className="padding-right">
            <LeavingDot/>
          </div>
          Leaving this month
        </span>      
      </div>
      <Tracker title="Fish" items={cFish}/>
      <Tracker title="Bugs" items={cBugs}/>
    </div> 
  );
};

export default Trackers;
