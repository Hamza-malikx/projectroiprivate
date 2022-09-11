import React from "react";

interface AddButtonProps {}

export const AddButton: React.FC<AddButtonProps> = ({}) => {
  return (
    <button className="add-user-container">
      <div className="add-user">Add Member</div>
    </button>
  );
};
