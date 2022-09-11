import React from "react";
import { totalWalletProfChart } from "../../../utils/tempData";
import { ProfitProfilerPie } from "../ProfitProfilerPie";
import { ProfitProfilerSpider } from "../ProfitProfilerSpider";
import twitterSVG from "./twitter.svg";
import "./ProfitTop.css";
import { CurrentlyProfitable } from "./boxes/CurrentlyProfitable";
import { WRProfit } from "./boxes/WRProfit";
import { ProfitableDur } from "./boxes/ProfitableDur";
import { AverageTaxes } from "./boxes/AverageTaxes";
import { ProfitSMA } from "./boxes/ProfitSMA";
import { WhaleOwnership } from "./boxes/WhaleOwnership";

interface ProfitTopProps {}

export const ProfitTop: React.FC<ProfitTopProps> = () => {
  return (
    <div className="section">
      <div className="pt-one">
        <div className="pt-one-sub">
          <div className="pt-title">Total Wallet Profitability Chart</div>
          <ProfitProfilerPie
            data={totalWalletProfChart}
            value="2500/2575"
            option={1}
          />
        </div>
        <div className="pt-one-sub">
          <div className="pt-title">Average Daily Profit</div>
          <ProfitProfilerSpider />
        </div>
      </div>
      <div className="pt-two-container">
        <div className="pt-two">
          <div className="pt-title2">
            Contract Profit Profile - $COMB
            <img src={twitterSVG} alt="twitter logo" />
          </div>
          <div className="pt-two-sub">
            <div className="cp-box-container">
              <CurrentlyProfitable />
              <WRProfit />
              <ProfitableDur />
              <AverageTaxes />
              <ProfitSMA />
              <WhaleOwnership />
            </div>
            <div className="cp-footer">
              <img src="./fuse.png" alt="fuse logo" />
              <div>06/25/22</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
