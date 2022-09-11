import React from "react";
import { OverviewBox } from "./OverviewBox";

interface PeerChangeProps {
  amount: string;
}

export const PeerChange: React.FC<PeerChangeProps> = ({ amount }) => {
  return (
    <OverviewBox
      title="Avg Peer %Change"
      gradient="linear-gradient(180deg, #48A3F6 0%, #1780E0 100%)"
    >
      <div>
        <div className="peer-amount">{amount}</div>
        <div className="peer-bottom">
          <span>24hr</span>
        </div>
      </div>
    </OverviewBox>
  );
};
