import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faPlus, faMinus, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Icon({ zoom, setZoom }) {
  const navigate = useNavigate();

  return (
    <div className="simge">
      {/* Ana Sayfaya Git */}
      <div className="icon" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} title="Ana Sayfa" />
      </div>

      {/* Haritada Arama */}
      <div className="icon" onClick={() => alert("Arama açılacak")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} title="Arama" />
      </div>

      {/* Haritayı Büyüt */}
      <div className="icon" onClick={() => setZoom(prev => prev + 1)}>
        <FontAwesomeIcon icon={faPlus} title="Büyüt" />
      </div>

      {/* Haritayı Küçült */}
      <div className="icon" onClick={() => setZoom(prev => Math.max(1, prev - 1))}>
        <FontAwesomeIcon icon={faMinus} title="Küçült" />
      </div>

      {/* Bildirim Gönder (Örnek Kullanım) */}
      <div className="icon" onClick={() => alert("Bildirim gönderildi!")}>
        <FontAwesomeIcon icon={faBullhorn} title="Bildirim" />
      </div>

      {/* Harita Zoom Seviyesi Göster */}
      <p>Zoom: {zoom}</p>
    </div>
  );
}

export default Icon;
