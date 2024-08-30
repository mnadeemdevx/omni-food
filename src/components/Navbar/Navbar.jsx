import React from "react";
import Button from "../Button/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#how">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <Button
              text="Try for free"
              href="#cta"
              padding="9px 25.6px"
              borderRadius="9px"
              backgroundColor="#e67e22"
              linkColor="#ffffff"
              fontSize="17px"
            />
          </li>
        </ul>
      </nav>

      <label htmlFor="nav-toggle" className="btn-mobile-nav">
        <FaBars className="icon-mobile-nav menu-icon" />
        <FaTimes className="icon-mobile-nav close-icon" />
      </label>
    </>
  );
};

export default Navbar;
