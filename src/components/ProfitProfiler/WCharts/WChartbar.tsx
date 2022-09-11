import React from "react";
import ReactApexChart from "react-apexcharts";

interface WChartbarProps {}

export const WChartbar: React.FC<WChartbarProps> = () => {
  const series: ApexAxisChartSeries = [
    {
      name: "Loss",
      data: [
        -80000, -40000, -60000, -20000, -10000, -30000, -40000, -35000, -50000,
        -70000,
      ],
    },
    {
      name: "Profit",
      data: [
        50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
      ],
    },
  ];
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
    },
    colors: ["#FC1717", "#48A3F6"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%",
      },
    },
    dataLabels: {
      enabled: false,
    },

    grid: {
      borderColor: "#dddddd40",
    },

    yaxis: {
      min: -100000,
      max: 100000,
    },
    xaxis: {
      labels: {
        offsetY: 20,
        style: { colors: "white", fontSize: "16px", fontWeight: "500" },
      },
    },
  };

  return (
    <div>
      <div className="wchart-box">
        <ReactApexChart
          type="bar"
          series={series}
          options={options}
          height={500}
        />
      </div>
    </div>
  );
};
