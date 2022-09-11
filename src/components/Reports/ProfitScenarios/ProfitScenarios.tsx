import { Collapse } from "@chakra-ui/react";
import React from "react";
import { priceBottomData, priceData } from "../../../utils/tempData";
import { SectionHeader } from "../../SectionHeader";
import { PrivateNotes } from "../PrivateNotes";
import { BottomChart } from "./BottomChart";
import { ProfitScenarioGraph } from "./ProfitScenarioGraph";
import "./ProfitScenarios.css";

interface ProfitScenariosProps {
  open: boolean;
  toggle: () => void;
}

export const ProfitScenarios: React.FC<ProfitScenariosProps> = ({
  open,
  toggle,
}) => {
  return (
    <div className="section">
      <SectionHeader title="Profit Scenarios" open={open} toggle={toggle} />
      <Collapse in={open}>
        <button className="create-customsc-btn">
          Create a Custom Scenario
        </button>
        <div className="cent">
          <div className="ps-container">
            <ProfitScenarioGraph
              title="Breakeven + Reinvest 100%"
              data={priceData}
            />
            <ProfitScenarioGraph
              title="Claim 50% + Reinvest 50%"
              data={priceData}
            />
            <ProfitScenarioGraph title="Reinvest 100%" data={priceData} />
          </div>
        </div>
        <div className="ps-bottom-container">
          <div className="ps-bottom">
            <BottomChart data={priceBottomData} />
          </div>
        </div>
        <PrivateNotes />
      </Collapse>
    </div>
  );
};
