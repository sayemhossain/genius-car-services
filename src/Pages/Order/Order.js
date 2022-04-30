import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, []);
  return (
    <div style={{ minHeight: "70vh" }}>
      <h4>Your orders: {orders.length}</h4>
    </div>
  );
};

export default Order;
