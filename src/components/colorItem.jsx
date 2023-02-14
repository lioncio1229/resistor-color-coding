import { useRef } from "react";
import abbreviateNumber from "../utils/abbreviateNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function ColorItem({ bandName, colorCode, handleColorClick }) {
    const caretRightRef = useRef(null);

    const mouseEnter = () => {
        caretRightRef.current.style.display = 'block';
    }
    
    const mouseLeave = () => {
        caretRightRef.current.style.display = 'none';
    }

    const displayValue = () => {
        switch (bandName) {
        case "multiplier":
            return (
            "x " +
            abbreviateNumber(colorCode[bandName]) +
            " " +
            colorCode["color"]
            );
        case "tolerance":
            return "± " + colorCode[bandName] * 100 + "% " + colorCode["color"];
        default:
            return colorCode[bandName] + " " + colorCode["color"];
        }
    };

    return (
        <div
            onClick={(e) => handleColorClick(e, colorCode["color"])}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className={"color-item selection " + colorCode["color"]}
            >
            <FontAwesomeIcon ref={caretRightRef} icon={faCaretRight} className="caret-right" />
            {displayValue(colorCode, bandName)}
        </div>
    );
}
