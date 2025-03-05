import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const UpdatePersonalData = () => {
  let { id } = useParams();
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `http://localhost:3000/personaldata/${id}`
        );
        setPersonalData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      axios.put("http://localhost:3000/personaldata/" + id, {
        name: personalData.name,
        email: personalData.email,
      });
      toast("Update data berhasil untuk " + personalData.name);
      setTimeout(() => {
        navigate("/personalData");
      }, 1000);
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
            setPersonalData({
              ...personalData,
              name: event.target.value,
            });
          }}
          value={personalData.name}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          onChange={(event) => {
            setPersonalData({
              ...personalData,
              email: event.target.value,
            });
          }}
          value={personalData.email}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UpdatePersonalData;
