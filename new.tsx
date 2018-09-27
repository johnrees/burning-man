import * as React from "react";
import { render } from "react-dom";

function scale(size) {
  return size / 12;
}

function App() {
  const width = scale(40 * 200 * 2);
  const height = width;
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <g className="rings">
          {Array.from(Array(40), (_, x) => (x + 2) * 200).map(radius => {
            console.log(radius);
            return <circle key={radius} cx={0} cy={0} r={scale(radius)} />;
          })}

          <line
            x1={scale(-2500)}
            y1={0}
            x2={scale(2500)}
            y2={0}
            stroke="black"
          />
          <line x1={0} y1={scale(-2600)} x2={0} y2={0} stroke="black" />
          <circle cx={0} cy={scale(-2600)} r={scale(600)} />
          <circle cx={0} cy={scale(2600)} r={scale(800)} />
        </g>
      </g>
    </svg>
  );
}

render(<App />, document.getElementById("root"));
