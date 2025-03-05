import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [count, setCount] = useState(0);
  const isAuthenticated = !!localStorage.getItem("accessToken");
  const path = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (path.pathname !== "/login" && !isAuthenticated) {
        navigate("/login");
    }
  }, [path]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, count, setCount }}>{children}</AuthContext.Provider>
  );
};
