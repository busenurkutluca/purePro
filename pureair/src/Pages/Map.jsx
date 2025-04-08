import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

function Map({ zoom: initialZoom, setZoom }) {
  const [zoom, setLocalZoom] = useState(initialZoom || 10);
  const position = [51.505, -0.09];
  const mapRef = useRef(null);
  const navigate = useNavigate();

  const pollutionData = [
    [51.51, -0.08, 50], // [lat, lng, intensity]
    [51.50, -0.09, 30],
    [51.49, -0.07, 70],
  ];

  useEffect(() => {
    // Leaflet.heat'i dinamik olarak yükle
    import('leaflet.heat') // dist/leaflet.heat.js yerine sadece leaflet.heat
      .then(() => {
        if (mapRef.current && typeof L.heatLayer === 'function') {
          const map = mapRef.current;

          const heatLayer = L.heatLayer(pollutionData, {
            radius: 25,
            blur: 15,
            maxZoom: 17,
          }).addTo(map);

          map.on('click', (e) => {
            const { lat, lng } = e.latlng;
            console.log(`Seçilen bölge: Lat: ${lat}, Lng: ${lng}`);
            navigate('/detayli-analiz', { state: { lat, lng } });
          });

          map.setZoom(zoom);
          map.invalidateSize();

          return () => {
            map.removeLayer(heatLayer);
            map.off('click');
          };
        } else {
          console.error('L.heatLayer fonksiyonu mevcut değil. Leaflet.heat yüklenmedi.');
        }
      })
      .catch((err) => {
        console.error('Leaflet.heat yüklenirken hata oluştu:', err);
      });
  }, [zoom, navigate]);

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