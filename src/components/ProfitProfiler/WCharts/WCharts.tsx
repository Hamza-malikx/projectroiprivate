import React from "react";
import { SectionHeader } from "../../SectionHeader";
import { WChartbar } from "./WChartbar";
import "./WCharts.css";

interface WChartsProps {}

export const WCharts: React.FC<WChartsProps> = () => {
  return (
    <div className="section">
      <SectionHeader
        title="Top 10 Wallets Charts"
        collapseDisabled={true}
        qmark={true}
      />
      <div className="wchart">
        <div className="wchartone">
          <div className="wchart-top">
            <div className="wchart-title">LOSS</div>
            <div
              className="wchart-title"
              style={{ color: "rgba(72, 163, 246, 0.85)" }}
            >
              PROFIT
            </div>
          </div>
          <WChartbar />
        </div>
      </div>
    </div>
  );
};
