(function () {
  'use strict';

  const width = window.innerWidth;
  const height = window.innerHeight;

  // ---3---
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "darkmode");

  setInterval(() => {
    const noOfPoints = Math.random() * (15 - 3) + 3;
    const points = [];
    const lines = [];
    for (let i = 0; i < noOfPoints; i++) {
      points.push({ x: Math.random() * width, y: Math.random() * height });
    }

    for (let i = 0; i < noOfPoints; i++) {
      for (let j = 0; j < noOfPoints; j++) {
        if (points[i] !== points[j]) {
          lines.push({
            x1: points[i].x,
            y1: points[i].y,
            x2: points[j].x,
            y2: points[j].y,
            color: "white", //`#${Math.floor(Math.random() * 16777215).toString(16)}`,
          });
        }
      }
    }

    svg
      .selectAll("line")
      .data(lines)
      .join("line")
      .attr("x1", (d) => d.x1)
      .attr("y1", (d) => d.y1)
      .attr("x2", (d) => d.x2)
      .attr("y2", (d) => d.y2)
      .attr("stroke", (d) => d.color);
  }, 550);

})();
//# sourceMappingURL=bundle.js.map
