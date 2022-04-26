import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services] = useServices();
  const handleDelete = () => {
    console.log("deleted");
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
    }
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h3 className="mb-4 text-uppercase text-danger">Manage Your Services</h3>
      {services.map((service) => (
        <div key={service._id}>
          <h6>
            {service.name}
            <button
              className="ms-3 btn btn-danger"
              onClick={() => {
                handleDelete(service._id);
              }}
            >
              X
            </button>
          </h6>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
