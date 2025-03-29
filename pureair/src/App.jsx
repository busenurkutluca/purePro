import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router import edildi
import "./App.css";
import Pages from "./Pages/Pages";
import Icon from "/src/Pages/Icon.jsx"; // Türkçe karakter düzeltildi
import Home from "/src/Pages/Home.jsx";  // Home bileşeni import edildi
import Map from "/src/Components/Map.jsx"; // Map bileşeni import edildi

function App() {
  const [zoom, setZoom] = useState(1); // Zoom durumu App bileşeninde tutuluyor

  return (
    <Router>
      <div className="app-container">
        <Pages />
        <Icon zoom={zoom} setZoom={setZoom} /> {/* Zoom ve setZoom prop olarak geçiliyor */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map zoom={zoom} />} /> {/* Zoom Map'e geçiliyor */}
        </Routes>
      </div>
    </Router>
  

  );
}

export default App;


