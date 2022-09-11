import React from "react";

interface FinanceRetProps {
  title: string;
  bg: string;
  value: string;
}

export const FinanceRet: React.FC<FinanceRetProps> = ({ title, bg, value }) => {
  return (
    <div className="ret" style={{ background: bg }}>
      <div className="ret-tit">{title}</div>
      <div className="ret-perc">{value}</div>
    </div>
  );
};
