import React from "react";
import OmniLogo from "../../assets/omnifood-logo.png";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
      <header className="header">
        <a href="#">
          <img className="logo" alt="Omnifood logo" src={OmniLogo} />
        </a>
        <Navbar/>
      </header>
    );
  };
export default Header;
