const width = window.innerWidth;
const height = window.innerHeight;

// ---1---: conventianl way
// ---2---: d3 way simple
// ---3---: d3 way expert

// ---1---
// const svg = document.createElementNS(
//   'http://www.w3.org/2000/svg', 'svg'
// ); // 1)
// svg.setAttribute('width', width);
// svg.setAttribute('height', height);
// document.body.appendChild(svg); // 1)

// ---3---
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height); // until append this replaces 1)

// ---1---
// 2x for inner and outer rects
// const n = 100;
// for (let i = 0; i < n; i++) {
//   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//   rect.setAttribute("y", i * 20);
//   rect.setAttribute("width", width);
//   rect.setAttribute("height", 10);
//   rect.setAttribute("mask", "url(#circle-mask)");
//   svg.appendChild(rect);
// }

const n = 100;

// ---2 Decoupled method between Data and View---
// const marks = [];
// for (let i = 0; i < n; i++) {
//   marks.push({
//     y: i * 20,
//     width,
//     height: 10,
//     mask: 'url(#circle-mask)',
//   });
// }

// svg
//   .selectAll("rect")
//   .data(marks)
//   .join("rect")
//   .attr("y", (d) => d.y)
//   .attr("width", (d) => d.width)
//   .attr("height", (d) => d.height)
//   .attr("mask", (d) => d.mask); // makes a selection of all rect in DOM (but as there are non d3 knows it has to add elements)

// ---3---
svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("mask", "url(#circle-mask)");

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("mask", "url(#circle-mask-2)");

// ---1---
// 2x for inner and outer mask
// 2x once for rect once for circle
// const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
// mask.setAttribute("id", "circle-mask");
// svg.appendChild(mask);

// const maskRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
// maskRect.setAttribute("width", width);
// maskRect.setAttribute("height", height);
// maskRect.setAttribute("fill", black);
// mask.appendChild(maskRect);

// ---3---
const mask = svg.append("mask").attr("id", "circle-mask");

mask
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "black");

mask
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "white");

const mask2 = svg.append("mask").attr("id", "circle-mask-2");

mask2
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white");

mask2
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "black");
