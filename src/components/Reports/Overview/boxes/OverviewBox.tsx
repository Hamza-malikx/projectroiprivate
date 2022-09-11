import React from "react";

interface OverviewBoxProps {
  title: string;
  gradient: string;
  children?: JSX.Element;
}

export const OverviewBox: React.FC<OverviewBoxProps> = ({
  title,
  gradient,
  children,
}) => {
  return (
    <div className="box-border-maker" style={{ backgroundImage: gradient }}>
      <div className="box-container">
        <div className="box-title">{title}</div>
        {children}
      </div>
    </div>
  );
};
