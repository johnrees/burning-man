import * as React from "react";
import { render } from "react-dom";

const radius = 500;
const x = radius + 50;
const y = radius / 2 + 50;

const ROADS = [
  "Leon",
  "Kinoshita",
  "Johnny 5",
  "Iron Giant",
  "HAL",
  "Gort",
  "Fribo",
  "Elektro",
  "Dewey",
  "Cylon",
  "Bender",
  "Algorithm",
  "Esplanade"
];

// 2-10

// function Road({ index }) {
//   const width = 200 + index * 10;
//   return <path d={`M 300 50 A ${width} ${width} 0 1 1 50 50`} />;
// }

function Road({ index, start, end }) {
  const a1 = (Math.PI / 6) * index - Math.PI / 2;

  const x1 = x + Math.cos(a1) * start;
  const y1 = y + Math.sin(a1) * start;

  const x2 = x + Math.cos(a1) * end;
  const y2 = y + Math.sin(a1) * end;
  return <line x1={x1} x2={x2} y1={y1} y2={y2} />;
}

const deg2rad = function(deg) {
  return (Math.PI * deg) / 180;
};

function Line({ index }) {
  const angle = (Math.PI / 6) * index - Math.PI / 2;
  const x2 = x + Math.cos(angle) * radius;
  const y2 = y + Math.sin(angle) * radius;
  return <line x1={x} y1={y} x2={x2} y2={y2} stroke="black" />;
}

// 2PI = circle
// PI = half circle
// PI/6 = 1 clock symbol
// console.log(deg2rad(360));

function Arc({ r, road }) {
  const a1 = (Math.PI / 6) * 2 - Math.PI / 2;
  const x1 = x + Math.cos(a1) * r;
  const y1 = y + Math.sin(a1) * r;

  const a2 = (Math.PI / 6) * 10 - Math.PI / 2;
  const x2 = x + Math.cos(a2) * r;
  const y2 = y + Math.sin(a2) * r;

  return (
    <g className="arc">
      <text x={x2} y={y2}>
        {road}
      </text>
      <path d={`M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`} />
    </g>
  );
}

function RoadLabel({ i }) {
  const a = (Math.PI / 6) * i - Math.PI / 2;
  const x1 = x + Math.cos(a) * 520 - 12;
  const y1 = y + Math.sin(a) * 520;
  const [hour, minute] = i.toString().split('.').map(x => Number(x))
  return (
    <text x={x1} y={y1} anchor="middle">
      {hour}:{(60*minute || "0000").toString().slice(0,2)}
    </text>
  );
}

function BlackRockCity() {
  console.log("RENDER BRC");
  let roads = [];
  for (let i = 2.25; i < 10; i += 0.5) {
    roads.push({ i, start: 375, end: 500 });
  }
  for (let i = 2; i <= 10; i += 0.5) {
    roads.push({ i, start: 200, end: 500 });
  }
  console.log(roads);

  let roadLabels = [];
  for (let i = 2; i <= 10; i += 0.25) {
    roadLabels.push(i);
  }

  return (
    <svg width={radius * 2 + 100} height={radius * 2 + 100}>
      {/* <path d="M 100 100 Q 100 50 150 50 T 150 100" stroke="black" fill="red" /> */}

      {/* <path
        d="M80 80
           a 45 45, 0, 0, 0, 45 45
           L 125 80 Z"
        fill="green"
      /> */}

      {/* <circle cx={x} cy={y} r={5} fill="black" /> */}
      {/*
      <Line index={2} />
      <Line index={3} />
      <Line index={4} />
      <Line index={5} />
      <Line index={6} />
      <Line index={7} />
      <Line index={8} />
      <Line index={9} />
      <Line index={10} /> */}

      <g className="roads">
        {ROADS.map((road, index) => (
          <Arc key={road} road={road} r={radius - index * 25} />
        ))}
        {roads.map(road => {
          return <Road index={road.i} start={road.start} end={road.end} />;
        })}
        {roadLabels.map(i =>
          <RoadLabel key={`roadlabel${i}`} i={i} />;
        )}
        {/* <Road index={2} start={200} end={500} />
        <Road index={2.25} start={375} end={500} />
        <Road index={2.5} start={200} end={500} />
        <Road index={2.75} start={375} end={500} />
        <Road index={3} start={200} end={500} />
        <Road index={3.5} start={200} end={500} /> */}
      </g>
    </svg>
  );
}

render(<BlackRockCity />, document.getElementById("root"));
