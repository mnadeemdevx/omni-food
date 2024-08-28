import React from 'react';
import Button from '../Button/Button';
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li><a className="main-nav-link" href="#how">How it works</a></li>
        <li><a className="main-nav-link" href="#meals">Meals</a></li>
        <li><a className="main-nav-link" href="#testimonials">Testimonials</a></li>
        <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
        <li><Button text="Try for free" href="#cta" /></li>
      </ul>
      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
      <div></div>
    </nav>
  );
};

export default Navbar;
