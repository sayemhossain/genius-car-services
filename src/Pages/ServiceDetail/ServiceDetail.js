import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className="text-center" style={{ height: "80vh" }}>
      <h5 className="my-5">Welcome to Services details: {serviceId}</h5>
      <Link to="/checkout">
        <button className="btn btn-primary">CheckOut</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
