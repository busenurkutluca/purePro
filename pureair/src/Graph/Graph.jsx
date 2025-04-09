import React from 'react';
import PollutionGraph from './PollutionGraph';
import GraphLogo from './GraphLogo';
import GraphPage from './GraphPage';
import AlertPanel from './AlertPanel';
import GraphMenu from './GraphMenu';
import './Graph.css';

const data = [
  { time: "2025-04-01 00:00", PM25: 10, PM10: 20, NO2: 15, SO2: 5, O3: 30, anomaly: false },
  { time: "2025-04-01 01:00", PM25: 12, PM10: 22, NO2: 16, SO2: 6, O3: 32, anomaly: false },
  { time: "2025-04-01 02:00", PM25: 50, PM10: 60, NO2: 40, SO2: 20, O3: 50, anomaly: true },
  { time: "2025-04-01 03:00", PM25: 15, PM10: 25, NO2: 18, SO2: 7, O3: 35, anomaly: false },
];

function Graph() {
  return (
    <div className="graph-container">
      <GraphPage />
      <GraphLogo />
      <div className="graph-content">
        <PollutionGraph data={data} />
      </div>
      <GraphMenu />
    </div>
  );
}

export default Graph;