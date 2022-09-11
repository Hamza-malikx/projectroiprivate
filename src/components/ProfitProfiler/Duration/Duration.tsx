import React from "react";
import { Profitdata } from "../../../utils/tempData";
import { SectionHeader } from "../../SectionHeader";
import { ProfitProfilerPie } from "../ProfitProfilerPie";
import "./Duration.css";

interface DurationProps {}

export const Duration: React.FC<DurationProps> = () => {
  return (
    <div className="section">
      <SectionHeader
        title="Average Duration of Profitability"
        collapseDisabled={true}
        qmark={true}
      />
      <div className="dura">
        <ProfitProfilerPie data={Profitdata} value="Avg 7-14d" option={0} />
      </div>
    </div>
  );
};
