import React, { useState, useEffect } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "../config/urls";

const SideMenu = ({ showStep, currentPath, isMenuOpen }) => {
  const [isAnchorDataCollapsed, setIsAnchorDataCollapsed] = useState(false);
  const [isBLManagementCollapsed, setIsBLManagementCollapsed] = useState(false);
  const [isEnquiryCollapsed, setIsEnquiryCollapsed] = useState(false); // New state for Enquiry
  const [isContainerReleaseOrderCollapsed, setIsContainerReleaseOrderCollapsed] = useState(false); // New state for Container Release Order
  const [isImportBLCollapsed, setIsImportBLCollapsed] = useState(false); // New state for Import BL
  const [isAccountsCollapsed, setIsAccountsCollapsed] = useState(false); // New state for Accounts
  const [isImportAccountsCollapsed, setIsImportAccountsCollapsed] = useState(false); // New state for Import Accounts
  const [isExportBLCollapsed, setIsExportBLCollapsed] = useState(false); // New state for Export BL
  const location = useLocation();
  const navigate = useNavigate();
  const urls = API_URLS;

  useEffect(() => {
    // Collapse all menus except BL Management on login
    setIsAnchorDataCollapsed(true);
    setIsBLManagementCollapsed(false);
    setIsEnquiryCollapsed(true);
    setIsContainerReleaseOrderCollapsed(true);
    setIsImportBLCollapsed(true);
    setIsAccountsCollapsed(true);
    setIsImportAccountsCollapsed(true);
    setIsExportBLCollapsed(true);
  }, [location.pathname]);

  useEffect(() => {
    // Expand the corresponding node when a link is clicked
    if (currentPath.startsWith("/enquiry") || currentPath.startsWith("/selling-rate") || currentPath.startsWith("/buying-rate") || currentPath.startsWith("/estimation")) {
      setIsEnquiryCollapsed(false);
    } else if (currentPath.startsWith("/container-release-order") || currentPath.startsWith("/cargo-details") || currentPath.startsWith("/overseas-agent") || currentPath.startsWith("/party") || currentPath.startsWith("/CROPort") || currentPath.startsWith("/crocontainer-details")) {
      setIsContainerReleaseOrderCollapsed(false);
    } else if (currentPath.startsWith("/import-bl") || currentPath.startsWith("/importbl-vessel-details") || currentPath.startsWith("/importbl-port-details") || currentPath.startsWith("/importbl-party-details") || currentPath.startsWith("/importbl-shipment-details") || currentPath.startsWith("/hsn-details") || currentPath.startsWith("/importbl-container-details")) {
      setIsImportBLCollapsed(false);
    } else if (currentPath.startsWith("/export-bl") || currentPath.startsWith("/exportbl-cargo-details") || currentPath.startsWith("/exportbl-overseas-agent") || currentPath.startsWith("/exportbl-port-details") || currentPath.startsWith("/exportbl-vessel-details") || currentPath.startsWith("/exportbl-other-details") || currentPath.startsWith("/exportbl-container-details")) {
      setIsExportBLCollapsed(false);
    } else if (currentPath.startsWith("/accounts") || currentPath.startsWith("/sales-invoice") || currentPath.startsWith("/purchase-invoice") || currentPath.startsWith("/proforma-invoice") || currentPath.startsWith("/purchase-payment")) {
      setIsAccountsCollapsed(false);
    } else if (currentPath.startsWith("/import-accounts") || currentPath.startsWith("/sales-fixed-charges") || currentPath.startsWith("/purchase-fixed-charges")) {
      setIsImportAccountsCollapsed(false);
    } else if (currentPath.startsWith("/anchor-data") || currentPath.startsWith("/shipper-details") || currentPath.startsWith("/consignee-details") || currentPath.startsWith("/notify-parties") || currentPath.startsWith("/vessel-details") || currentPath.startsWith("/vessel-details-search") || currentPath.startsWith("/port-details") || currentPath.startsWith("/port-details-search") || currentPath.startsWith("/package-details") || currentPath.startsWith("/shipping-line-details") || currentPath.startsWith("/commodity-details") || currentPath.startsWith("/rate-details") || currentPath.startsWith("/container-details") || currentPath.startsWith("/bank-details")) {
      setIsAnchorDataCollapsed(false);
    }
  }, [currentPath]);

  const getActiveClass = (path) => {
    return currentPath === path ? "active" : "";
  };

  const toggleAnchorDataCollapse = () => {
    setIsAnchorDataCollapsed(!isAnchorDataCollapsed);
  };

  const toggleBLManagementCollapse = () => {
    setIsBLManagementCollapsed(!isBLManagementCollapsed);
  };

  const toggleEnquiryCollapse = () => {
    setIsEnquiryCollapsed(!isEnquiryCollapsed);
  };

  const toggleContainerReleaseOrderCollapse = () => {
    setIsContainerReleaseOrderCollapsed(!isContainerReleaseOrderCollapsed);
  };

  const toggleImportBLCollapse = () => {
    setIsImportBLCollapsed(!isImportBLCollapsed);
  };

  const toggleAccountsCollapse = () => {
    setIsAccountsCollapsed(!isAccountsCollapsed);
  };

  const toggleImportAccountsCollapse = () => {
    setIsImportAccountsCollapsed(!isImportAccountsCollapsed);
  };

  const toggleExportBLCollapse = () => {
    setIsExportBLCollapsed(!isExportBLCollapsed);
  };

  const handlePortDetailsClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/portdetailscount`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/port-details-search");
      } else {
        navigate("/port-details");
      }
    } catch (error) {
      console.error("Error checking port details: ", error);
      navigate("/port-details");
    }
  };
  const handleVesselDetailsClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/vessledetailscount`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/vessel-details-search");
      } else {
        navigate("/vessel-details");
      }
    } catch (error) {
      console.error("Error checking port details: ", error);
      navigate("/vessel-details");
    }
  };

  return (
    <nav className={`side-menu ${isMenuOpen ? "open" : ""}`}>
      <ul className="tree">
        <li>
          <span onClick={toggleBLManagementCollapse} className="collapsible" style={{ cursor: "pointer" }}>
            {isBLManagementCollapsed ? "▶" : "▼"} BL Management
          </span>
          <ul className={`nested ${isBLManagementCollapsed ? "collapsed" : ""}`}>
            <li>
              <span onClick={toggleEnquiryCollapse} className="collapsible" style={{ fontWeight: "normal", cursor: "pointer" }}>
                {isEnquiryCollapsed ? "▶" : "▼"} Enquiry
              </span>
              <ul className={`nested ${isEnquiryCollapsed ? "collapsed" : ""}`}>
                <li>
                  <NavLink to="/enquiry-details" className={`submenu-item ${getActiveClass("/enquiry-details")}`}>
                    General Enquiry
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/selling-rate" className={`submenu-item ${getActiveClass("/selling-rate")}`}>
                    Selling Rates
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/buying-rate" className={`submenu-item ${getActiveClass("/buying-rate")}`}>
                    Buying Rates
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/estimation" className={`submenu-item ${getActiveClass("/estimation")}`}>
                    Estimation
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <span onClick={toggleContainerReleaseOrderCollapse} className="collapsible" style={{ fontWeight: "normal", cursor: "pointer" }}>
                {isContainerReleaseOrderCollapsed ? "▶" : "▼"} CRO
              </span>
              <ul className={`nested ${isContainerReleaseOrderCollapsed ? "collapsed" : ""}`}>
                <li>
                  <NavLink to="/container-release-order" className={`submenu-item ${getActiveClass("/container-release-order")}`}>
                    General Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cargo-details" className={`submenu-item ${getActiveClass("/cargo-details")}`}>
                    Cargo Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/overseas-agent" className={`submenu-item ${getActiveClass("/overseas-agent")}`}>
                    Overseas Agent
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/party" className={`submenu-item ${getActiveClass("/party")}`}>
                    Party Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/CROPort" className={`submenu-item ${getActiveClass("/CROPort")}`}>
                    Port Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/crocontainer-details" className={`submenu-item ${getActiveClass("/crocontainer-details")}`}>
                    Container Details
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <span onClick={toggleImportBLCollapse} className="collapsible" style={{ fontWeight: "normal", cursor: "pointer" }}>
                {isImportBLCollapsed ? "▶" : "▼"} Import BL
              </span>
              <ul className={`nested ${isImportBLCollapsed ? "collapsed" : ""}`}>
                <li>
                  <NavLink to="/import-bl" className={`submenu-item ${getActiveClass("/import-bl")}`}>
                    General Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/importbl-vessel-details" className={`submenu-item ${getActiveClass("/importbl-vessel-details")}`}>
                    Vessel Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/importbl-port-details" className={`submenu-item ${getActiveClass("/importbl-port-details")}`}>
                    Port Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/importbl-party-details" className={`submenu-item ${getActiveClass("/importbl-party-details")}`}>
                    Party Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/importbl-shipment-details" className={`submenu-item ${getActiveClass("/importbl-shipment-details")}`}>
                    Shipment Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hsn-details" className={`submenu-item ${getActiveClass("/hsn-details")}`}>
                    HSN Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/importbl-container-details" className={`submenu-item ${getActiveClass("/importbl-container-details")}`}>
                    Container Details
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <span onClick={toggleExportBLCollapse} className="collapsible" style={{ fontWeight: "normal", cursor: "pointer" }}>
                {isExportBLCollapsed ? "▶" : "▼"} Export BL
              </span>
              <ul className={`nested ${isExportBLCollapsed ? "collapsed" : ""}`}>
                <li>
                  <NavLink to="/export-bl" className={`submenu-item ${getActiveClass("/export-bl")}`}>
                    General Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/exportbl-cargo-details" className={`submenu-item ${getActiveClass("/exportbl-cargo-details")}`}>
                    Cargo Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/exportbl-overseas-agent" className={`submenu-item ${getActiveClass("/exportbl-overseas-agent")}`}>
                    OverSeas Agent
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/exportbl-port-details" className={`submenu-item ${getActiveClass("/exportbl-port-details")}`}>
                    Port Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/exportbl-vessel-details" className={`submenu-item ${getActiveClass("/exportbl-vessel-details")}`}>
                    Vessel Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/exportbl-other-details" className={`submenu-item ${getActiveClass("/exportbl-other-details")}`}>
                    Other Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/exportbl-container-details" className={`submenu-item ${getActiveClass("/exportbl-container-details")}`}>
                    Container Details
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={getActiveClass("/other-charges")} onClick={() => showStep(22)}>Other Charges</li>
            <li className={getActiveClass("/igm-update")} onClick={() => showStep(16)}>IGM Update</li>
            <li className={getActiveClass("/detention")} onClick={() => showStep(17)}>Detention</li>
            <li className={getActiveClass("/detention-proforma")} onClick={() => showStep(18)}>Detention Proforma</li>
            <li>
              <span onClick={toggleAccountsCollapse} className="collapsible" style={{ fontWeight: "normal", cursor: "pointer" }}>
                {isAccountsCollapsed ? "▶" : "▼"} Accounts
              </span>
              <ul className={`nested ${isAccountsCollapsed ? "collapsed" : ""}`}>
                <li>
                  <NavLink to="/sales-invoice" className={`submenu-item ${getActiveClass("/sales-invoice")}`}>
                    Sales Invoice
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/purchase-invoice" className={`submenu-item ${getActiveClass("/purchase-invoice")}`}>
                    Purchase Invoice
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/proforma-invoice" className={`submenu-item ${getActiveClass("/proforma-invoice")}`}>
                    Proforma Invoice
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/purchase-payment" className={`submenu-item ${getActiveClass("/purchase-payment")}`}>
                    Purchase Payment
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <span onClick={toggleImportAccountsCollapse} className="collapsible" style={{ fontWeight: "normal", cursor: "pointer" }}>
                {isImportAccountsCollapsed ? "▶" : "▼"} Import Fixed Charges
              </span>
              <ul className={`nested ${isImportAccountsCollapsed ? "collapsed" : ""}`}>
                <li>
                  <NavLink to="/sales-fixed-charges" className={`submenu-item ${getActiveClass("/sales-fixed-charges")}`}>
                    Sales Charges
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/purchase-fixed-charges" className={`submenu-item ${getActiveClass("/purchase-fixed-charges")}`}>
                    Purchase Charges
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span onClick={toggleAnchorDataCollapse} className="collapsible" style={{ cursor: "pointer" }}>
            {isAnchorDataCollapsed ? "▶" : "▼"} Anchor Data
          </span>
          <ul className={`nested ${isAnchorDataCollapsed ? "collapsed" : ""}`}>
            <li>
              <NavLink to="/shipper-details" className={`submenu-item ${getActiveClass("/shipper-details")}`}>
                Shipper Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/consignee-details" className={`submenu-item ${getActiveClass("/consignee-details")}`}>
                Consignee Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/notify-parties" className={`submenu-item ${getActiveClass("/notify-parties")}`}>
                Notify Parties
              </NavLink>
            </li>
            <li>
              <NavLink to="/vessel-details" onClick={handleVesselDetailsClick} className={`submenu-item ${getActiveClass("/vessel-details") || getActiveClass("/vessel-details-search")}`}>
                Vessel Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/port-details" onClick={handlePortDetailsClick} className={`submenu-item ${getActiveClass("/port-details") || getActiveClass("/port-details-search")}`}>
                Port Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/package-details" className={`submenu-item ${getActiveClass("/package-details")}`}>
                Package Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/shipping-line-details" className={`submenu-item ${getActiveClass("/shipping-line-details")}`}>
                Shipping Line Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/commodity-details" className={`submenu-item ${getActiveClass("/commodity-details")}`}>
                Commodity Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/rate-details" className={`submenu-item ${getActiveClass("/rate-details")}`}>
                Rate Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/container-details" className={`submenu-item ${getActiveClass("/container-details")}`}>
                Container Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/bank-details" className={`submenu-item ${getActiveClass("/bank-details")}`}>
                Bank Details
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;