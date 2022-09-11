import React from "react";
import { walletMasterData } from "../../../utils/tempData";
import { SectionHeader } from "../../SectionHeader";
import { NewProfReport } from "./NewProfReport";

interface NewProfitableProps {}

export const NewProfitable: React.FC<NewProfitableProps> = () => {
  return (
    <div className="section">
      <SectionHeader
        title="Newest and Most Profitable"
        collapseDisabled={true}
        qmark={true}
      />
      <NewProfReport />
      <div className="p-table-container">
        <div className="p-table">
          <div className="p-table-row-container">
            <div className="p-table-heading-row">
              {[
                "Address",
                "First TxN",
                "Time Invested (Days)",
                "Profit ( USD )",
              ].map((title) => (
                <div className="p-row-heading p-fw" key={title}>
                  {title}
                </div>
              ))}
            </div>
          </div>
          <div className="p-scroll">
            {walletMasterData.map(
              ({ address, firstTXN, timeInv, profit }, index) => (
                <div className="p-table-row-container" key={address}>
                  <div
                    className={"p-table-row" + (index % 2 ? " p-alt-row" : "")}
                  >
                    <div className="p-table-element p-fw p-address">
                      {address}
                    </div>
                    <div className="p-table-element p-fw">{firstTXN}</div>
                    <div className="p-table-element p-fw">{timeInv}</div>
                    <div className="p-table-element p-fw">{profit}</div>
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
