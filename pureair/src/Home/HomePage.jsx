import React from 'react';
import { Link } from 'react-router-dom';
import LogoPure from '../Pages/LogoPure';

function HomePage() {
  return (
    <div className="home-container">
      <LogoPure />
      <div style={{ padding: '20px' }}>
        <h1 className="home-title">Hoş Geldiniz! Bu Ana Sayfamız</h1>
        <p>Bu, PureAir uygulamasının ana sayfasıdır.</p>
        <Link to="/map">
          <button className="home-button">Hava Kirliliği Haritasına Git</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;