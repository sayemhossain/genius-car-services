import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div style={{ height: "90vh" }} className="w-50 mx-auto">
      <h3 className="text-center my-5">Please add a service</h3>

      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Enter name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Add a description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Enter Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Photo url"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
