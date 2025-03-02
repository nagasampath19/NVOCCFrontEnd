import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenValid } from "../utils/jwt";
import "../css/App.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!isTokenValid(token)) {
      navigate("/"); // Redirect to login if token is invalid or expired
    }
  }, [navigate]);

  return (
    <div className="App">
      <div className="main-layout">
        <main className="container">
          <h1>Welcome</h1>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;