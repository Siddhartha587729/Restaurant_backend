import React from 'react';

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
