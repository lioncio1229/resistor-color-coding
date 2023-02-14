import { useContext } from "react";
import { OutputContext } from "../context/color_coding_provider";

export default function Output() {
  const outputs = useContext(OutputContext);

  return (
    <div className="flex-container-column">
      {outputs.map((output) => (
        <div key={output.name} className="output flex-container">
          <div className="primary">{output.name}</div>
          <div className="light">{output.value}</div>
        </div>
      ))}
    </div>
  );
}
