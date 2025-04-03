import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ zoom: initialZoom, setZoom }) {
  const [zoom, setLocalZoom] = useState(initialZoom || 10);
  const position = [51.505, -0.09];
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setZoom(zoom);
      mapRef.current.invalidateSize();
    }
  }, [zoom]);

  useEffect(() => {
    setLocalZoom(initialZoom);
  }, [initialZoom]);

  return (
    <div>
      <h1 className="map-title">Air Pollution Map</h1>
      <MapContainer
        className="map-container"
        center={position}
        zoom={zoom}
        zoomControl={false}
        ref={mapRef}
        style={{ width: '100%', height: '100%' }}
        onZoomEnd={(e) => {
          const newZoom = e.target.getZoom();
          setLocalZoom(newZoom);
          setZoom(newZoom);
        }}
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