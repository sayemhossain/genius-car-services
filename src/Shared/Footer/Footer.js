import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center bg-dark py-5">
      <p className="text-white">
        <small>@Copyright | {year}</small>
      </p>
    </footer>
  );
};

export default Footer;
