import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Card, Row } from "antd";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(...registerables);

export const optionsBar: any = {
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  },
};

export const initialDataBar = {
  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  datasets: [
    {
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [2478, 5267, 734, 784, 433],
    },
  ],
};

export const dataLine = {
  labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
  datasets: [
    {
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false,
    },
    {
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
      label: "Europe",
      borderColor: "#3cba9f",
      fill: false,
    },
    {
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false,
    },
    {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "North America",
      borderColor: "#c45850",
      fill: false,
    },
  ],
};
const optionsLine: any = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "World population per region (in millions)",
    },
  },
  // scales: {
  //   y: {
  //     type: "linear" as const,
  //     display: true,
  //     position: "left" as const,
  //   },
  //   y1: {
  //     type: "linear" as const,
  //     display: true,
  //     position: "right" as const,
  //     grid: {
  //       drawOnChartArea: false,
  //     },
  //   },
  // },
};
const Chart = () => {
  return (
    <>
      <Card>
        <Bar data={initialDataBar} options={optionsBar} />
      </Card>
      <Card>
        <Line data={dataLine} options={optionsLine} />
      </Card>
    </>
  );
};

export default Chart;
