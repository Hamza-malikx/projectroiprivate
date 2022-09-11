import ShareIcon from "@mui/icons-material/Share";
import AddchartIcon from "@mui/icons-material/Addchart";
import "./ReportToolBar.css";

import React from "react";

interface ReportToolBarProps {
  collapseAll: () => void;
  expandAll: () => void;
}

export const ReportToolBar: React.FC<ReportToolBarProps> = ({
  collapseAll,
  expandAll,
}) => {
  return (
    <div className="main-box">
      <div className="box1">
        <button className="b1" onClick={expandAll}>
          Expand All
        </button>

        <button className="b2" onClick={collapseAll}>
          Collapse All
        </button>
      </div>
      <div className="box2">
        <button className="c1">
          <ShareIcon className="ShareIcon" />
        </button>
        <div className="c2">
          <button className="cc">
            <AddchartIcon className="chartIcon" />
          </button>
          <div className="rt">Download Report</div>
        </div>
      </div>
    </div>
  );
};
