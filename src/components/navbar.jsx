import { bands } from "../colorCodes";

export default function NavBar({ bandType, setBandType, view, setView }) {

  const getClass = (currentBandType) => {
    return (
      "rcc-btn " +
      (currentBandType === bandType && view !== 'rcc-toImg'
        ? "rcc-primary rcc-primary-hover"
        : "rcc-light rcc-light-hover")
    );
  };

  const handleBandClick = (currentBandType) => {
    if(view !== 'default') setView('rcc-toMain');
    setBandType(currentBandType);
  };

  const handleColorCodeInfoClick = () => {
    setView('rcc-toImg');
  };

  return (
    <div className="rcc-navbar rcc-flex-container">
      <h1>Resistor Color Coding</h1>

      <div className="rcc-nav-menu rcc-flex-container">
        <div className="rcc-nav-buttons rcc-flex-container">
          {bands.map((band) => (
            <div
              key={band.type}
              onClick={() => handleBandClick(band.type)}
              className={getClass(band.type)}
            >
              {band.title}
            </div>
          ))}
        </div>

        <div
          onClick={handleColorCodeInfoClick}
          className="rcc-btn rcc-btn-m rcc-btn-r-s rcc-primary rcc-primary-hover"
        >
          Color Codes
        </div>

      </div>
    </div>
  );
}
