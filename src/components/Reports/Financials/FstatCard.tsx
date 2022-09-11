import React from "react";
import "./FstatCard.css";
interface FstatCardProps {
  title: string;
  value: string;
  date: string;
}

export const FstatCard: React.FC<FstatCardProps> = ({ title, value, date }) => {
  return (
    <div className="st-card-back">
      <div className="st-card-title">{title}</div>
      <div className="st-card-date">{date}</div>
      <div className="st-card-val">{value}</div>
    </div>
  );
};
