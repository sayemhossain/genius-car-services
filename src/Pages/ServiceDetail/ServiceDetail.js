import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="text-center" style={{ height: "80vh" }}>
      <h5 className="my-5">You are about to book: {service.name}</h5>
      <Link to="/checkout">
        <button className="btn btn-primary">CheckOut</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
