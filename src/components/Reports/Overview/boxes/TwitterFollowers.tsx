import React from "react";
import { OverviewBox } from "./OverviewBox";

interface TwitterFollowersProps {
  amount: string;
}

export const TwitterFollowers: React.FC<TwitterFollowersProps> = ({
  amount,
}) => {
  return (
    <OverviewBox
      title="Twitter Followers"
      gradient="linear-gradient(93.5deg, #1CE3BE 3.85%, #349AC6 133.72%)"
    >
      <div>
        <div className="twitter-amount">{amount}</div>
        <div className="twitter-bottom">
          <a href="https://ai92ndjajdvs">https://ai92ndjajdvs</a>
        </div>
      </div>
    </OverviewBox>
  );
};
