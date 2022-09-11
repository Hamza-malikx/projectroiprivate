import React from "react";
import { ContractProfitBox } from "./ContractProfitBox";

interface AverageTaxesProps {}

export const AverageTaxes: React.FC<AverageTaxesProps> = () => {
  return (
    <ContractProfitBox title="Average Taxes">
      <div className="cp-at-container">
        <div>
          <span className="cp-at-left">$2.10</span>
          <span className="cp-at-right">USD</span>
        </div>
        <div className="cp-at-foot">Per Round Trip</div>
      </div>
    </ContractProfitBox>
  );
};
