import { ArrowUpIcon } from "@chakra-ui/icons";
import React from "react";
import { OverviewBox } from "./OverviewBox";
import svg from "./mcap.svg";

interface MarketCapProps {
  amount: string;
  change: string;
}

export const MarketCap: React.FC<MarketCapProps> = ({ amount, change }) => {
  return (
    <OverviewBox
      title="Market Cap"
      gradient="linear-gradient(260.31deg, #522263 7.82%, #6D24E4 91.92%)"
    >
      <div>
        <div className="market-mid">
          <span
            style={{
              background:
                "linear-gradient(260.69deg, #2E1F8B -33.31%, #6D24E4 91.97%)",
              color: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            {amount}
          </span>
          <div className="market-mid-right">
            <div className="market-change">
              <ArrowUpIcon marginTop="-4px" />
              {change}
            </div>
            <span>24hr</span>
          </div>
        </div>
        <div className="mcap-svg-container">
          <img src={svg} />
        </div>
      </div>
    </OverviewBox>
  );
};
