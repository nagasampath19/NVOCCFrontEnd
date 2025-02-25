import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

const SideMenu = ({ showStep, currentPath, isMenuOpen }) => {
  const [isAnchorDataCollapsed, setIsAnchorDataCollapsed] = useState(false);
  const [isBLManagementCollapsed, setIsBLManagementCollapsed] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) => {
    return currentPath === path ? "active" : "";
  };

  const toggleAnchorDataCollapse = () => {
    setIsAnchorDataCollapsed(!isAnchorDataCollapsed);
  };

  const toggleBLManagementCollapse = () => {
    setIsBLManagementCollapsed(!isBLManagementCollapsed);
  };

  return (
    <nav className={`side-menu ${isMenuOpen ? "open" : ""}`}>
      <ul className="tree">
        <li>
          <span onClick={toggleBLManagementCollapse} className="collapsible">
            {isBLManagementCollapsed ? "▶" : "▼"} BL Management
          </span>
          <ul className={`nested ${isBLManagementCollapsed ? "collapsed" : ""}`}>
            <li className={getActiveClass("/enquiry-details")} onClick={() => showStep(12)}>Enquiry</li>
            <li>
              <NavLink to="/selling-rate" className="submenu-item">
                Selling Rates
              </NavLink>
            </li>
            <li>
              <NavLink to="/buying-rate" className="submenu-item">
                Buying Rates
              </NavLink>
            </li>
            <li>
              <NavLink to="/estimation" className="submenu-item">
                Estimation
              </NavLink>
            </li>
            <li className={getActiveClass("/container-release-order")} onClick={() => showStep(13)}>Container Release Order</li>
            <li className={getActiveClass("/export-bl")} onClick={() => showStep(14)}>Export BL</li>
            <li className={getActiveClass("/import-bl")} onClick={() => showStep(15)}>Import BL</li>
            <li className={getActiveClass("/igm-update")} onClick={() => showStep(16)}>IGM Update</li>
            <li className={getActiveClass("/detention")} onClick={() => showStep(17)}>Detention</li>
            <li className={getActiveClass("/detention-proforma")} onClick={() => showStep(18)}>Detention Proforma</li>
            <li>
              Accounts
            </li>
            <li>
              <NavLink to="/sales-invoice" className="submenu-item">
                Sales Invoice
              </NavLink>
            </li>
            <li>
              <NavLink to="/purchase-invoice" className="submenu-item">
                Purchase Invoice
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <span onClick={toggleAnchorDataCollapse} className="collapsible">
            {isAnchorDataCollapsed ? "▶" : "▼"} Anchor Data
          </span>
          <ul className={`nested ${isAnchorDataCollapsed ? "collapsed" : ""}`}>
            <li className={getActiveClass("/shipper-details")} onClick={() => showStep(1)}>Shipper Details</li>
            <li className={getActiveClass("/consignee-details")} onClick={() => showStep(2)}>Consignee Details</li>
            <li className={getActiveClass("/notify-parties")} onClick={() => showStep(3)}>Notify Parties</li>
            <li className={getActiveClass("/vessel-details")} onClick={() => showStep(4)}>Vessel Details</li>
            <li className={getActiveClass("/port-details")} onClick={() => showStep(5)}>Port Details</li>
            <li className={getActiveClass("/package-details")} onClick={() => showStep(6)}>Package Details</li>
            <li className={getActiveClass("/shipping-line-details")} onClick={() => showStep(7)}>Shipping Line Details</li>
            <li className={getActiveClass("/commodity-details")} onClick={() => showStep(8)}>Commodity Details</li>
            <li className={getActiveClass("/rate-details")} onClick={() => showStep(9)}>Rate Details</li>
            <li className={getActiveClass("/container-details")} onClick={() => showStep(10)}>Container Details</li>
            <li className={getActiveClass("/bank-details")} onClick={() => showStep(11)}>Bank Details</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;