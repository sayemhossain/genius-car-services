import React from "react";
import expert1 from "../../../Img/experts/expert-1.jpg";
import expert2 from "../../../Img/experts/expert-2.jpg";
import expert3 from "../../../Img/experts/expert-3.jpg";
import expert4 from "../../../Img/experts/expert-4.jpg";
import expert5 from "../../../Img/experts/expert-5.jpg";
import expert6 from "../../../Img/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "Will Smith", img: expert1 },
    { id: 2, name: "Chris Rock", img: expert2 },
    { id: 3, name: "Dwayne Mack", img: expert3 },
    { id: 4, name: "Jhon Snow", img: expert4 },
    { id: 5, name: "Strak Mello", img: expert5 },
    { id: 6, name: "Stiven Team", img: expert6 },
  ];
  return (
    <div className="container" id="experts">
      <h2 className="my-5 text-center text-uppercase">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
