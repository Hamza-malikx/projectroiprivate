import React from "react";
import "chart.js/auto";
import { Radar } from "react-chartjs-2";

interface ProfitProfilerSpiderProps {}

export const ProfitProfilerSpider: React.FC<ProfitProfilerSpiderProps> = () => {
  const data = {
    labels: ["<$5", ">$1000", "$500-1000", "$100-500", "$50 -100", "$10-50"],
    datasets: [
      {
        label: "My First Dataset",
        data: [25, 50, 75, 100],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  return (
    <>
      <div
        className="holder"
        style={{ paddingLeft: "125px", paddingTop: "15px" }}
      >
        <Radar
          width={450}
          height={450}
          data={data}
          options={{
            responsive: false,
            scales: {
              r: {
                pointLabels: {
                  color: "white",
                },
                ticks: {
                  color: "white",
                  backdropColor: "#c4c4c40c",
                },
                angleLines: {
                  color: "white",
                },
                grid: {
                  color: "white",
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            elements: {
              arc: {
                borderWidth: 0,
              },
            },
          }}
        />
      </div>
    </>
  );
};
