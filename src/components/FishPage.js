import React from 'react';
import Tracker from './Tracker';
import DotKey from './DotKey';
import './FishPage.css';
import {fish} from '../data/fish';

const FishPage = (props) => {
  console.log(fish);
  return (
    <div className="page-container">
      <div className="dot-key-container">
        <DotKey/>
      </div>
      <Tracker title={"Fish"} items={fish}/>
    </div>
  );
};

export default FishPage;
