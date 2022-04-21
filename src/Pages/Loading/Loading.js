import React from "react";

const Loading = () => {
  return (
    <div
      className="spinner-border text-primary d-flex align-items-center justify-content-center"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
