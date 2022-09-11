import { Collapse } from "@chakra-ui/react";
import React from "react";
import { engagementData } from "../../../utils/tempData";
import { SectionHeader } from "../../SectionHeader";
import "./Community.css";
import { CommunityChart } from "./CommunityChart";

interface CommunityProps {
  open: boolean;
  toggle: () => void;
}

export const Community: React.FC<CommunityProps> = ({ open, toggle }) => {
  return (
    <div className="section">
      <SectionHeader title="Community Engagement" toggle={toggle} open={open} />
      <Collapse in={open}>
        <div className="main">
          <div className="board">
            <div className="title">Engagement Velocity</div>
            <CommunityChart data={engagementData} />
          </div>
          <div className="slide">
            <div className="title">Twitter Recent Post</div>
            <div className="frame">
              <div className="imagebg">
                <img src="./twitterx.png" className="image" />
              </div>
              <div className="imagebg">
                <img src="./twitterx.png" className="image" />
              </div>
              <div className="imagebg">
                <img src="./twitterx.png" className="image" />
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="title">Discord #Announcement Posts</div>
            <div className="frame">
              <div className="imagebg">
                <img src="./discordx.png" className="image" />
              </div>
              <div className="imagebg">
                <img src="./discordx.png" className="image" />
              </div>
              <div className="imagebg">
                <img src="./discordx.png" className="image" />
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="title">Youtube Videos</div>
            <div className="frame">
              <div className="imagebg">
                <img src="./yt.png" className="image" />
              </div>
              <div className="imagebg">
                <img src="./yt.png" className="image" />
              </div>
              <div className="imagebg">
                <img src="./yt.png" className="image" />
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
