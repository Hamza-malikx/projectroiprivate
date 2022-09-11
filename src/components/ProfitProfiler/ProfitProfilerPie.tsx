import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import ReactApexChart from "react-apexcharts";
import { fontFamily, width } from "@mui/system";
import { textDecoration } from "@chakra-ui/react";
import { NONAME } from "dns";

interface ProfitProfilerPieProps {
  data: { name: string; value: number }[];
  value: string;
  option: number;
}

export const ProfitProfilerPie: React.FC<ProfitProfilerPieProps> = ({
  data,
  value,
  option,
}) => {
  const getLabelInfo = (): string[] => {
    let total = 0;
    for (const row of data) total += row.value;

    const arr = [];
    for (const row of data)
      arr.push(` ${row.name}  ${Math.floor((row.value / total) * 100)}%`);

    return arr;
  };
  const series: ApexAxisChartSeries = [
    {
      data: [10, 20, 50, 80],
    },
  ];

  const getData = (): number[] => {
    const arr = [];
    for (const row of data) arr.push(row.value);
    return arr;
  };
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
    },
    dataLabels: {
      distributed: true ,
      style: {
        fontSize: '24px',
        fontWeight: 100,
      },
      dropShadow: {
        enabled: false,
      },
      textAnchor:'start'
    },
    legend: {
      show:false
    },
    plotOptions: {
      pie: {
        donut:{
          size: "55px"
        }
      }
    },
    stroke: {
      show: false,
      width:0
    },
  }

  if (option) {
    return (
      <>
        <div className="holder">
          <div className="fill-a" style={{ paddingRight : '20px'}}>
            <div className="fill-wt">Total</div>
            <div className="fill-blue">{value}</div>
          </div>
          <div className="chart">
            <Doughnut
            width={500}
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
        <div
          className="holder-b"
          style={{ background: "#11192a", padding: "0", marginTop: "5%" }}
        >
          <div className="fill-b">
            <div className="fill-wt-b" style={{ paddingTop: "50px", width: "280px" }}>
              {value}
            </div>
          </div>
          <div className="chart" style={{ width: "600px" }}>
          <ReactApexChart
            type="donut"
            series={[44, 55, 41, 17, 15]}
            options={options}
            height={550}
            
          />
          </div>
        </div>
      </>
    );
  }
};
