import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



function Map({ zoom: initialZoom, setZoom }) {
  const [zoom, setLocalZoom] = useState(initialZoom || 10);
  const position = [51.505, -0.09];
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setZoom(zoom);
      mapRef.current.invalidateSize(); // Harita boyutlarını güncelle
    }
  }, [zoom]);

  useEffect(() => {
    setLocalZoom(initialZoom);
  }, [initialZoom]);

  const handleZoomChange = (newZoom) => {
    setLocalZoom(newZoom);
    setZoom(newZoom);
  };

  return (
    <div className="app-container">
      <div className="header-content">
        <h1 className="harita-baslik">Hava Kirliliği Haritası</h1>
      </div>

      <MapContainer
        className="map-container"
        center={position}
        zoom={zoom}
        zoomControl={false}
        ref={mapRef}
        style={{ width: '100%', height: '100%' }}
        onZoomEnd={(e) => handleZoomChange(e.target.getZoom())}
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