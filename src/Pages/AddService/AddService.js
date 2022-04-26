import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div style={{ height: "90vh" }} className="w-50 mx-auto">
      <h3>Please add a service</h3>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Enter name"
          {...register("Name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Add a description"
          {...register("descriotion")}
        />
        <input
          className="mb-2"
          placeholder="Enter Price"
          type="number"
          {...register("price")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
