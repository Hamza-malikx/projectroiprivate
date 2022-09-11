import React from "react";
import ReactApexChart from "react-apexcharts";

interface MidGradientChartProps {
  data: number[];
}

export const MidGradientChart: React.FC<MidGradientChartProps> = ({ data }) => {
  const labels = [];
  for (let i = 0; i < data.length; i++) labels.push("");

  const series: ApexAxisChartSeries = [
    {
      name: "Price",
      color: "#48A3F6",
      data: data,
    },
  ];
  const options: ApexCharts.ApexOptions = {
    fill: {
      colors: undefined,
      opacity: 0.9,
      gradient: {
        gradientToColors: ["rgba(23, 128, 224, 0) 0%)"],
      },
      image: {
        src: [],
        width: undefined,
        height: undefined,
      },
    },
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: labels,
    },
    yaxis: {
      labels: {
        style: { colors: "white", fontSize: "20px" },
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
        type="area"
        height={"450px"}
      />
    </div>
  );
};
