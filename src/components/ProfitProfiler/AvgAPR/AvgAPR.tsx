import React from "react";
import { avgAPRData } from "../../../utils/tempData";
import { SectionHeader } from "../../SectionHeader";
import { AprGraph } from "./AprGraph";
import "./AvgAPR.css";

interface AvgAPRProps {}

export const AvgAPR: React.FC<AvgAPRProps> = () => {
  return (
    <div className="section">
      <SectionHeader
        title="Average Daily APR"
        collapseDisabled={true}
        qmark={true}
      />
      <div className="apr-one">
        <AprGraph data={avgAPRData} />
      </div>
    </div>
  );
};
