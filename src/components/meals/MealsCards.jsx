import React from 'react';
import Card from './Card';
import './MealsCards.css';
import { FaCheck } from 'react-icons/fa6'; 

import Meal1 from '../../assets/meals/meal-1.jpg';
import Meal2 from '../../assets/meals/meal-2.jpg';

const mealData = [
  {
    imgSrc: Meal1, 
    altText: 'Japanese Gyozas',
    tags: ['Vegetarian'],
    title: 'Japanese Gyozas',
    calories: 650,
    nutriScore: 74,
    rating: { score: 4.9, reviews: 537 },
  },
  {
    imgSrc: Meal2, 
    altText: 'Avocado Salad',
    tags: ['Vegan', 'Paleo'],
    title: 'Avocado Salad',
    calories: 400,
    nutriScore: 92,
    rating: { score: 4.8, reviews: 441 },
  },
  
];

const dietData = [
  'Vegetarian',
  'Vegan',
  'Pescatarian',
  'Gluten-free',
  'Lactose-free',
  'Keto',
  'Paleo',
  'Low FODMAP',
  'Kid-friendly',
];

const MealsCard = () => {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        {mealData.map((meal, index) => (
          <Card
            key={index}
            imgSrc={meal.imgSrc}
            altText={meal.altText}
            tags={meal.tags}
            title={meal.title}
            calories={meal.calories}
            nutriScore={meal.nutriScore}
            rating={meal.rating}
          />
        ))}

    
        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet:</h3>
          <ul className="list">
            {dietData.map((diet, index) => (
              <li key={index} className="list-item">
                <FaCheck className="list-icon" /> 
                <span>{diet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container all-recipes">
        <a href="#" className="link">See all recipes &rarr;</a>
      </div>
    </section>
  );
};

export default MealsCard;
