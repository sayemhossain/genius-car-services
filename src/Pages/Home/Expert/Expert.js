import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div
      className="card col-12 col-md-6 col-lg-4 mx-auto my-3"
      style={{ width: "18rem" }}
    >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          iste molestias porro? Autem, labore?
        </p>
        <a href="#" className="btn btn-primary">
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Expert;
