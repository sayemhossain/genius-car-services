import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  return (
    <div className="w-50 mx-auto my-5" style={{ minHeight: "70vh" }}>
      <h4>Please Order:{service.name}</h4>
      <form action="">
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          id=""
          placeholder="Name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          id=""
          placeholder="Enter email"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          id=""
          placeholder="Enter service name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          id=""
          placeholder="Enter your address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          id=""
          placeholder="Phone number"
          required
        />
        <br />
        <input type="submit" value="Place Order" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Checkout;
