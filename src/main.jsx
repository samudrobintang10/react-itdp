import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Profile from "./Profile.jsx";
import StudyExperience from "./StudyExperience.jsx";
import WorkExperience from "./WorkExperience.jsx";
import PersonalData from "./PersonalData.jsx";
import DetailPersonalData from "./DetailPersonalData.jsx";
import CreatePersonalData from "./CreatePersonalData.jsx";
import { Toaster } from "react-hot-toast";
import UpdatePersonalData from "./UpdatePersonalData.jsx";
import Login from "./Login.jsx";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext.jsx";

const token = localStorage.getItem("accessToken");
if (token) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/study" element={<StudyExperience />} />
          <Route path="/work" element={<WorkExperience />} />
          <Route path="/personaldata" element={<PersonalData />} />
          <Route path="/personaldata/:id" element={<DetailPersonalData />} />
          <Route path="/personaldata/create" element={<CreatePersonalData />} />
          <Route
            path="/personaldata/update/:id"
            element={<UpdatePersonalData />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
