import * as d3 from "d3";
import { useEffect } from "react";

export const BarGraph = ({ dataset }) => {
  useEffect(() => {
    dataset && drawGraph();
  }, [dataset]);

  const drawGraph = () => {
    // const data = [-1, 2, 1, 0.6, 1.5];
    const data = dataset.map((item) => item.value);
    console.log(data);

    let maxAbsValue = Math.ceil(d3.max(data, (d) => Math.abs(d)));
    if (maxAbsValue < 3) maxAbsValue = 3;
    else if (maxAbsValue > 10) maxAbsValue = 10;

    const paddingTop = 2;

    const svgWidth = 294;
    const svgHeight = 96;
    const barGraphWidth = 200;
    const barGraphMarginHorizontal = 6 + (svgWidth - barGraphWidth) / 2;

    const axisMarkerHeight = 12;
    const axisMarkerWidth = 2;

    const tickMarginRight = 2;
    const tickMarginBottom = 16;
    const tickWidth =
      (barGraphWidth - maxAbsValue * 2 * tickMarginRight) / (maxAbsValue * 2);
    const tickHeight = 8;

    const maxFilledBarWidth =
      maxAbsValue * tickWidth + (maxAbsValue - 1) * tickMarginRight;

    const svg = d3
      .select("#bargraph")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    // add ticks
    svg
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) =>
          `translate(${barGraphMarginHorizontal},${
            i * (axisMarkerHeight + tickMarginBottom)
          })`
      )
      .selectAll("rect")
      .data([...Array(maxAbsValue * 2).keys()])
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * tickWidth + i * tickMarginRight)
      .attr("y", paddingTop)
      .attr("width", tickWidth)
      .attr("height", tickHeight)
      .attr("class", "graph-bar-tick");

    // add filled bars
    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) =>
          (d > 0
            ? (tickWidth + tickMarginRight) * maxAbsValue
            : Math.abs(d) > maxAbsValue
            ? 0
            : (tickWidth + tickMarginRight) * maxAbsValue -
              tickMarginRight -
              (Math.abs(d) * tickWidth +
                (Math.floor(Math.abs(d)) - 1) * tickMarginRight)) +
          barGraphMarginHorizontal
      )
      .attr(
        "y",
        (d, i) => i * (axisMarkerHeight + tickMarginBottom) + paddingTop
      )
      .attr("fill", "#56A7FF") //gradient to be added
      .attr("width", (d) => {
        console.log(Math.floor(Math.abs(d)));
        return Math.abs(d) > maxAbsValue
          ? maxFilledBarWidth
          : Math.abs(d) * tickWidth +
              (Math.floor(Math.abs(d)) - 1) * tickMarginRight;
      })
      .attr("height", tickHeight);

    // add axis points
    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (tickWidth + tickMarginRight) * maxAbsValue -
          tickMarginRight +
          barGraphMarginHorizontal
      )
      .attr("y", (d, i) => i * (axisMarkerHeight + tickMarginBottom))
      .attr("height", axisMarkerHeight)
      .attr("width", axisMarkerWidth)
      .attr("class", "graph-text");

    // add labels
    svg
      .append("g")
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text((d) => d.label)
      .attr("y", (d, i) => `${i * (axisMarkerHeight + tickMarginBottom) + 10}`)
      .attr("x", 0)
      .attr("class", "text-sm graph-text");

    // add value-labels
    svg
      .append("g")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("y", (d, i) => `${i * (axisMarkerHeight + tickMarginBottom) + 10}`)
      .attr(
        "x",
        (d) => barGraphMarginHorizontal + barGraphWidth + 6 + (d > 0 ? 5 : 0)
      )
      .attr("class", "font-medium text-sm graph-text");
  };
  return <div id="bargraph" className="py-4 px-4.5"></div>;
};
