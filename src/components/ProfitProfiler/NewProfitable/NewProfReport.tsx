import React from "react";
import "./NewProfReport.css";

interface NewProfReportProps {}

export const NewProfReport: React.FC<NewProfReportProps> = () => {
  return (
    <div className="npr-center">
      <div
        className="npr-border-maker"
        style={{
          backgroundImage: "linear-gradient(180deg, #48A3F6 0%, #1780E0 100%)",
        }}
      >
        <div className="npr-container">
          <div
            className="npr-circle-outer"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #48A3F6 0%, #1780E0 100%)",
            }}
          >
            <div className="npr-circle-inner" />
          </div>
          <div className="npr-text">
            X new wallets joined over the last week and Y of them are profitable
            today
          </div>
        </div>
      </div>
    </div>
  );
};
