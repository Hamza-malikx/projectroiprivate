import React from "react";
import { ContractProfitBox } from "./ContractProfitBox";

interface CurrentlyProfitableProps {}

export const CurrentlyProfitable: React.FC<CurrentlyProfitableProps> = () => {
  return (
    <ContractProfitBox title="Currently Profitable">
      <div className="cp-cp-container">
        <div className="cp-cp-head">Wallets</div>
        <div>
          <span className="cp-cp-left">12,321</span>
          <span className="cp-cp-right">/20,000</span>
        </div>
      </div>
    </ContractProfitBox>
  );
};
