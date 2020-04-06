import React from 'react';
import Tracker from './Tracker';
import {fish} from '../data/fish';

const FishPage = (props) => {
  console.log(fish);
  return (
    <Tracker title={"Fish"} items={fish}/>
  );
};

export default FishPage;
