import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h4>this is services</h4>
      <p>Length: {services.length}</p>
    </div>
  );
};

export default Services;
