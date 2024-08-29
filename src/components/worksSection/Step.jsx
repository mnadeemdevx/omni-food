import React from 'react';

const Step = ({ number, title, description, imgSrc, imgAlt, index }) => {
  return (
    <div className={`step-container ${index==1 ? 'step-reverse' : ''}`}
    style={{ marginBottom: index === 0 || index === 1 ? '6.4rem' : '0' }}
    >
      <div className="step-text-box">
        <p className="step-number">{number}</p>
        <h3 className="heading-tertiary">{title}</h3>
        <p className="step-description">{description}</p>
      </div>
      <div className="step-img-box">
        <img src={imgSrc} className="step-img" alt={imgAlt} />
      </div>
    </div>
  );
};

export default Step;
