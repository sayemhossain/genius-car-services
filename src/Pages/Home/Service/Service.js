import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <p>{price}</p>
      <h2>Name: {name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Service;
