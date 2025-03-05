import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailPersonalData = () => {
  let { id } = useParams();
  const [personalData, setPersonalData] = useState({});
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

  return (
    <div>
      <p>{personalData.id}</p>
      <p>{personalData.name}</p>
      <p>{personalData.email}</p>
    </div>
  );
};

export default DetailPersonalData;
