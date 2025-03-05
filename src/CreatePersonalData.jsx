import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const CreatePersonalData = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    try {
      axios.post("http://localhost:3000/personaldata", {
        name: formData.name,
        email: formData.email,
      });
      toast("Submit data berhasil untuk " + formData.name);
      navigate("/personalData");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={(event) => {
            setFormData({
              ...formData,
              name: event.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          onChange={(event) => {
            setFormData({
              ...formData,
              email: event.target.value,
            });
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default CreatePersonalData;
