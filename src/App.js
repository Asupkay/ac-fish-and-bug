import React from 'react';
import TrackerPage from './components/TrackerPage';
import FishPage from './components/FishPage';
import BugsPage from './components/BugPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fish">
          <FishPage/>
        </Route>
        <Route path="/bugs">
          <BugsPage/>
        </Route>
        <Route path="/">
          <TrackerPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
