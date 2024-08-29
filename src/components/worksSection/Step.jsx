import React from 'react';

const Step = ({ number, title, description, imgSrc, imgAlt }) => {
  return (
    <>
      <div className="step-text-box">
        <p className="step-number">{number}</p>
        <h3 className="heading-tertiary">{title}</h3>
        <p className="step-description">{description}</p>
      </div>
      <div className="step-img-box">
        <img src={imgSrc} className="step-img" alt={imgAlt} />
      </div>
    </>
  );
};

export default Step;
