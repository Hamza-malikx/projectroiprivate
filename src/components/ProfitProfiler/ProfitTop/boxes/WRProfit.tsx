import React from "react";
import { ContractProfitBox } from "./ContractProfitBox";

interface WRProfitProps {}

export const WRProfit: React.FC<WRProfitProps> = () => {
  return (
    <ContractProfitBox title="Wallet Realized Profit">
      <div className="cp-wrp-container">
        <div className="'cp-wrp-subcontainer">
          <div className="cp-wrp-head">Profit Earning</div>
          <div>
            <span className="cp-wrp-blue">$212</span>
            <span className="cp-wrp-purple-small">/Day</span>
          </div>
          <input type="range" className="cp-wrp-slider" />
        </div>
        <div className="'cp-wrp-subcontainer">
          <div className="cp-wrp-head">Number of Wallets</div>
          <div>
            <span className="cp-wrp-purple">212</span>
          </div>
        </div>
      </div>
    </ContractProfitBox>
  );
};
