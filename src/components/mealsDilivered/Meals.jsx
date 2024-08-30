import React from 'react'
import "./Meals.css"
import CustomerPhoto1 from "../../assets/customers/customer-1.jpg";
import CustomerPhoto2 from "../../assets/customers/customer-2.jpg";
import CustomerPhoto3 from "../../assets/customers/customer-3.jpg";
import CustomerPhoto4 from "../../assets/customers/customer-4.jpg";
import CustomerPhoto5 from "../../assets/customers/customer-5.jpg";
import CustomerPhoto6 from "../../assets/customers/customer-6.jpg";


function Meals() {
  return (
    <>
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
    </>
  )
}

export default Meals;
