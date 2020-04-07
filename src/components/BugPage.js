import React from 'react';
import Tracker from './Tracker';
import DotKey from './DotKey';
import './BugPage.css';
import {bugs} from '../data/bugs';

const BugsPage = (props) => {
  return (
    <>
      <div className="dot-key-container">
        <DotKey/>
      </div>
      <Tracker title={"Bugs"} items={bugs}/>
    </>
  );
};

export default BugsPage;
