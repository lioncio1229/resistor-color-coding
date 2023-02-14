import React, {useReducer} from "react";
import bandReducer from "../reducers/bandReducer";
import { initialBands, getBandOutput } from "../colorCodes";

export const BandContext = React.createContext();
export const OutputContext = React.createContext();

export function ColorCodingProvider(props) {
    const [band4State, band4dispatch] = useReducer(bandReducer, initialBands['bands4']);
    const [band5State, band5dispatch] = useReducer(bandReducer, initialBands['bands5']);
    const [band6State, band6dispatch] = useReducer(bandReducer, initialBands['bands6']);

    let obj = undefined;
    switch (props.band) {
        case 'bands4': obj = [band4State, band4dispatch]; break;
        case 'bands5': obj = [band5State, band5dispatch]; break;
        case 'bands6': obj = [band6State, band6dispatch]; break;
    }
    
    return (
      <BandContext.Provider value={[obj[0], obj[1]]}>
        <OutputContext.Provider value={getBandOutput(obj[0])}>
          {props.children}
        </OutputContext.Provider>
      </BandContext.Provider>
    );
}