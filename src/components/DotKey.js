import React from 'react';
import './DotKey.css';
import LeavingDot from './LeavingDot';
import NewDot from './NewDot';

const DotKey = (props) => {
  return (
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
  );
}

export default DotKey;
