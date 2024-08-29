import "./PricingCard.css";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import Button from "../Button/Button";
const PricingCard = ({ title, heading, plans }) => {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">{title}</span>
        <h2 className="heading-secondary">{heading}</h2>
      </div>

      <div className="container grid grid--2-cols margin-bottom-md">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-plan pricing-plan--${plan.type}`}
          >
            <header className="plan-header">
              <p className="plan-name">{plan.name}</p>
              <p className="plan-price">
                <span>$</span>{plan.price}
              </p>
              <p className="plan-text">
                per month. That's just ${plan.mealCost} per meal!
              </p>
            </header>
            <ul className="list">
              {plan.features.map((feature, i) => (
                <li key={i} className="list-item">
                  {feature.icon === 'checkmark-outline' ? (
                    <FaCheck className="list-icon" />
                  ) : (
                    <FaTimes className="list-icon" />
                  )}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="plan-sign-up">
            <Button
             text="Start eating well"
             href="#"
             padding="1.2rem 2.4rem"
             borderRadius="9px"
             backgroundColor="#e67e22"
             linkColor="#ffffff"
            />
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCard;
