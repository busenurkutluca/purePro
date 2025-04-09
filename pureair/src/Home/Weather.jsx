// src/components/Weather.jsx
import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API;
console.log('API Key:', apiKey);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        console.log('Oluşturulan URL:', url); // URL'yi kontrol et
        const response = await fetch(url);
        if (!response.ok) {
          const errorText = await response.text(); // Hata mesajını al
          throw new Error(`Hava durumu verileri alınamadı: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        console.log('API yanıtı:', data); // Gelen veriyi kontrol et
        setWeatherData({
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });
        setLoading(false);
      } catch (err) {
        console.error('Hata:', err.message); // Hata detayını yaz
        setError(err.message);
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Kullanıcı konumu:', position.coords);
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          console.log('Konum alınamadı, İstanbul kullanılıyor:', err);
          fetchWeather(41.0082, 28.9784);
        }
      );
    } else {
      console.log('Geolocation desteklenmiyor, İstanbul kullanılıyor');
      fetchWeather(41.0082, 28.9784);
    }
  }, []);

  if (loading) return <div className="weather-container">Yükleniyor...</div>;
  if (error) return <div className="weather-container">Hata: {error}</div>;

  return (
    <div className="weather-container">
      <div className="weather-content">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
          alt="Hava durumu simgesi"
          className="weather-icon"
        />
        <div className="weather-info">
          <span className="temperature">{weatherData.temp}°C</span>
          <span className="description">{weatherData.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;