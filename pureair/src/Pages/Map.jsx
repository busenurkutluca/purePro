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
    import('leaflet.heat')
      .then(() => {
        if (mapRef.current && typeof L.heatLayer === 'function') {
          const map = mapRef.current;

          // Isı haritasını oluştururken renk gradyanını bildirim paneliyle uyumlu hale getiriyoruz
          const heatLayer = L.heatLayer(pollutionData, {
            radius: 25,
            blur: 15,
            maxZoom: 17,
            gradient: {
              0.0: '#00FF00', // Good (0-50)
              0.2: '#FFFF00', // Moderate (50-100)
              0.4: '#FFA500', // Unhealthy for Sensitive Groups (100-150)
              0.6: '#FF0000', // Unhealthy (150-200)
              0.8: '#800080', // Very Unhealthy (200-300)
              1.0: '#8B0000', // Hazardous (300-500)
            },
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