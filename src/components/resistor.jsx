import { useContext, useState } from "react";
import { BandContext } from "../context/color_coding_provider";
import ColorSelect from "./colorSelect";
import { getBandValue } from "../colorCodes";
import abbreviateNumber from "../utils/abbreviateNumber";

export default function Resistor() {
  const [state, dispatch] = useContext(BandContext);
  const [currentBand, setCurrentBand] = useState();

  const displayValue = (band) => {
    const value = getBandValue(band.color, band.bandName);
    
    switch (band.bandName) {
      case 'multiplier':
        return 'x '+ abbreviateNumber(value);
      case 'tolerance':
        return '± '+ (value * 100) + "% ";
      default:
        return value;
    }
  }

  const openColorSelect = (bandName) => setCurrentBand(bandName);
  const closeColorSelect = () => setCurrentBand('');

  return (
    <div className="rcc-resistor rcc-flex-container">
      <div className="rcc-resistor-wire">
        <div className="rcc-resistor-body">
          {state.map((band) => (
            <div
              key={band.id}
              onClick={() => openColorSelect(band.bandName)}
              className={"rcc-band rcc-selection " + band.color}
            >
              <div className="rcc-band-info">
                <h2>{band.text}</h2>
                <h2>{displayValue(band)}</h2>
              </div>
              {band.bandName === currentBand && (
                <ColorSelect
                  key={band.id}
                  bandName={band.bandName}
                  handleCloseColorSelect={closeColorSelect}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
