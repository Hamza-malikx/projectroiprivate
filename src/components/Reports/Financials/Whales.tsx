import React from "react";
import "./Whales.css";

interface WhalesProps {
  data: { wallet: string; holding: number; trades: number; net: string }[];
}

export const Whales: React.FC<WhalesProps> = ({ data }) => {
  return (
    <>
      <div className="top-rt-heading">Whales</div>
      <div className="w-table-container">
        <div className="w-table-row">
          <div className="w-row-heading w-fw">Wallet</div>
          <div className="w-row-heading w-fw">Holding (%)</div>
          <div className="w-row-heading w-fw">7-day Trades</div>
          <div className="w-row-heading w-fw">Net Buy/Sell</div>
        </div>
        <div className="w-scroll">
          {data.map(({ wallet, holding, trades, net }, index) => (
            <div
              className={"w-table-row" + (index % 2 ? "" : " w-alt-row")}
              key={wallet}
            >
              <div className="w-table-element mr">{wallet}</div>
              <div className="w-table-element w-fw w-holding">{holding}%</div>
              <div className="w-table-element w-fw w-trades">{trades}</div>
              <div
                className="w-table-element w-fw"
                style={{ paddingLeft: "20px" }}
              >
                {net}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
