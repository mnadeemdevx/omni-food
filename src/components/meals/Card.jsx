import React from 'react';
import { FaFire, FaUtensils, FaStar } from 'react-icons/fa6';

const Card = ({ imgSrc, altText, tags, title, calories, nutriScore, rating }) => {
  return (
    <div className="meal">
      <img src={imgSrc} className="meal-img" alt={altText} />
      <div className="meal-content">
        <div className="meal-tags">
          {tags.map((tag, index) => (
            <span key={index} className={`tag tag--${tag.toLowerCase()}`}>{tag}</span>
          ))}
        </div>
        <p className="meal-title">{title}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <FaFire className="meal-icon" />
            <span><strong>{calories}</strong> calories</span>
          </li>
          <li className="meal-attribute">
            <FaUtensils className="meal-icon" />
            <span>NutriScore &reg; <strong>{nutriScore}</strong></span>
          </li>
          <li className="meal-attribute">
            <FaStar className="meal-icon" />
            <span><strong>{rating.score}</strong> rating ({rating.reviews})</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
