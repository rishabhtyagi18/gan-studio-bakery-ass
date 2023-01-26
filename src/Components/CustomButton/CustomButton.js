import React from "react";
import "./CustomButton.css";

const CustomButton = ({ className, Icon, text, onClick }) => {
  return (
    <div className={`bakery-button ${className || ""}`} onClick={onClick}>
      {Icon && <Icon className="button-icon" />}
      <p className="button-text">{text}</p>
    </div>
  );
};

export default CustomButton;
