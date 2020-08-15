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
        <ul className='flex'>
          <li className='mr-6'>
            <Link className='text-blue-500 hover:text-blue-800' to='/dayTrip'>
              DayTrip
            </Link>
          </li>
          <li>
            <Link
              className='text-blue-500 hover:text-blue-800'
              to='/hello-world'
            >
              Hello World
            </Link>
          </li>
        </ul>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/dayTrip'>
            <HighChartAverageTripofDay bikeData={bikeData.bikeTripData} />
          </Route>
          <Route path='/hello-world'>
            <HelloWorld />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
