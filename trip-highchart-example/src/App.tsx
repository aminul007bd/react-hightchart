import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HighChartAverageTripofDay } from './components/HighChartAverageTripofDay';
import HelloWorld from './components/HelloWorld';
import './App.css';

import bikeTripData from '../src/data/bike_trip_data.json';

function App() {
  const bikeData = { bikeTripData };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/dayTrip'>DayTrip</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/dayTrip'>
            <HighChartAverageTripofDay bikeData={bikeData.bikeTripData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
