import React from "react";
import { SectionHeader } from "../../SectionHeader";
import "./Financials.css";
import { PrivateNotes } from "../PrivateNotes";
import { FinancePie } from "./FinancePie";
import {
  financialsMidData,
  fundsData,
  whaleData,
} from "../../../utils/tempData";
import { Collapse } from "@chakra-ui/react";
import { FstatCard } from "./FstatCard";
import { ProgBar } from "./ProgBar";
import { Whales } from "./Whales";
import { FinanceRet } from "./FinanceRet";
import { MidGradientChart } from "./MidGradientChart";

interface FinancialsProps {
  open: boolean;
  toggle: () => void;
}

export const Financials: React.FC<FinancialsProps> = ({ open, toggle }) => {
  return (
    <div className="section">
      <SectionHeader title="Financials" toggle={toggle} open={open} />
      <Collapse in={open}>
        <div className="one">
          <div className="top-left">
            <FinanceRet
              title="Daily ROI %"
              value="45%"
              bg="linear-gradient(180deg, #1E45A8 0%, #183A92 100%)"
            />
            <FinanceRet
              title="APR"
              value="15%"
              bg="linear-gradient(180deg, #3D98EC 0%, #2074C1 100%)"
            />
            <FinanceRet
              title="APy"
              value="25%"
              bg="linear-gradient(180deg, #8146FF 0%, #6D37DF 100%)"
            />
          </div>
          <div className="top-rt">
            <Whales data={whaleData} />
          </div>
        </div>
        <div className="two">
          <div className="two-left">
            <FinancePie
              title="Incoming Funds"
              data={fundsData}
              value="Tokenomics"
              option={0}
            />
          </div>
          <div className="two-rt">
            <div className="title" style={{ textAlign: "center" }}>
              Taxes (max)
            </div>
            <ProgBar value="53%" title="Buy Tax" bg="#FC7FA6" />
            <ProgBar value="50%" title="Sales Tax" bg="#37D2D0" />
            <ProgBar value="30%" title="Claim Tax" bg="#D3789E" />
            <ProgBar value="25%" title="Compound Tax" bg="#FCA237" />
            <ProgBar value="20%" title="Transfer Tax" bg="#BCDE37" />
          </div>
        </div>
        <div className="three">
          <div className="fin-stat">
            <FstatCard
              title="Highest Balance"
              value="0.000"
              date="Wed 23, April 2022"
            />
            <FstatCard
              title="Lowest Balance"
              value="0.000"
              date="Wed 23, April 2022"
            />
            <FstatCard
              title="USD Highest Value"
              value="$ 34 USD"
              date="Wed 23, April 2022"
            />
            <FstatCard
              title="USD Lowest Value"
              value="$ 34 USD"
              date="Wed 23, April 2022"
            />
          </div>
          <div className="fin-stat-graph">
            <MidGradientChart data={financialsMidData} />
          </div>
        </div>
        <div className="bottom">
          <div className="bt1">
            <FinancePie
              title="Incoming Funds"
              data={fundsData}
              value="2.07M"
              option={1}
            />
          </div>
          <div className="bt2">
            <FinancePie
              title="Outgoing Funds"
              data={fundsData}
              value="2.07M"
              option={1}
            />
          </div>
        </div>
        <PrivateNotes />
      </Collapse>
    </div>
  );
};
