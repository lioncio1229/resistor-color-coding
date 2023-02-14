import { bands } from "../colorCodes";

export default function NavBar({ bandType, setBandType, view, setView }) {

  const getClass = (currentBandType) => {
    return (
      "btn " +
      (currentBandType === bandType && view !== 'rcc-toImg'
        ? "primary primary-hover"
        : "light light-hover")
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
    <div className="navbar flex-container">
      <h1>Resistor Color Coding</h1>

      <div className="nav-menu flex-container">
        <div className="nav-buttons flex-container">
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
          className="btn btn-m btn-r-s primary primary-hover"
        >
          Color Codes
        </div>

      </div>
    </div>
  );
}
