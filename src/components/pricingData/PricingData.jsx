import React from 'react';
import { FaAppleAlt, FaLeaf} from 'react-icons/fa';
import { FaInfinity, FaPause } from 'react-icons/fa6';
import './PricingData.css'

const features = [
  {
    icon: <FaInfinity />,
    title: 'Never cook again!',
    text: 'Our subscriptions cover 365 days per year, even including major holidays.'
  },
  {
    icon: <FaAppleAlt />,
    title: 'Local and organic',
    text: 'Our cooks only use local, fresh, and organic products to prepare your meals.'
  },
  {
    icon: <FaLeaf />,
    title: 'No waste',
    text: 'All our partners only use reusable containers to package all your meals.'
  },
  {
    icon: <FaPause />,
    title: 'Pause anytime',
    text: 'Going on vacation? Just pause your subscription, and we refund unused days.'
  }
];

const PricingData = () => {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <div className="container grid">
          <aside className="plan-details">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div>

        <div className="container grid grid--4-cols">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <div className="feature-icon">{feature.icon}</div>
              <p className="feature-title">{feature.title}</p>
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingData;
