import * as React from "react";
import { render } from "react-dom";

function scale(size) {
  return size / 12;
}

function Arc({ startIndex, endIndex, distance }) {
  const a1 = (Math.PI / 6) * startIndex - Math.PI / 2;
  const x1 = Math.cos(a1) * distance;
  const y1 = Math.sin(a1) * distance;

  const a2 = (Math.PI / 6) * endIndex - Math.PI / 2;
  const x2 = Math.cos(a2) * distance;
  const y2 = Math.sin(a2) * distance;

  return (
    <path d={`M ${x1} ${y1} A ${distance} ${distance} 0 1 1 ${x2} ${y2}`} />
  );
}

function Line({ index, start, end }) {
  const angle = (Math.PI / 6) * index - Math.PI / 2;
  const x1 = Math.cos(angle) * start;
  const y1 = Math.sin(angle) * start;

  const x2 = Math.cos(angle) * end;
  const y2 = Math.sin(angle) * end;
  return <line x1={x1} y1={y1} x2={x2} y2={y2} />;
}

function App() {
  const width = scale(42 * 200 * 2);
  const height = width;
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <g className="rings">
          {Array.from(Array(40), (_, x) => (x + 2) * 200).map(radius => {
            console.log(radius);
            return <circle key={radius} cx={0} cy={0} r={scale(radius)} />;
          })}

          <circle cx={0} cy={scale(-2600)} r={scale(600)} />
          <circle cx={0} cy={scale(2600)} r={scale(800)} />

          {Array.from(Array(24), (_, x) => x / 2).map(hour => (
            <Line index={hour} start={scale(400)} end={scale(7800)} />
          ))}
        </g>

        <g className="black">
          <line x1={scale(-2500)} y1={0} x2={scale(2500)} y2={0} />
          <line x1={0} y1={scale(-2600)} x2={0} y2={0} />

          <Line index={2} start={scale(2500)} end={scale(5600)} />
          <Line index={10} start={scale(2500)} end={scale(5600)} />
          {/* <Line index={5.5} start={scale(2500)} end={scale(3000)} /> */}
          {/* <Line index={6.5} start={scale(2500)} end={scale(3000)} /> */}
          <Arc startIndex={2} endIndex={10} distance={scale(2500)} />
          <Arc startIndex={2} endIndex={10} distance={scale(5600)} />
        </g>
      </g>
    </svg>
  );
}

render(<App />, document.getElementById("root"));
