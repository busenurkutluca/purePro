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
    if (item.PM25 > thresholds.PM25) details.push(`PM2.5: ${item.PM25} (Threshold: ${thresholds.PM25})`);
    if (item.PM10 > thresholds.PM10) details.push(`PM10: ${item.PM10} (Threshold: ${thresholds.PM10})`);
    if (item.NO2 > thresholds.NO2) details.push(`NO2: ${item.NO2} (Threshold: ${thresholds.NO2})`);
    if (item.SO2 > thresholds.SO2) details.push(`SO2: ${item.SO2} (Threshold: ${thresholds.SO2})`);
    if (item.O3 > thresholds.O3) details.push(`O3: ${item.O3} (Threshold: ${thresholds.O3})`);
    return details.length > 0 ? details.join(', ') : 'Unknown reason';
  };

  if (!anomalies || anomalies.length === 0) {
    return <div className="alert-panel no-anomaly">No anomalies found.</div>;
  }

  return (
    <div className="alert-panel">
      <h3 className="alert-title">Warning: Anomalies</h3>
      <table className="anomaly-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Values</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {anomalies.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>PM2.5: {item.PM25}, PM10: {item.PM10}, NO2: {item.NO2}, SO2: {item.SO2}, O3: {item.O3}</td>
              <td className="anomaly-reason">{getAnomalyDetails(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertPanel;