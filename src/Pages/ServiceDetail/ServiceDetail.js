import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  return (
    <div className="text-center" style={{ height: "80vh" }}>
      <h5 className="my-5">You are about to book: {service.name}</h5>
      <Link to={`/checkout/${serviceId}`}>
        <button className="btn btn-primary">CheckOut</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
