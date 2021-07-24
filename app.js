"use strict";

//store the id in canvas  of html in a var ctx
var ctx = document.getElementById("chart");

//gradient for data second
var bar_ctx = document.getElementById("chart").getContext("2d");

var background_1 = bar_ctx.createLinearGradient(0, 0, 0, 600);
background_1.addColorStop(0, "rgb(69, 175, 238)");
background_1.addColorStop(0.22, "rgb(67, 177, 236)");
background_1.addColorStop(0.33, "rgb(65, 179, 233)");
background_1.addColorStop(0.44, "rgb(62, 183, 229)");
background_1.addColorStop(0.55, "rgb(35, 219, 189)");
background_1.addColorStop(0.66, "rgb(30, 224, 183)");
background_1.addColorStop(0.77, "rgb(28, 228, 179)");
background_1.addColorStop(0.88, "rgb(27, 229, 177)");
background_1.addColorStop(1, "rgb(23, 234, 172)");

// gradient for data third
var bar_ctx = document.getElementById("chart").getContext("2d");

var background_2 = bar_ctx.createLinearGradient(0, 0, 0, 600);
background_2.addColorStop(0.11, "rgb(241, 133, 134)");

background_2.addColorStop(0.22, "rgb(246, 141, 125)");

background_2.addColorStop(0.33, "rgb(255, 159, 70)");

//gradient for dataone
let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgb(255, 68, 214)");
    gradient.addColorStop(0.25, "rgb(255, 121, 121)");
    gradient.addColorStop(0.5, "rgb(255, 77, 202)");
    gradient.addColorStop(0.75, "rgb(252, 106, 164)");
    gradient.addColorStop(1, "rgb(227, 78, 129)");
  }

  return gradient;
}

var dataFirst = {
  data: [
    3000, 4000, 4300, 4000, 4800, 4500, 5200, 5000, 5200, 5100, 6000, 6500,
  ],
  fill: false,
  label: "BTC",
  borderColor: function (context) {
    const chart = context.chart;
    const { ctx, chartArea } = chart;

    if (!chartArea) return null;
    else return getGradient(ctx, chartArea);
  },

  pointStyle: "circule",
  pointBorderColor: "rgb(251, 73, 192)",
  backgroundColor: "rgb(251, 73, 192)",
};

var datasecond = {
  data: [2700, 3500, 3600, 4000, 3600, 4200, 3800, 4000, 4500, 4200, 5000],

  label: "ETH",
  borderColor: background_1,
  pointStyle: "circule",
  pointBorderColor: "rgb(83, 185, 234)",
  backgroundColor: "rgb(83, 185, 234)",
};

var datathird = {
  data: [3000, 3300, 3500, 2800, 3700, 3500, 4000, 4800, 4000, 3800, 2000],
  label: "LTC",
  borderColor: background_2,
  pointStyle: "circule",
  pointBorderColor: "rgb(245, 166, 35)",
  backgroundColor: "rgb(245, 166, 35)",
};

// to create our chart we need our var ctx and the config
var ourdata = {
  labels: [
    "10.59PM",
    "11.59PM",
    "12.59PM",
    "1.59PM",
    "2.59PM",
    "3.59PM",
    "4.59PM",
    "5.59PM",
    "6.59PM",
    "7.59PM",
  ],
  datasets: [dataFirst, datasecond, datathird],
};

var myChart = new Chart(ctx, {
  //specify the type
  type: "line",

  data: ourdata,
  options: {
    responsive: true,
    elements: {
      point: {
        pointStyle: "dash",
        borderCapStyle: "dash",
        borderWidth: -2,
        backgroundColor: "transparent",
      },
      line: {
        tension: 0.2,
      },
    },
    plugins: {
      tooltip: {
        plugins: {
          legend: false,
          tooltip: true,
        },
      },
      legend: {
        position: "top",
        align: "start",
        title: {
          Font: "Helvetica Neue",
          color: "rgb (111, 108, 153)",
          fontWeight: 500,
          fontSize: 10.9197,
        },
        labels: {
          usePointStyle: true,
          textAlign: "center",
          padding: 50,
          boxWidth: 5,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
    },
  },
});
