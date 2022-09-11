import { Collapse } from "@chakra-ui/react";
import React from "react";
import { SectionHeader } from "../../SectionHeader";
import { PrivateNotes } from "../PrivateNotes";
import "./Security.css";
import { SecurityBox } from "./SecurityBox";

interface SecurityProps {
  open: boolean;
  toggle: () => void;
}

export const Security: React.FC<SecurityProps> = ({ open, toggle }) => {
  return (
    <div className="section">
      <SectionHeader title="Security" toggle={toggle} open={open} />
      <Collapse in={open}>
        <div className="grid">
          <SecurityBox
            title="Multi - Sig"
            result="YES"
            footer="https://ai92ndjajdvs"
          />
          <SecurityBox
            title="Audit"
            result="YES"
            footer="https://ai92ndjajdvs"
          />
          <SecurityBox title="Hacks" result="YES" footer="Report" />
          <SecurityBox title="Known Found" result="No" footer="Report" />
        </div>
        <PrivateNotes />
      </Collapse>
    </div>
  );
};
