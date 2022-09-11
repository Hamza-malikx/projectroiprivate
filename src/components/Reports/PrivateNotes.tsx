import React from "react";
import "./PrivateNotes.css";

interface PrivateNotesProps {}

export const PrivateNotes: React.FC<PrivateNotesProps> = ({}) => {
  return (
    <div className="private-notes-container">
      <div className="private-notes">
        <p className="private-notes-text">Private Notes</p>
        <p className="private-notes-text">
          This project makes you enable to invest on our system. A secure and
          protected platform to invest with ease.
        </p>
      </div>
    </div>
  );
};
