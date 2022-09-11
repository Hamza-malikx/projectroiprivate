import React from "react";
import "./Profile.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

interface ProfileProps {
  id: string;
  position: string;
  description: string;
  dp?: string;
}

export const Profile: React.FC<ProfileProps> = ({
  id,
  position,
  description,
  dp,
}) => {
  return (
    <div className="back">
      <div className="dp-container">
        <img src={dp || "./placeholderDP.jpg"} className="dp" />
      </div>
      <div className="info">
        <div className="id">
          {id}
          <LinkedInIcon className="logo" />
          <TwitterIcon className="logo" />
        </div>
        <div className="position"> {position} </div>
      </div>
      <div className="desc">{description}</div>
    </div>
  );
};

export default Profile;
