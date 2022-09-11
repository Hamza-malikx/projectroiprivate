import React from "react";
import { GradientLineChart } from "./GradientLineChart";

interface ProfitScenarioGraphProps {
  title: string;
  data: number[];
}

export const ProfitScenarioGraph: React.FC<ProfitScenarioGraphProps> = ({
  title,
  data,
}) => {
  return (
    <div className="ps">
      <div className="ps-title">{title}</div>

      <div className="ps-data-container">
        <div className="ps-info-container">
          <div className="ps-info-total">
            <div className="ps-info-ti">Total Investment</div>
            <div className="ps-info-ti-amt">$1000</div>
          </div>
          <div className="ps-info-profit">
            <div className="ps-info-pr">Profit:</div>
            <div className="ps-info-pr-amt">
              $1.53 <span style={{ color: "#4DDA62" }}>(+2.4%)</span>
            </div>
          </div>
        </div>
        <div className="ps-graph-container">
          <GradientLineChart data={data} />
        </div>
      </div>
    </div>
  );
};
