import React from 'react';
import { Link } from 'react-router-dom';
import LogoPure from '../Pages/LogoPure';
import Footer from '../Footer/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMap, faChartLine, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Header: Logo, Sosyal Medya ve Yönlendirme İkonları */}
      <header className="home-header">
        <div className="header-content">
          {/* Logo */}
        

          {/* Yönlendirme İkonları (Logonun altında) */}
          <div className="nav-icon-container">
            <Link to="/map">
              <FontAwesomeIcon icon={faMap} className="nav-icon" title="Harita" />
            </Link>
            <Link to="/graph">
              <FontAwesomeIcon icon={faChartLine} className="nav-icon" title="Grafik" />
            </Link>
            <Link to="/detayli-analiz">
              <FontAwesomeIcon icon={faMagnifyingGlassChart} className="nav-icon" title="Detaylı Analiz" />
            </Link>
          </div>

          {/* Sosyal Medya İkonları (Sağda) */}
          <div className="social-media-container">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>
        </div>
      </header>

      {/* Fotoğraflar */}
      <div className="image-scroll-container">
        
        <img src="/serrat2.png" className="home-image" alt="Serrat 2" />
        <img src="/serrat1.png" className="home-image" alt="Serrat 1" />
        <img src="/serrat3.png" className="home-image" alt="Serrat 3" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;