
//ResponsiveContainer: Grafiğin responsive olmasını sağlar, ekran boyutuna göre otomatik ölçeklenir.
//LineChart: Çizgi grafiği oluşturur.
//XAxis ve YAxis: X ekseni zamanı (time), Y ekseni kirlilik değerlerini gösterir.
//Tooltip: Kullanıcı grafikte bir noktaya hover yaptığında detayları gösterir.
//Legend: Grafikteki çizgilerin (PM2.5, PM10, vb.) açıklamasını gösterir.
//Line: Her bir kirlilik parametresi için bir çizgi oluşturur (örneğin PM25, PM10).
//Anomali İşaretleme: dot prop’u ile anomali olan noktalarda kırmızı bir daire (<circle>) çiziyoruz. anomaly: true olan veri noktalarında bu daire görünecek.


import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function PollutionGraph({ data }) {
  return (
    <div className="pollution-chart-container" style={{ width: '100%', maxWidth: '800px', height: 350 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="PM25"
            stroke="#8884d8"
            name="PM2.5"
            dot={(props) => {
              if (props.payload.anomaly) return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="PM10"
            stroke="#82ca9d"
            name="PM10"
            dot={(props) => {
              if (props.payload.anomaly) return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="NO2"
            stroke="#ff7300"
            name="NO2"
            dot={(props) => {
              if (props.payload.anomaly) return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="SO2"
            stroke="#ff0000"
            name="SO2"
            dot={(props) => {
              if (props.payload.anomaly) return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="O3"
            stroke="#00C49F"
            name="O3"
            dot={(props) => {
              if (props.payload.anomaly) return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
              return null;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PollutionGraph;

/*
function PollutionChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Backend’den veri çekme
    fetch('http://localhost:8080/api/pollution-data?start=2025-04-01&end=2025-04-02')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Veri çekme hatası:', error));
  }, []);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="PM25" stroke="#8884d8" name="PM2.5" dot={(props) => {
            if (props.payload.anomaly) {
              return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
            }
            return null;
          }} />
          <Line type="monotone" dataKey="PM10" stroke="#82ca9d" name="PM10" dot={(props) => {
            if (props.payload.anomaly) {
              return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
            }
            return null;
          }} />
          <Line type="monotone" dataKey="NO2" stroke="#ff7300" name="NO2" dot={(props) => {
            if (props.payload.anomaly) {
              return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
            }
            return null;
          }} />
          <Line type="monotone" dataKey="SO2" stroke="#ff0000" name="SO2" dot={(props) => {
            if (props.payload.anomaly) {
              return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
            }
            return null;
          }} />
          <Line type="monotone" dataKey="O3" stroke="#00C49F" name="O3" dot={(props) => {
            if (props.payload.anomaly) {
              return <circle cx={props.cx} cy={props.cy} r={5} fill="red" />;
            }
            return null;
          }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PollutionChart;
*/