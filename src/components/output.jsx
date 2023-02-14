import { useContext } from "react";
import { OutputContext } from "../context/color_coding_provider";

export default function Output() {
  const outputs = useContext(OutputContext);

  return (
    <div className="rcc-flex-container-column">
      {outputs.map((output) => (
        <div key={output.name} className="rcc-output rcc-flex-container">
          <div className="rcc-primary">{output.name}</div>
          <div className="rcc-light">{output.value}</div>
        </div>
      ))}
    </div>
  );
}
