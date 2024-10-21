import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS}  from "chart.js/auto"


const BarChart = ({ BarData }) => {
  return <Bar data={BarData} />;
};

export default BarChart;
