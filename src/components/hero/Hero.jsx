import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
import FoodImg from "../../assets/hero.png";
import Meals from "../mealsDilivered/Meals";

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

          <Button
            text="Start eating well"
            href="#cta"
            padding="1.2rem 2.4rem"
            borderRadius="9px"
            backgroundColor="#e67e22"
            linkColor="#ffffff"
          />
          <Button
            text=" Learn more  &darr;"
            href="#how"
            padding="1.2rem 2.4rem"
            marginLeft="15px"
          />

          <Meals/>
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
