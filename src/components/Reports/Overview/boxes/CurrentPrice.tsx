import { ArrowUpIcon } from "@chakra-ui/icons";
import React from "react";
import { OverviewBox } from "./OverviewBox";

interface CurrentPriceProps {
  amount: string;
  change: string;
}

export const CurrentPrice: React.FC<CurrentPriceProps> = ({
  amount,
  change,
}) => {
  return (
    <OverviewBox
      title="Current Price"
      gradient="linear-gradient(92.03deg, #FFB546 1.35%, #F4E23E 89.81%)"
    >
      <div>
        <div className="price-amount">{amount}</div>
        <div className="price-bottom">
          <div className="price-change">
            <ArrowUpIcon marginTop="-4px" />
            {change}
          </div>
          <span>24hr</span>
        </div>
      </div>
    </OverviewBox>
  );
};
