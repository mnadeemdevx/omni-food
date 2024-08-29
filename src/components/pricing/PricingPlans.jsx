import React from 'react';
import PricingCard from './PricingCard';

const plans = [
  {
    type: 'starter',
    name: 'Starter',
    price: '399',
    mealCost: '13',
    features: [
      { icon: 'checkmark-outline', text: '1 meal per day' },
      { icon: 'checkmark-outline', text: 'Order from 11am to 9pm' },
      { icon: 'checkmark-outline', text: 'Delivery is free' },
      { icon: 'close-outline', text: '' }
    ]
  },
  {
    type: 'complete',
    name: 'Complete',
    price: '649',
    mealCost: '11',
    features: [
      { icon: 'checkmark-outline', text: '2 meals per day' },
      { icon: 'checkmark-outline', text: 'Order 24/7' },
      { icon: 'checkmark-outline', text: 'Delivery is free' },
      { icon: 'checkmark-outline', text: 'Get access to latest recipes' }
    ]
  }
];

function PricingPlans() {
  return (
    <div className="PricingPlans">
      <PricingCard
        title="Pricing"
        heading="Eating well without breaking the bank"
        plans={plans}
      />
    </div>
  );
}

export default PricingPlans;
