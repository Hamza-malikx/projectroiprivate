import React from "react";

interface OverviewDataCompProps {
  ky: string;
  val: string;
}

export const OverviewDataComp: React.FC<OverviewDataCompProps> = ({
  ky,
  val,
}: OverviewDataCompProps) => {
  return (
    <div className="data-row">
      <div className="data-row-container">
        <div className="data-key">{ky}</div>
        <div className="data-val">{val}</div>
      </div>

      <div className="data-seperator" />
    </div>
  );
};

const overviewData = (data: { [ky: string]: string }) => {
  return (
    <div style={{ width: "100%" }}>
      {Object.entries(data).map(([key, value]) => (
        <OverviewDataComp key={key} ky={key} val={value} />
      ))}
    </div>
  );
};

export default overviewData;
