import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: "2025-04-01 00:00", PM25: 10, PM10: 20, NO2: 15, SO2: 5, O3: 30, anomaly: false },
  { time: "2025-04-01 01:00", PM25: 12, PM10: 22, NO2: 16, SO2: 6, O3: 32, anomaly: false },
  { time: "2025-04-01 02:00", PM25: 50, PM10: 60, NO2: 40, SO2: 20, O3: 50, anomaly: true },
  { time: "2025-04-01 03:00", PM25: 15, PM10: 25, NO2: 18, SO2: 7, O3: 35, anomaly: false },
];

function PollutionGraph() {
  return (
    <div className="pollution-graph-container" style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            key="PM25"
            type="monotone"
            dataKey="PM25"
            stroke="#8884d8"
            name="PM2.5"
            dot={(props) => {
              if (props.payload.anomaly) {
                return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              }
              return null;
            }}
          />
          <Line
            key="PM10"
            type="monotone"
            dataKey="PM10"
            stroke="#82ca9d"
            name="PM10"
            dot={(props) => {
              if (props.payload.anomaly) {
                return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              }
              return null;
            }}
          />
          <Line
            key="NO2"
            type="monotone"
            dataKey="NO2"
            stroke="#ff7300"
            name="NO2"
            dot={(props) => {
              if (props.payload.anomaly) {
                return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              }
              return null;
            }}
          />
          <Line
            key="SO2"
            type="monotone"
            dataKey="SO2"
            stroke="#ff0000"
            name="SO2"
            dot={(props) => {
              if (props.payload.anomaly) {
                return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              }
              return null;
            }}
          />
          <Line
            key="O3"
            type="monotone"
            dataKey="O3"
            stroke="#00C49F"
            name="O3"
            dot={(props) => {
              if (props.payload.anomaly) {
                return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              }
              return null;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PollutionGraph;