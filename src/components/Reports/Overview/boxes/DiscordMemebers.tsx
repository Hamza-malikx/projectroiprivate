import React from "react";
import { OverviewBox } from "./OverviewBox";

interface DiscordMemebersProps {
  amount: string;
}

export const DiscordMemebers: React.FC<DiscordMemebersProps> = ({ amount }) => {
  return (
    <OverviewBox
      title="Discord Members"
      gradient="linear-gradient(260.31deg, #522263 7.82%, #6D24E4 91.92%)"
    >
      <div>
        <div className="discord-amount">
          <span
            style={{
              background:
                "linear-gradient(260.69deg, #2E1F8B -33.31%, #6D24E4 91.97%)",
              color: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            {amount}
          </span>
        </div>
        <div className="discord-bottom">
          <a href="https://ai92ndjajdvs">https://ai92ndjajdvs</a>
        </div>
      </div>
    </OverviewBox>
  );
};
