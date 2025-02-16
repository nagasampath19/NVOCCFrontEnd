import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SideMenu = ({ showStep, currentPath, isMenuOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) => {
    return currentPath === path ? "active" : "";
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`side-menu ${isMenuOpen ? "open" : ""}`}>
      <ul className="tree">
        <li>
          <span onClick={toggleCollapse} className="collapsible">
            {isCollapsed ? "▶" : "▼"} BL Management
          </span>
          <ul className={`nested ${isCollapsed ? "collapsed" : ""}`}>
            <li className={getActiveClass("/shipper-details")} onClick={() => showStep(1)}>Shipper Details</li>
            <li className={getActiveClass("/consignee-details")} onClick={() => showStep(2)}>Consignee Details</li>
            <li className={getActiveClass("/notify-parties")} onClick={() => showStep(3)}>Notify Parties</li>
            <li className={getActiveClass("/shipment-details")} onClick={() => showStep(4)}>Shipment Details</li>
            <li className={getActiveClass("/vessel-details")} onClick={() => showStep(5)}>Vessel Details</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;