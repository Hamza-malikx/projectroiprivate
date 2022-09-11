import React from "react";
import { walletMasterData } from "../../../utils/tempData";
import { SectionHeader } from "../../SectionHeader";

interface TopByAvgDailyProps {}

export const TopByAvgDaily: React.FC<TopByAvgDailyProps> = () => {
  return (
    <div className="section">
      <SectionHeader
        title="Top Wallets by Average Daily Profit"
        collapseDisabled={true}
        qmark={true}
      />
      <div className="p-table-container">
        <div className="p-table">
          <div className="p-table-row-container">
            <div className="p-table-heading-row">
              {[
                "Address",
                "First TxN",
                "Most Recent TxN",
                "Time Invested (Days)",
                "Total Invested",
                "Average Profit/Day",
              ].map((title) => (
                <div className="p-row-heading p-fw" key={title}>
                  {title}
                </div>
              ))}
            </div>
          </div>
          <div className="p-scroll">
            {walletMasterData.map(
              (
                { address, firstTXN, recentTXN, timeInv, totalInv, avgProfit },
                index
              ) => (
                <div className="p-table-row-container" key={address}>
                  <div
                    className={"p-table-row" + (index % 2 ? " p-alt-row" : "")}
                  >
                    <div className="p-table-element p-fw p-address">
                      {address}
                    </div>
                    <div className="p-table-element p-fw">{firstTXN}</div>
                    <div className="p-table-element p-fw">{recentTXN}</div>
                    <div className="p-table-element p-fw">{timeInv}</div>
                    <div className="p-table-element p-fw">{totalInv}</div>
                    <div className="p-table-element p-fw">{avgProfit}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
