import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenValid } from "../utils/jwt";
import ShipperDetails from "./ShipperDetails";
import ConsigneeDetails from "./ConsigneeDetails";
import NotifyParties from "./NotifyParties";
import ShipmentDetails from "./ShipmentDetails";
import VesselDetails from "./VesselDetails";
import "../css/App.css";

const Dashboard = () => {
  const [currentStep, setCurrentStep] = useState(1); // Initial state set to 1
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!isTokenValid(token)) {
      navigate("/"); // Redirect to login if token is invalid or expired
    }
  }, [navigate]);

  const nextStep = (step) => {
    if (step < 5) {
      setCompletedSteps((prev) => new Set([...prev, step]));
      setCurrentStep(step + 1);
    }
  };

  const prevStep = (step) => {
    if (step > 1) {
      setCurrentStep(step - 1);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Header is now included in App.js */}
      <div className="main-layout">
        {/* SideMenu is now included in App.js */}
        <main className={`container ${isMenuOpen ? "menu-open" : ""}`}>
          {/* Remove any duplicate titles */}
          {currentStep === 1 && <ShipperDetails nextStep={nextStep} />}
          {currentStep === 2 && <ConsigneeDetails nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 3 && <NotifyParties nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 4 && <ShipmentDetails nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 5 && <VesselDetails prevStep={prevStep} />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;