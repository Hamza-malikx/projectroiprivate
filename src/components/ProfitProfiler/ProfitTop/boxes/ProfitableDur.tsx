import React from "react";
import { ContractProfitBox } from "./ContractProfitBox";

interface ProfitableDurProps {}

export const ProfitableDur: React.FC<ProfitableDurProps> = () => {
  return (
    <ContractProfitBox title="Profitable Duaration">
      <div className="cp-pd-container">
        <div className="cp-pd-head">Average Profit Duration</div>
        <div>
          <span className="cp-pd-left">04</span>
          <span className="cp-pd-right">Days</span>
        </div>
      </div>
    </ContractProfitBox>
  );
};
