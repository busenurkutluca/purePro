import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pages from "/src/Pages/Pages.jsx";
import Home from "/src/Home/Home.jsx";
import Components from "/src/Components/Components.jsx";
import 'leaflet/dist/leaflet.css';
import Graph from "./Graph/Graph.jsx";

function App() {
  const [zoom, setZoom] = useState(1);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Pages zoom={zoom} setZoom={setZoom} />} />
          <Route path="/components" element={<Components />} />
          <Route path="/anormal-degerler" element={<div><h1>Anormal Değerler</h1></div>} />
          <Route path="/detayli-analiz" element={<div><h1>Detaylı Analiz Görüntüleme Ekranı</h1></div>} />
          <Route path="*" element={<div><h1>404 - Sayfa Bulunamadı</h1></div>} />
        </Routes>
        <Graph/>
      </div>
    </Router>
  );
}

export default App;