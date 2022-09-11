import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./CommunityChart.css";

interface CommunityChartProps {
  data: { ytData: number[]; twtData: number[]; dcData: number[] };
}

export const CommunityChart: React.FC<CommunityChartProps> = ({ data }) => {
  return (
    <div className="community-chart-container">
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "right",
              labels: {
                usePointStyle: true,
                boxWidth: 15,
                padding: 40,
                color: "white",
              },
            },
          },
          maintainAspectRatio: false,
        }}
        data={{
          labels: ["1D", "7D", "14D", "21D", "1M"],
          datasets: [
            {
              label: "Twitter Followers",
              data: data.twtData,
              backgroundColor: "#1780E0",
              borderColor: "#1780E0",
              borderWidth: 2,
            },
            {
              label: "Youtube Views",
              data: data.ytData,
              backgroundColor: "#F4E23E",
              borderColor: "#F4E23E",
              borderWidth: 2,
            },
            {
              label: "Discord Members",
              data: data.dcData,
              backgroundColor: "#553DB9",
              borderColor: "#553DB9",
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};
