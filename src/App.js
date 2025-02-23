import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from "./components/Login";
import ShipperDetails from "./components/ShipperDetails";
import ConsigneeDetails from "./components/ConsigneeDetails";
import NotifyParties from "./components/NotifyParties";
import ShipmentDetails from "./components/ShipmentDetails";
import VesselDetails from "./components/VesselDetails";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import "./css/App.css";
import axios from 'axios';
import { API_URLS } from "./config/urls";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    axios.post(API_URLS.LOGOUT, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      localStorage.removeItem("token");
      navigate("/");
    })
    .catch(error => {
      if(error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        navigate("/shipper-details");
        break;
      case 2:
        navigate("/consignee-details");
        break;
      case 3:
        navigate("/notify-parties");
        break;
      case 4:
        navigate("/shipment-details");
        break;
      case 5:
        navigate("/vessel-details");
        break;
      default:
        navigate("/shipper-details");
    }
  };

  return (
    <div className="App">
      {!isLoginPage && <Header toggleMenu={toggleMenu} handleLogout={handleLogout} />}
      <div className="main-layout">
        {!isLoginPage && <SideMenu showStep={showStep} currentPath={location.pathname} isMenuOpen={isMenuOpen} />}
        <main className="container">
          {children}
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/shipper-details" element={<ShipperDetails />} />
              <Route path="/consignee-details" element={<ConsigneeDetails />} />
              <Route path="/notify-parties" element={<NotifyParties />} />
              <Route path="/shipment-details" element={<ShipmentDetails />} />
              <Route path="/vessel-details" element={<VesselDetails />} />
            </Routes>
          </AppLayout>
      </Router>
    </Provider>
  );
};

export default App;