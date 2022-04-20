import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h5>Welcome to Sercie details:{serviceId}</h5>
    </div>
  );
};

export default ServiceDetail;
