import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "./context/AuthContext";

const WorkExperience = () => {
  const { count } = useContext(AuthContext);
  console.log(count)
  return (
    <div>
      <p>Work Experience</p>
      <br />
      <p>
        Bekerja sebagai Middle System Analyst di Bank Syariah Indonesia (BSI)
        sejak Juli 2024, bertanggung jawab dalam penyusunan risk register dan
        pemantauan risiko pada BYOND (Mobile Banking Superapps). Sebelumnya,
        bekerja sebagai System Analyst di PT Vesperia Global Merdeka
        (2023-2024), mengelola analisis sistem untuk berbagai proyek, termasuk
        e-commerce dan platform keuangan. Memiliki pengalaman sebagai Front-End
        Developer di Teman Startup (2022-2023), mengembangkan fitur web
        menggunakan React.js dan Next.js. Juga pernah menjadi asisten dosen di
        Universitas Indonesia untuk mata kuliah *IS Analysis & Design* dan *Java
        Programming*.
      </p>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/study">Study</Link>
      <br />
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default WorkExperience;
