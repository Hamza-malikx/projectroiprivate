import React from "react";
import { AvgAPR } from "../components/ProfitProfiler/AvgAPR/AvgAPR";
import { Duration } from "../components/ProfitProfiler/Duration/Duration";
import { NewProfitable } from "../components/ProfitProfiler/NewProfitable/NewProfitable";
import { ProfitTop } from "../components/ProfitProfiler/ProfitTop/ProfitTop";
import { TopByAvgDaily } from "../components/ProfitProfiler/TopByAvgDaily/TopByAvgDaily";
import { TopByROI } from "../components/ProfitProfiler/TopByROI/TopByROI";
import { WCharts } from "../components/ProfitProfiler/WCharts/WCharts";
import "../components/ProfitProfiler/PTable.css";

interface ProfitProfilerProps {}

export const ProfitProfiler: React.FC<ProfitProfilerProps> = () => {
  return (
    <div>
      <ProfitTop />
      <Duration />
      <WCharts />
      <AvgAPR />
      <NewProfitable />
      <TopByROI />
      <TopByAvgDaily />
    </div>
  );
};
