import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import './Trackers.css';
import Tracker from './Tracker';
import Dropdown from './Dropdown';
import DotKey from './DotKey';
import {fish} from '../data/fish'; 
import {bugs} from '../data/bugs';
import {hemisphereOptions} from './consts';

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

  const showOnlyActiveCookie = cookies.get('showOnlyActive');
  const showOnlyActiveDefault = (showOnlyActiveCookie) ? showOnlyActiveCookie === 'true' : true;
  const [showOnlyActiveCritters, setShowOnlyActiveCritters] = useState(showOnlyActiveDefault);

  const handleChange = (e) => {
    setSortBy(e.target.value);
  }

  const handleHemisphereChange = (e) => {
    setHemisphere(e.target.value);
    cookies.set('hemisphere', e.target.value);
  }

  const handleCheck = (e) => {
    setShowOnlyActiveCritters(e.target.checked);
    cookies.set('showOnlyActive', e.target.checked);
  }

  const cMonth = date.getMonth();
  const offset = (hemisphere === hemisphereOptions.SOUTHERN_HEMISPHERE) ? 6 : 0;
  const cHour = date.getHours();
  const cFish = (showOnlyActiveCritters) ? fish.filter(fish => filterData(fish, cMonth + offset, cHour)) : fish;
  const cBugs = (showOnlyActiveCritters) ? bugs.filter(bug => filterData(bug, cMonth + offset, cHour)): bugs;
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
      <div className="show-only-active-checkbox">
        <input type="checkbox" 
          checked={showOnlyActiveCritters} 
          onChange={handleCheck} 
          id="showOnlyActive"
        />
        <label htmlFor="showOnlyActive">Show only active critters</label>
      </div>
      <DotKey/>
      <Tracker title="Active Fish" items={cFish} offset={offset}/>
      <Tracker title="Active Bugs" items={cBugs} offset={offset}/>
    </div> 
  );
};

export default Trackers;
