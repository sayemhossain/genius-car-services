import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, img, description, price } = props.service;
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
