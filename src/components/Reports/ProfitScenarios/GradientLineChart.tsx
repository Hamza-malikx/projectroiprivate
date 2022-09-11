import React from "react";
import ReactApexChart from "react-apexcharts";

interface GradientLineChartProps {
  data: number[];
}

export const GradientLineChart: React.FC<GradientLineChartProps> = ({
  data,
}) => {
  const labels = [];
  for (let i = 0; i < data.length; i++) labels.push("");

  const series: ApexAxisChartSeries = [
    {
      name: "Price",
      color: "#6CFF6C",
      data: data,
    },
  ];
  const options: ApexCharts.ApexOptions = {
    fill: {
      colors: undefined,
      gradient: {
        gradientToColors: ["rgba(58, 188, 58, 0) 100%"],
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
      width: 2,
    },
    xaxis: {
      type: "category",
      categories: labels,
    },
    yaxis: {
      labels: {
        style: { colors: "rgba(255,255,255,0.5)", fontSize: "10px" },
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
        height={380}
        width={450}
      />
    </div>
  );
};
