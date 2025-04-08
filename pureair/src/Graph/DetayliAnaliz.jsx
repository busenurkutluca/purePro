import React from 'react';
import AlertPanel from './AlertPanel';
import GraphLogo from './GraphLogo';
import DetayliAnalizMenü from './DetayliAnalizMenü';
import './DetayliAnaliz.css';
import { useLocation } from 'react-router-dom';

const data = [
  { time: "2025-04-01 00:00", PM25: 10, PM10: 20, NO2: 15, SO2: 5, O3: 30, anomaly: false },
  { time: "2025-04-01 01:00", PM25: 12, PM10: 22, NO2: 16, SO2: 6, O3: 32, anomaly: false },
  { time: "2025-04-01 02:00", PM25: 50, PM10: 60, NO2: 40, SO2: 20, O3: 50, anomaly: true },
  { time: "2025-04-01 03:00", PM25: 15, PM10: 25, NO2: 18, SO2: 7, O3: 35, anomaly: false },
];

function DetayliAnaliz() {
  const location = useLocation();
  const { lat, lng } = location.state || {};

  const anomalies = data.filter(item => item.anomaly);

  return (
    <div className="detayli-analiz-container">
      <h1 className="detayli-analiz-title">Detailed Analysis and Abnormal Values</h1>
      {lat && lng && (
        <p>Selected Region: Latitude: {lat.toFixed(4)}, Longitude: {lng.toFixed(4)}</p>
      )}
      <GraphLogo />
      <div className="detayli-analiz-content">
        <div className="legend-container">
          <h3 className="legend-title">Line Descriptions</h3>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#6a5acd' }}></span>
            PM2.5: Fine Particulate Matter (2.5 microns)
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#00ced1' }}></span>
            PM10: Particulate Matter (10 microns)
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#ffa500' }}></span>
            NO2: Nitrogen Dioxide
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#ff4500' }}></span>
            SO2: Sulfur Dioxide
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#9932cc' }}></span>
            O3: Ozone
          </div>
          <div className="legend-item">
            <span className="legend-color anomaly-dot"></span>
            Anomaly: Above threshold values
          </div>
        </div>
        <AlertPanel anomalies={anomalies} />
      </div>
      <DetayliAnalizMenü />
    </div>
  );
}

export default DetayliAnaliz;