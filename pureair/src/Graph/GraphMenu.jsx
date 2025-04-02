// GraphMenu.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMap, faChartLine } from "@fortawesome/free-solid-svg-icons";

function GraphMenu() {
  const navigate = useNavigate();

  return (
<>


      <div className="icon" onClick={() => navigate("/")} title="Home'a Dön">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="icon" onClick={() => navigate("/map")} title="Haritaya Dön">
        <FontAwesomeIcon icon={faMap} />
      </div>
      <div
        className="icon"
        onClick={() => navigate("/detayli-analiz")}
        title="Grafikleri Detaylı İncele"
      >
        <FontAwesomeIcon icon={faChartLine} />
      </div>
      
      </>
  );
}

export default GraphMenu;