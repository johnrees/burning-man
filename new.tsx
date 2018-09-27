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
  const scale = 1 / 14;
  const width = 42 * 200 * 2 * scale;
  const height = width;
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2},${height / 2}), scale(${scale})`}>
        <g className="rings">
          {Array.from(Array(40), (_, x) => (x + 2) * 200).map(radius => {
            console.log(radius);
            return <circle key={radius} cx={0} cy={0} r={radius} />;
          })}

          <circle cx={0} cy={-2600} r={600} />

          {Array.from(Array(24), (_, x) => x / 2).map(hour => (
            <Line index={hour} start={400} end={7800} />
          ))}
        </g>

        <g className="black">
          <circle cx={0} cy={3050} r={800} />
          <circle cx={0} cy={3050} r={300} />

          <line x1={-2500} y1={0} x2={2500} y2={0} />
          <line x1={0} y1={-2600} x2={0} y2={0} />

          <Line index={2} start={2500} end={5700} />
          <Line index={10} start={2500} end={5700} />
          {/* <Line index={5.5} start={(2500)} end={(3000)} /> */}
          {/* <Line index={6.5} start={(2500)} end={(3000)} /> */}

          <Arc startIndex={2} endIndex={10} distance={2500} />
          <Arc startIndex={2} endIndex={10} distance={2900} />

          <Arc startIndex={2} endIndex={10} distance={2950} />
          <Arc startIndex={2} endIndex={10} distance={3150} />

          <Arc startIndex={2} endIndex={10} distance={3200} />
          <Arc startIndex={2} endIndex={10} distance={3400} />

          <Arc startIndex={2} endIndex={10} distance={3450} />
          <Arc startIndex={2} endIndex={10} distance={3650} />

          <Arc startIndex={2} endIndex={10} distance={3700} />
          <Arc startIndex={2} endIndex={10} distance={3900} />

          <Arc startIndex={2} endIndex={10} distance={3950} />
          <Arc startIndex={2} endIndex={10} distance={4150} />

          <Arc startIndex={2} endIndex={10} distance={4200} />
          <Arc startIndex={2} endIndex={10} distance={4400} />

          <Arc startIndex={2} endIndex={10} distance={4450} />
          <Arc startIndex={2} endIndex={10} distance={4650} />

          <Arc startIndex={2} endIndex={10} distance={4700} />
          <Arc startIndex={2} endIndex={10} distance={4900} />

          <Arc startIndex={2} endIndex={10} distance={4950} />
          <Arc startIndex={2} endIndex={10} distance={5150} />

          <Arc startIndex={2} endIndex={10} distance={5200} />
          <Arc startIndex={2} endIndex={10} distance={5400} />

          <Arc startIndex={2} endIndex={10} distance={5450} />
          <Arc startIndex={2} endIndex={10} distance={5650} />

          <Arc startIndex={2} endIndex={10} distance={5700} />
        </g>
      </g>
    </svg>
  );
}

render(<App />, document.getElementById("root"));
