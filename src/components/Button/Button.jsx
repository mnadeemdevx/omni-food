import React from "react";
import "./Button.css";

const Button = ({ text, href }) => {
  return (
    <>
      <button className="btn">
        <a href={href}>{text}</a>
      </button>
    </>
  );
};

export default Button;
