import React from "react";
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer-content">
      <div className="footer-links">
        <div className="footer-map" onClick={() => navigate("/gizlilik")}>
          Gizlilik
        </div>
        <div className="footer-map" onClick={() => navigate("/hakkimizda")}>
          Hakkımızda
        </div>
        <div className="footer-map" onClick={() => navigate("/iletisim")}>
          İletişim
        </div>
      </div>
      <div className="footer-map">
        <p>© 2025 PureAir. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;