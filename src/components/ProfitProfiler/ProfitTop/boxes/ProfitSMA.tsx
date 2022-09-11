import React from "react";
import { ContractProfitBox } from "./ContractProfitBox";
import { profitSMAData } from "../../../../utils/tempData";
import ReactApexChart from "react-apexcharts";

interface ProfitSMAProps {}

export const ProfitSMA: React.FC<ProfitSMAProps> = () => {
  const series: ApexAxisChartSeries = [
    {
      name: "Price",
      color: "#F4E23E",
      data: profitSMAData,
    },
  ];
  const options: ApexCharts.ApexOptions = {
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#FFB546"],
        stops: [20],
      },
    },
    chart: {
      toolbar: { show: false },
      height: 200,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    xaxis: {
      type: "category",
      categories: Array.from({ length: profitSMAData.length }, () => {
        return "";
      }),
    },
    yaxis: {
      opposite: true,
      labels: {
        style: { colors: "white", fontSize: "8px" },
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
    <ContractProfitBox title="7-Day Profit SMA">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={200}
      />
    </ContractProfitBox>
  );
};
