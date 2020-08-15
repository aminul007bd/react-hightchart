import React from 'react';
import { HighChartAverageTripofDay } from './components/HighChartAverageTripofDay';
import HelloWorld from './components/HelloWorld';
import './App.css';

import bikeTripData from '../src/data/bike_trip_data.json';

function App() {
  const bikeData = { bikeTripData };
  return (
    <div className='App'>
      <HighChartAverageTripofDay bikeData={bikeData.bikeTripData} />
      <HelloWorld />
    </div>
  );
}

export default App;
