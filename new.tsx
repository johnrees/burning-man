import * as React from "react";
import { render } from "react-dom";

function scale(size) {
  return size / 12;
}

function App() {
  const width = scale(6600 * 2);
  const height = width;
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <g className="rings">
          {Array.from(Array(31), (_, x) => (x + 2) * 200).map(radius => {
            console.log(radius);
            return <circle key={radius} cx={0} cy={0} r={scale(radius)} />;
          })}
        </g>
      </g>
    </svg>
  );
}

render(<App />, document.getElementById("root"));
