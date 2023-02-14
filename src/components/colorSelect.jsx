import { useContext, useEffect, useRef } from "react";
import ColorItem from "./colorItem";
import { BandContext } from "../context/color_coding_provider";
import { colorcodeTable } from "../colorCodes";

export default function ColorSelect({ bandName, handleCloseColorSelect}) {
  const [state, dispatch] = useContext(BandContext);
  const listColorRef = useRef(null);

  const handleColorClick = (e, color) => {
    e.stopPropagation();
    dispatch({ bandName, color });
    handleCloseColorSelect();
  };

  const handleClickOutside = (e) => {
    const current = listColorRef.current;
    if(current && !current.contains(e.target))
      handleCloseColorSelect();
  }

  useEffect(() => {
    document.addEventListener('click', (e) => handleClickOutside(e), true);
  });

  return (
    <div ref={listColorRef} className="rcc-color-select rcc-flex-container-column">
      {colorcodeTable.map(
        (colorCode) =>
          colorCode[bandName] !== undefined && (
            <ColorItem key={colorCode['color']} bandName={bandName} colorCode={colorCode} handleColorClick={handleColorClick}/>
          )
      )}
    </div>
  );
}
