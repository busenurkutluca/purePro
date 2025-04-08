import React, { useState } from 'react';
import './NotificationPanel.css';

const NotificationPanel = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="notification-panel" onClick={togglePopup}>
      <div className="scale"></div>
      <div className="hover-text">Detail</div>
      {isPopupOpen && (
        <div className="aqi-popup">
          <button className="close-button" onClick={closePopup}>×</button>
          <h3>Air Quality Index (AQI) Levels</h3>
          <div className="aqi-content">
            <ul>
              <li className="aqi-item good">
                <span className="aqi-level">Good (0-50):</span>
                <div className="aqi-description">
                  Air quality is considered satisfactory, and air pollution poses little or no risk.
                </div>
                <div className="aqi-warning">
                  <strong>Advice:</strong> It's a great day to enjoy outdoor activities!
                </div>
              </li>
              <li className="aqi-item moderate">
                <span className="aqi-level">Moderate (50-100):</span>
                <div className="aqi-description">
                  Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.
                </div>
                <div className="aqi-warning">
                  <strong>Advice:</strong> Generally safe, but sensitive individuals should monitor for any discomfort.
                </div>
              </li>
              <li className="aqi-item unhealthy-sensitive">
                <span className="aqi-level">Unhealthy for Sensitive Groups (100-150):</span>
                <div className="aqi-description">
                  Members of sensitive groups may experience health effects. The general public is not likely to be affected.
                </div>
                <div className="aqi-warning">
                  <strong>Advice:</strong> Sensitive groups (e.g., children, elderly, or those with respiratory issues) should reduce prolonged outdoor activities.
                </div>
              </li>
              <li className="aqi-item unhealthy">
                <span className="aqi-level">Unhealthy (150-200):</span>
                <div className="aqi-description">
                  Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.
                </div>
                <div className="aqi-warning">
                  <strong>Advice:</strong> Limit outdoor activities, especially for sensitive groups. Consider wearing a mask if necessary.
                </div>
              </li>
              <li className="aqi-item very-unhealthy">
                <span className="aqi-level">Very Unhealthy (200-300):</span>
                <div className="aqi-description">
                  Health alert: everyone may experience more serious health effects.
                </div>
                <div className="aqi-warning">
                  <strong>Advice:</strong> Avoid outdoor activities. Stay indoors and keep windows closed to reduce exposure.
                </div>
              </li>
              <li className="aqi-item hazardous">
                <span className="aqi-level">Hazardous (300-500):</span>
                <div className="aqi-description">
                  Health warning of emergency conditions. The entire population is more likely to be affected.
                </div>
                <div className="aqi-warning">
                  <strong>Advice:</strong> Stay indoors, use air purifiers, and avoid any outdoor exposure. This is a health emergency.
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;