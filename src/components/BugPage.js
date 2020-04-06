import React from 'react';
import Tracker from './Tracker';
import {bugs} from '../data/bugs';

const BugsPage = (props) => {
  return (
    <Tracker title={"Bugs"} items={bugs}/>
  );
};

export default BugsPage;
