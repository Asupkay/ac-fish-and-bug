import React from 'react';
import Cookies from 'universal-cookie';
import Tracker from './Tracker';
import DotKey from './DotKey';
import './BugPage.css';
import {bugs} from '../data/bugs';
import {hemisphereOptions} from './consts';

const BugsPage = (props) => {
  const cookies = new Cookies();
  const hemisphere = cookies.get('hemisphere') || hemisphereOptions.NORTHERN_HEMISPHERE; 
  const offset = (hemisphere === hemisphereOptions.SOUTHERN_HEMISPHERE) ? 6 : 0;

  return (
    <>
      <div className="dot-key-container">
        <DotKey/>
      </div>
      <Tracker 
        title={`Bugs (${hemisphere}ern Hemisphere)`} 
        items={bugs}
        offset={offset}
      />
    </>
  );
};

export default BugsPage;
