import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Icon from "/src/Pages/Icon.jsx";

function Map() {
  const [zoom, setZoom] = useState(10);
  const position = [51.505, -0.09];
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setZoom(zoom);
    }
  }, [zoom]);

  return (
    <div className="app-container">
      <div className="header-content">
        <h1 className='harita-baslik'>Air Pollution Map</h1>
    
      </div>

      <Icon zoom={zoom} setZoom={setZoom} />

      <MapContainer
        className="map-container"
        center={position}
        zoom={zoom}
        zoomControl={false}
        ref={mapRef}
        onZoomEnd={(e) => setZoom(e.target.getZoom())}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default Map;