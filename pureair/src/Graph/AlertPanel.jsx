// AlertPanel.js
import React from 'react';

function AlertPanel({ anomalies }) {
  const thresholds = {
    PM25: 25,
    PM10: 50,
    NO2: 40,
    SO2: 20,
    O3: 50,
  };

  const getAnomalyDetails = (item) => {
    const details = [];
    if (item.PM25 > thresholds.PM25) details.push(`PM2.5: ${item.PM25} (Eşik: ${thresholds.PM25})`);
    if (item.PM10 > thresholds.PM10) details.push(`PM10: ${item.PM10} (Eşik: ${thresholds.PM10})`);
    if (item.NO2 > thresholds.NO2) details.push(`NO2: ${item.NO2} (Eşik: ${thresholds.NO2})`);
    if (item.SO2 > thresholds.SO2) details.push(`SO2: ${item.SO2} (Eşik: ${thresholds.SO2})`);
    if (item.O3 > thresholds.O3) details.push(`O3: ${item.O3} (Eşik: ${thresholds.O3})`);
    return details.length > 0 ? details.join(', ') : 'Bilinmeyen neden';
  };

  if (!anomalies || anomalies.length === 0) {
    return null; // Anomali yoksa paneli gösterme
  }

  return (
    <div
      className="alert-panel"
      style={{
        padding: '10px',
        backgroundColor: '#ffe6e6',
        border: '2px solid #ff4d4d',
        borderRadius: '5px',
        width: '250px',
        fontSize: '0.9rem',
      }}
    >
      <h3 style={{ color: '#ff4d4d', margin: '0 0 10px 0', fontSize: '1.1rem' }}>Uyarı: Anormal Değerler</h3>
      {anomalies.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <strong>{item.time}</strong><br />
          <span>Değerler: PM2.5: {item.PM25}, PM10: {item.PM10}, NO2: {item.NO2}, SO2: {item.SO2}, O3: {item.O3}</span><br />
          <span style={{ color: '#ff4d4d', fontWeight: 'bold' }}>Neden: {getAnomalyDetails(item)}</span>
        </div>
      ))}
    </div>
  );
}

export default AlertPanel;