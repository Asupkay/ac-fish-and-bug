import React from 'react';
import Cookies from 'universal-cookie';
import Tracker from './Tracker';
import DotKey from './DotKey';
import './FishPage.css';
import {fish} from '../data/fish';
import {hemisphereOptions} from './consts';

const FishPage = (props) => {
  const cookies = new Cookies();
  const hemisphere = cookies.get('hemisphere') || hemisphereOptions.NORTHERN_HEMISPHERE; 
  const offset = (hemisphere === hemisphereOptions.SOUTHERN_HEMISPHERE) ? 6 : 0;

  return (
    <>
      <div className="dot-key-container">
        <DotKey/>
      </div>
      <Tracker 
        title={`Fish (${hemisphere}ern Hemisphere)`} 
        items={fish}
        offset={offset}
      />
    </>
  );
};

export default FishPage;
