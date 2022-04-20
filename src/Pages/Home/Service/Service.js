import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <p>{price}</p>
      <h2>Name: {name}</h2>
      <p>{description}</p>
      <button
        onClick={() => navigateToServiceDetails(id)}
        className="btn btn-primary"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
