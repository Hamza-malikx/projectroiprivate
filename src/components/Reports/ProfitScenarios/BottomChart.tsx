import React from "react";
import ReactApexChart from "react-apexcharts";

interface BottomChartProps {
  data: number[];
}

export const BottomChart: React.FC<BottomChartProps> = ({ data }) => {
  const labels = [];
  for (let i = 0; i < data.length; i++) labels.push("");

  const series: ApexAxisChartSeries = [
    {
      name: "Price",
      color: "#1D8EF6",
      data: data,
    },
  ];
  const options: ApexCharts.ApexOptions = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    xaxis: {
      type: "category",
      categories: labels,
      title: {
        offsetX: -10,
        text: "Time",
        style: { color: "white", fontSize: "20px", fontWeight: "200" },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 500,
          borderColor: "#71E905",
          borderWidth: 3,
        },
        {
          y: 5500,
          borderColor: "#71E905",
          borderWidth: 3,
        },
      ],
    },
    yaxis: {
      labels: {
        style: { colors: "white", fontSize: "20px", fontWeight: "100" },
      },
      title: {
        offsetX: -10,
        text: "Profit",
        style: { color: "white", fontSize: "20px", fontWeight: "200" },
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={"450px"}
      />
    </div>
  );
};
