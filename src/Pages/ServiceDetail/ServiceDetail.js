import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h5>Welcome to Sercie details: {serviceId}</h5>
      <Link to="/checkout">
        <button className="btn btn-primary">CheckOut</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
