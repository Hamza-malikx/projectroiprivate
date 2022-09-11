import { Collapse } from "@chakra-ui/react";
import React from "react";
import { SectionHeader } from "../../SectionHeader";
import { PrivateNotes } from "../PrivateNotes";
import "./Purpose.css";

interface PurposeProps {
  open: boolean;
  toggle: () => void;
}

export const Purpose: React.FC<PurposeProps> = ({ open, toggle }) => {
  return (
    <div className="section">
      <SectionHeader title="Project's Purpose" toggle={toggle} open={open} />
      <Collapse in={open}>
        <div className="purpose-text-container">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas
          </p>
          <br />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <PrivateNotes />
      </Collapse>
    </div>
  );
};
