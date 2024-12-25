import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-md shadow-md ${className}`}>
      {children}
    </div>
  );
};
