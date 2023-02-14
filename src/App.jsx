import React, { useState } from "react";
import "./style.css";
import { ColorCodingProvider } from "./context/color_coding_provider";
import useViewportAnimation from "./hooks/useViewportAnimations";
import NavBar from "./components/navbar";
import Resistor from "./components/resistor";
import Output from "./components/output";
import ColorCodesImage from "./images/resistor_colorcodes.jpg";

const ResistorColorCoding = () => {
  const [bandType, setBandType] = useState("bands4");
  const { view, setView, getAnimationClass } = useViewportAnimation();

  return (
    <div className='container'>
      <NavBar
        bandType={bandType}
        setBandType={setBandType}
        view={view}
        setView={setView}
      />

      <ColorCodingProvider band={bandType}>
        <div className="flex-container-column">

          <div className="viewport">
            <div className={"rcc-content " + getAnimationClass()}>
              <div className="rcc-main">
                <Resistor />
                <Output />
              </div>
              <img src={ColorCodesImage} alt="" />
            </div>
          </div>

          <div className="footer primary">
            <b>Resistor Color Coding created</b> by Lioncio Morcilla
          </div>
        </div>
      </ColorCodingProvider>
    </div>
  );
};

export default ResistorColorCoding;