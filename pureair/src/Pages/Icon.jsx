import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faPlus, faMinus, faBullhorn, faBars, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Icon({ zoom, setZoom }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "PureAir Haritası",
        text: "Hava kirliliği haritasını keşfet!",
        url: window.location.href,
      })
        .then(() => console.log("Paylaşım başarılı!"))
        .catch((error) => console.log("Paylaşım hatası:", error));
    } else {
      alert("Paylaşım özelliği bu tarayıcıda desteklenmiyor.");
    }
  };

  const toggleMenu = () => {
    console.log("toggleMenu called, isMenuOpen before:", isMenuOpen); // Hata ayıklama
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen after:", !isMenuOpen); // Hata ayıklama
  };

  return (
    <div className="simge">
      <div className="icon" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} title="Home Page" />
      </div>
      <div className="icon" onClick={() => alert("Search")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} title="Search" />
      </div>
      <div className="icon" onClick={() => setZoom(prev => prev + 1)}>
        <FontAwesomeIcon icon={faPlus} title="Zoom In" />
      </div>
      <div className="icon" onClick={() => setZoom(prev => Math.max(1, prev - 1))}>
        <FontAwesomeIcon icon={faMinus} title="Zoom Out" />
      </div>
      <div className="icon menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} title="Menu" />
        {isMenuOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={() => navigate("/map")}>
              Map
            </div>
            <div className="dropdown-item" onClick={() => navigate("/components")}>
              Grafikler
            </div>
            <div className="dropdown-item" onClick={() => navigate("/anormal-degerler")}>
              Anormal Değerler
            </div>
            <div className="dropdown-item" onClick={() => navigate("/detayli-analiz")}>
              Detaylı Analiz Görüntüleme Ekranı
            </div>
          </div>
        )}
      </div>
      <div className="icon" onClick={handleShare}>
        <FontAwesomeIcon icon={faShareAlt} title="Share" />
      </div>
      <div className="icon" onClick={() => alert("Notifications Panel")}>
        <FontAwesomeIcon icon={faBullhorn} title="Notifications" />
      </div>
    </div>
  );
}

export default Icon;