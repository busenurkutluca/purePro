import React from 'react';
import { Link } from 'react-router-dom';
import LogoPure from '../Pages/LogoPure';

function HomePage() {
  return (
    <div className="app-container">
      <LogoPure />
      <div style={{ padding: '20px' }}>
        <h1>Hoş Geldiniz! Bu Ana Sayfamız</h1>
        <p>Bu, PureAir uygulamasının ana sayfasıdır.</p>
        <Link to="/map">
          <button>Hava Kirliliği Haritasına Git</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;