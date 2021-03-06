import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetails = (_id) => {
    navigate(`/service/${_id}`);
  };

  return (
    <div className="service-container card">
      <img className="mx-auto" src={img} alt="" />
      <p className="text-danger fw-bold mt-2">{price}</p>
      <h4 className="text-primary">{name}</h4>
      <p>
        {description.length > 100
          ? description.slice(0, 150) + "..."
          : description}
      </p>
      <button
        onClick={() => navigateToServiceDetails(_id)}
        className="btn btn-primary"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
