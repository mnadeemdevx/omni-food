import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
import FoodImg from "../../assets/hero.png";
import CustomerPhoto1 from "../../assets/customers/customer-1.jpg"
import CustomerPhoto2 from "../../assets/customers/customer-2.jpg"
import CustomerPhoto3 from "../../assets/customers/customer-3.jpg"
import CustomerPhoto4 from "../../assets/customers/customer-4.jpg"
import CustomerPhoto5 from "../../assets/customers/customer-5.jpg"
import CustomerPhoto6 from "../../assets/customers/customer-6.jpg"

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>

          <Button  text=" Start eating well"/>
          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>

          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={CustomerPhoto1} alt="Customer photo" />
              <img src={CustomerPhoto2} alt="Customer photo" />
              <img src={CustomerPhoto3} alt="Customer photo" />
              <img src={CustomerPhoto4} alt="Customer photo" />
              <img src={CustomerPhoto5} alt="Customer photo" />
              <img src={CustomerPhoto6} alt="Customer photo" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
        <img
              src={FoodImg}
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
