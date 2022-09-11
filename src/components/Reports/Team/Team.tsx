import { SectionHeader } from "../../SectionHeader";
import { PrivateNotes } from "../PrivateNotes";
import Profile from "./Profile";
import "./Team.css";

import React from "react";
import { Collapse } from "@chakra-ui/react";
import { AddButton } from "./AddButton";

interface TeamProps {
  open: boolean;
  toggle: () => void;
}

export const Team: React.FC<TeamProps> = ({ open, toggle }) => {
  return (
    <div className="section">
      <SectionHeader title="Team" toggle={toggle} open={open}>
        <AddButton />
      </SectionHeader>
      <Collapse in={open}>
        <div className="profile-container">
          <Profile
            id="0xindra#3063"
            position="Discord Mod"
            description="10 years of Expertise in Bussiness to lead the company."
          />
          <Profile
            id="0xindra#3063"
            position="Discord Mod"
            description="10 years of Expertise in Bussiness to lead the company."
          />
        </div>
        <PrivateNotes />
      </Collapse>
    </div>
  );
};
