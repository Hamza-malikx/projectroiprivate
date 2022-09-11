import React from "react";
import "./ContractProfitBox.css";

interface ContractProfitBoxProps {
  title: string;
  children?: JSX.Element;
}

export const ContractProfitBox: React.FC<ContractProfitBoxProps> = ({
  title,
  children,
}) => {
  return (
    <div className="cp-border-maker">
      <div className="cp-container">
        <div className="cp-top">
          <div className="cp-title">{title}</div>
          <button className="dbtn-border-maker">
            <div className="dbtn">
              <div className="dbtn-text">Details</div>
            </div>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
