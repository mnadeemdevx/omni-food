import React from "react";
import "./Button.css";

const Button = ({ text, href, padding, borderRadius, backgroundColor, linkColor}) => {
  return (
    <button
      className="btn"
      style={{
        padding: padding || '10px 20px',
        borderRadius: borderRadius || '5px',
        backgroundColor: backgroundColor || '#ffffff',
      }}
    >
      <a
        href={href}
        className="btn-link"
        style={{ color: linkColor || '#555555'}}
      >
        {text}
      </a>
    </button>
  );
};

export default Button;
