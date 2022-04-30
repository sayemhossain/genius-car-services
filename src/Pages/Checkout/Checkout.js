import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  return (
    <div>
      <h4>Please Order:{service.name}</h4>
    </div>
  );
};

export default Checkout;
