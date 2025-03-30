import React from "react";
import LogoPure from "./LogoPure.jsx";
import Icon from "./Icon.jsx";
import Map from "./Map.jsx";

function Pages({ zoom, setZoom }) {
  return (
    <div>
      
      <Map zoom={zoom} setZoom={setZoom} /> {/* Map bileşeni */}
      <LogoPure />
      <Icon zoom={zoom} setZoom={setZoom} /> {/* Icon bileşeni */}
    </div>
  );
}

export default Pages;