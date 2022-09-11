import React from "react";
import "./ProgBar.css";

interface ProgBarProps {
  value: string;
  title: string;
  bg: string;
}

export const ProgBar: React.FC<ProgBarProps> = ({ value, title, bg }) => {
  return (
    <div className="pg-bar">
      <div className="pg-title">{title}</div>
      <div className="pg-container">
        <div className="pg-bg" style={{ width: value, background: bg }}></div>
        <div className="pg-val" style={{ color: bg }}>
          {value}
        </div>
      </div>
    </div>
  );
};
