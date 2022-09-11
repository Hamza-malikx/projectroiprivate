import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
interface FinancePieProps {
  title: string;
  data: { name: string; value: number }[];
  value: string;
  option: number;
}

export const FinancePie: React.FC<FinancePieProps> = ({
  title,
  data,
  value,
  option,
}) => {
  const getLabelInfo = (): string[] => {
    let total = 0;
    for (const row of data) total += row.value;

    const arr = [];
    for (const row of data)
      arr.push(
        `   ${row.name}         ${Math.floor((row.value / total) * 100)}%`
      );

    return arr;
  };

  const getData = (): number[] => {
    const arr = [];
    for (const row of data) arr.push(row.value);
    return arr;
  };
  if (option) {
    return (
      <>
        <div className="pie-title">{title}</div>
        <div className="holder">
          <div className="fill-a">
            <div className="fill-wt">Total</div>
            <div className="fill-blue">{value}</div>
          </div>
          <div className="chart">
            <Doughnut
              data={{
                labels: getLabelInfo(),
                datasets: [
                  {
                    data: getData(),
                    backgroundColor: [
                      "rgb(255, 99, 132)",
                      "rgb(8, 150, 150)",
                      "rgb(136, 171, 14)",
                      "rgb(199,113,13)",
                      "rgb(255, 50, 150)",
                    ],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    align: "center",
                    position: "right",
                    labels: {
                      usePointStyle: true,
                      boxWidth: 15,
                      padding: 40,
                      color: "white",
                    },
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
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="holder-b" style={{ background: "#11192a" }}>
          <div className="fill-b">
            <div className="fill-wt-b">{value}</div>
          </div>
          <div className="chart">
            <Doughnut
              data={{
                labels: getLabelInfo(),
                datasets: [
                  {
                    data: getData(),
                    backgroundColor: [
                      "rgb(255, 99, 132)",
                      "rgb(8, 150, 150)",
                      "rgb(136, 171, 14)",
                      "rgb(199,113,13)",
                      "rgb(255, 50, 150)",
                    ],
                  },
                ],
              }}
              options={{
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
        </div>
      </>
    );
  }
};
