import React from "react";

interface OverviewBox2Props {
  title: string;
  status: string;
  img: string;
}

export const OverviewBox2: React.FC<OverviewBox2Props> = ({
  title,
  status,
  img,
}) => {
  return (
    <div
      className="box-border-maker2"
      style={{
        backgroundImage:
          "linear-gradient(260.31deg, #522263 7.82%, #6D24E4 91.92%)",
      }}
    >
      <div className="box-container2">
        <div className="box-title2">{title}</div>
        <div className="box-status">
          <span
            style={{
              background:
                "linear-gradient(93.5deg, #1CE3BE 3.85%, #349AC6 133.72%)",
              color: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            {status}
          </span>
          <img className="box-img" src={img} />
        </div>
      </div>
    </div>
  );
};
