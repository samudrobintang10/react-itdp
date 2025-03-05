import React from "react";
import { Link } from "react-router";

const StudyExperience = () => {
  return (
    <div>
      <p>Study Experience</p>
      <br />
      <p>
        Universitas Indonesia – S1 Ilmu Komputer, Konsentrasi Sistem Informasi
        (2019-2023), lulus dengan predikat Cumlaude (IPK 3.65/4.00). Memiliki
        pemahaman mendalam dalam pengembangan perangkat lunak, analisis dan
        desain sistem informasi, manajemen proyek TI, serta audit sistem
        informasi. Menguasai berbagai teknologi pemrograman, termasuk
        pengembangan web dan mobile, basis data, serta penerapan best practices
        dalam rekayasa perangkat lunak. Selain itu, memiliki pengalaman dalam
        implementasi solusi digital dan pengelolaan risiko sistem di berbagai
        proyek akademik dan profesional.
      </p>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/work">Work</Link>
    </div>
  );
};

export default StudyExperience;
