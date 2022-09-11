import { Collapse } from "@chakra-ui/react";
import React from "react";
import { SectionHeader } from "../../SectionHeader";
import { PrivateNotes } from "../PrivateNotes";
import "./Opportunities.css";
import { OppTable } from "./OppTable";

interface OpportunitiesProps {
  data: {
    event: string;
    timeframe: string;
    source: { name: string; icon: string };
  }[];
  open: boolean;
  toggle: () => void;
}

export const Opportunities: React.FC<OpportunitiesProps> = ({
  data,
  open,
  toggle,
}) => {
  const renderData = () => {
    const events = [];
    const timeframes = [];
    const sources = [];
    for (var i = 0; i < data.length; i++) {
      events.push(data[i].event);
      timeframes.push(data[i].timeframe);
      sources.push(data[i].source);
    }

    return (
      <OppTable events={events} timeframes={timeframes} sources={sources} />
    );
  };
  return (
    <div className="section">
      <SectionHeader title="Opportunities" toggle={toggle} open={open} />
      <Collapse in={open}>
        {renderData()}
        <PrivateNotes />
      </Collapse>
    </div>
  );
};
