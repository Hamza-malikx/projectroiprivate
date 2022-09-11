import React from "react";
import { SectionHeader } from "../../SectionHeader";
import { CurrentPrice } from "./boxes/CurrentPrice";
import { DiscordMemebers } from "./boxes/DiscordMemebers";
import { MarketCap } from "./boxes/MarketCap";
import { OverviewBox2 } from "./boxes/OverviewBox2";
import { PeerChange } from "./boxes/PeerChange";
import { TwitterFollowers } from "./boxes/TwitterFollowers";
import overviewData from "./overviewData";
import "./overview.css";
import { Collapse } from "@chakra-ui/react";
import { overviewInfoData } from "../../../utils/tempData";

interface OverviewProps {
  open: boolean;
  toggle: () => void;
}

export const Overview: React.FC<OverviewProps> = ({ open, toggle }) => {
  return (
    <div className="section">
      <SectionHeader
        title="Overview"
        first={true}
        toggle={toggle}
        open={open}
      />
      <Collapse in={open}>
        <div className="top-boxes-container">
          <div className="top-boxes">
            <MarketCap amount="$4,326" change="0.34" />
            <CurrentPrice amount="$0.21" change="34%" />
            <PeerChange amount="+21%" />
            <TwitterFollowers amount="1,222" />
            <DiscordMemebers amount="1,222" />
          </div>
        </div>
        <div className="data">{overviewData(overviewInfoData)}</div>

        <div className="bottom-boxes">
          <OverviewBox2 title="KYC" status="YES" img="/KYC.png" />
          <OverviewBox2 title="Audit" status="YES" img="/Audit.png" />
        </div>
      </Collapse>
    </div>
  );
};
