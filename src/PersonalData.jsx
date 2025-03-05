import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const PersonalData = () => {
  const [personalData, setPersonalData] = useState([]);

  const token = localStorage.getItem("accessToken");

  const navigate = useNavigate();
  function handleDelete(id, name) {
    try {
      axios.delete("http://localhost:3000/personaldata/" + id);
      toast("Delete data berhasil untuk " + name);

      setPersonalData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/personaldata");
        setPersonalData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {personalData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        personalData.map((data, index) => (
          <div key={index + 1}>
            <Link to={`/personaldata/${data.id}`}>{data.name}</Link>{" "}
            <Link to={`/personaldata/update/${data.id}`}>Edit</Link>{" "}
            <button onClick={() => handleDelete(data.id, data.name)}>
              Delete
            </button>
          </div>
        ))
      )}
      <Link to="/personaldata/create">Tambah Personal Data</Link>
    </div>
  );
};

export default PersonalData;
