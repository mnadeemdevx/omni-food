import React from 'react';
import Step from './Step'; 
import Screen1 from '../../assets/app/app-screen-1.png';
import Screen2 from '../../assets/app/app-screen-2.png'; 
import Screen3 from '../../assets/app/app-screen-3.png'; 
import './Steps.css';

const stepsData = [
  {
    number: '01',
    title: 'Tell us what you like (and what not)',
    description: 'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
    imgSrc: Screen1, 
    imgAlt: 'iPhone app preferences selection screen',
  },
  {
    number: '02',
    title: 'Approve your weekly meal plan',
    description: 'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
    imgSrc: Screen2,
    imgAlt: 'iPhone app meal approving plan screen',
  },
  {
    number: '03',
    title: 'Receive meals at convenient time',
    description: 'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
    imgSrc: Screen3,
    imgAlt: 'iPhone app delivery screen',
  },
];

const Steps = () => {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container">
        {stepsData.map((step, index) => (
          <Step
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            imgSrc={step.imgSrc}
            imgAlt={step.imgAlt}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Steps;
