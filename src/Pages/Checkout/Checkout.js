import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useServiceDetails from "../../hooks/useServiceDetails";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);
  console.log(user);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        alert("Your order is booked..!");
        e.target.reset();
      }
    });
  };
  return (
    <div className="w-50 mx-auto my-5" style={{ minHeight: "70vh" }}>
      <h4>Please Order:{service.name}</h4>
      <form action="" onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          id=""
          value={user.displayName}
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          id=""
          value={user.email}
          placeholder="Enter email"
          required
          disabled
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          id=""
          value={service.name}
          placeholder="Enter service name"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          id=""
          placeholder="Enter your address"
          required
          autoCapitalize="off"
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
