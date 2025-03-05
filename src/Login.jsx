import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username: formData.username,
        password: formData.password,
      });
      toast("Selamat datang " + formData.username);
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/");
      //   navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username: </label>
        <input
          type="text"
          id="name"
          onChange={(event) => {
            setFormData({
              ...formData,
              username: event.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          onChange={(event) => {
            setFormData({
              ...formData,
              password: event.target.value,
            });
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
