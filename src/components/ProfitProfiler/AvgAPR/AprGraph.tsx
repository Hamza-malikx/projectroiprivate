import React from "react";
import ReactApexChart from "react-apexcharts";

interface AprGraphProps {
  data: number[];
}

export const AprGraph: React.FC<AprGraphProps> = ({ data }) => {
  const labels = [];
  for (let i = 0; i < data.length; i++) labels.push("");

  const series: ApexAxisChartSeries = [
    {
      name: "Price",
      color: "#2B2263",
      data: data,
    },
  ];
  const options: ApexCharts.ApexOptions = {
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#6D24E4"],
        stops: [20],
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
    <div className="apr-holder">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={400}
      />
    </div>
  );
};
