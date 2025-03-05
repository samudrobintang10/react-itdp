import React from "react";
import { Link } from "react-router";

const Profile = () => {
  return (
    <div>
      <p>Profile</p>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/study">Study</Link>
      <br />
      <Link to="/work">Work</Link>
    </div>
  );
};

export default Profile;
