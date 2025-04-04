import React, { useState, useEffect } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { API_URLS } from "../config/urls";

const SideMenu = ({ showStep, currentPath, isMenuOpen }) => {
  const [enquiryReferenceID, setEnquiryReferenceID] = useState(null);
  const [sellerRateReferenceID, setSellerRateReferenceID] = useState(null);
  const [buyingRateReferenceID, setBuyingRateReferenceID] = useState(null);
  const [cro_id, setCROId] = useState(null);
  const [crocargo_id, setCROCargoId] = useState(null);
  const [party_id, setParty_id] = useState(null);
  const [port, setPort] = useState(null);
  const [isAnchorDataCollapsed, setIsAnchorDataCollapsed] = useState(false);
  const [isBLManagementCollapsed, setIsBLManagementCollapsed] = useState(false);
  const [isEnquiryCollapsed, setIsEnquiryCollapsed] = useState(false);
  const [isContainerReleaseOrderCollapsed, setIsContainerReleaseOrderCollapsed] = useState(false);
  const [isImportBLCollapsed, setIsImportBLCollapsed] = useState(false);
  const [isAccountsCollapsed, setIsAccountsCollapsed] = useState(false);
  const [isImportAccountsCollapsed, setIsImportAccountsCollapsed] = useState(false);
  const [isExportBLCollapsed, setIsExportBLCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const urls = API_URLS;

  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.user_id;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const enquiryID = queryParams.get("enquiryReferenceID");
    const sellerRateID = queryParams.get("sellerRateReferenceID");
    const buyingRateID = queryParams.get("buyingRateReferenceID");
    const cro_id = queryParams.get("cro_id");
    const crocargo_id = queryParams.get("crocargo_id");
    const party_id = queryParams.get("party_id");
    const port = queryParams.get("port");

    setEnquiryReferenceID(enquiryID !== 'null' ? enquiryID : 0); // Corrected logic
    setSellerRateReferenceID(sellerRateID !== 'null' ? sellerRateID : 0);
    setBuyingRateReferenceID(buyingRateID !== 'null' ? buyingRateID : 0);
    setCROId(cro_id !== 'null' ? cro_id : 0);
    setCROCargoId(crocargo_id !== 'null' ? crocargo_id : 0);
    setParty_id(party_id !== 'null' ? party_id : 0);
    setPort(port !== 'null' ? port : 0);

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
    if (currentPath && (currentPath.startsWith("/enquiry") || currentPath.startsWith("/selling-rate") || currentPath.startsWith("/buying-rate") || currentPath.startsWith("/estimation"))) {
      setIsEnquiryCollapsed(false);
    } else if (currentPath && (currentPath.startsWith("/container-release-order") || currentPath.startsWith("/cargo-details") || currentPath.startsWith("/overseas-agent") || currentPath.startsWith("/party") || currentPath.startsWith("/CROPort") || currentPath.startsWith("/crocontainer-details"))) {
      setIsContainerReleaseOrderCollapsed(false);
    } else if (currentPath && (currentPath.startsWith("/import-bl") || currentPath.startsWith("/importbl-vessel-details") || currentPath.startsWith("/importbl-port-details") || currentPath.startsWith("/importbl-party-details") || currentPath.startsWith("/importbl-shipment-details") || currentPath.startsWith("/hsn-details") || currentPath.startsWith("/importbl-container-details"))) {
      setIsImportBLCollapsed(false);
    } else if (currentPath && (currentPath.startsWith("/export-bl") || currentPath.startsWith("/exportbl-cargo-details") || currentPath.startsWith("/exportbl-overseas-agent") || currentPath.startsWith("/exportbl-port-details") || currentPath.startsWith("/exportbl-vessel-details") || currentPath.startsWith("/exportbl-other-details") || currentPath.startsWith("/exportbl-container-details"))) {
      setIsExportBLCollapsed(false);
    } else if (currentPath && (currentPath.startsWith("/accounts") || currentPath.startsWith("/sales-invoice") || currentPath.startsWith("/purchase-invoice") || currentPath.startsWith("/proforma-invoice") || currentPath.startsWith("/purchase-payment"))) {
      setIsAccountsCollapsed(false);
    } else if (currentPath && (currentPath.startsWith("/import-accounts") || currentPath.startsWith("/sales-fixed-charges") || currentPath.startsWith("/purchase-fixed-charges"))) {
      setIsImportAccountsCollapsed(false);
    } else if (currentPath && (currentPath.startsWith("/anchor-data") || currentPath.startsWith("/shipper-details") || currentPath.startsWith("/consignee-details") || currentPath.startsWith("/notify-parties") || currentPath.startsWith("/vessel-details") || currentPath.startsWith("/vessel-details-search") || currentPath.startsWith("/port-details") || currentPath.startsWith("/port-details-search") || currentPath.startsWith("/package-details") || currentPath.startsWith("/shipping-line-details") || currentPath.startsWith("/commodity-details") || currentPath.startsWith("/rate-details") || currentPath.startsWith("/container-details") || currentPath.startsWith("/bank-details") || currentPath.startsWith("/notify-details-search"))) {
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

  const handleShipperDetailsClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/Shipper/shipperdetailscount`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/shipper-details-search");
      } else {
        navigate("/shipper-details");
      }
    } catch (error) {
      console.error("Error checking shipper details: ", error);
      navigate("/shipper-details");
    }
  };

  const handleConsigneeDetailsClick = async () => {
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/Consignee/consigneedetailscount`, { user_id: userId }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/consignee-details-search");
      } else {
        navigate("/consignee-details");
      }
    } catch (error) {
      console.error("Error checking consignee details: ", error);
      navigate("/consignee-details");
    }
  };

  const handleNotifyDetailsClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/Notify/notifydetailscount`, { user_id: userId }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/notify-details-search");
      } else {
        navigate("/notify-details");
      }
    } catch (error) {
      console.error("Error checking notify details: ", error);
      navigate("/notify-details");
    }
  };

  const handlePackageDetailsClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/packagedetailscount`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/package-details-search");
      } else {
        navigate("/package-details");
      }
    } catch (error) {
      console.error("Error checking package details count: ", error);
      navigate("/package-details");
    }
  };

  const handleShippinglineDetailsClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/shippinglinedetailscount`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/shipping-line-details-search");
      } else {
        navigate("/shipping-line-details");
      }
    } catch (error) {
      console.error("Error checking shippingline details count: ", error);
      navigate("/shipping-line-details");
    }
  };

  const handleCommodityDetailsClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/commoditydetailscount`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/commodity-details-search");
      } else {
        navigate("/commodity-details");
      }
    } catch (error) {
      console.error("Error checking commodity details count: ", error);
      navigate("/commodity-details");
    }
  };

  const handleChargeDetailsClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/Anchordata/Charges/Chargesdetailscount`, { user_id: userId }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/rate-details-search");
      } else {
        navigate("/rate-details");
      }
    } catch (error) {
      console.error("Error checking rate details count: ", error);
      navigate("/rate-details");
    }
  };

  const handleContainerDetailsClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/Container/Containerdetailscount`, { user_id: userId }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.data > 0) {
        navigate("/container-details-search");
      } else {
        navigate("/container-details");
      }
    } catch (error) {
      console.error("Error checking container details count: ", error);
      navigate("/container-details");
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
                  <NavLink to={`/enquiry-search?user_id=${userId}`} className={`submenu-item ${getActiveClass("/enquiry-search")}`} >
                    Enquiries
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/enquiry-details?enquiryReferenceID=${enquiryReferenceID}`} className={`submenu-item ${getActiveClass("/enquiry-details")}`} >
                    New Enquiry
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/selling-rate?enquiryReferenceID=${enquiryReferenceID}`}
                    className={`submenu-item ${getActiveClass("/selling-rate")}`}
                    style={{ pointerEvents: enquiryReferenceID > 0 ? "auto" : "none", opacity: enquiryReferenceID > 0 ? 1 : 0.5 }}
                  >
                    Selling Rates
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/buying-rate?enquiryReferenceID=${enquiryReferenceID}&sellerRateReferenceID=${sellerRateReferenceID}`} className={`submenu-item ${getActiveClass("/buying-rate")}`} style={{ pointerEvents: enquiryReferenceID && sellerRateReferenceID ? "auto" : "none", opacity: enquiryReferenceID && sellerRateReferenceID ? 1 : 0.5 }}>
                    Buying Rates
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/estimation?enquiryReferenceID=${enquiryReferenceID}&sellerRateReferenceID=${sellerRateReferenceID}&buyingRateReferenceID=${buyingRateReferenceID}`} className={`submenu-item ${getActiveClass("/estimation")}`} style={{ pointerEvents: enquiryReferenceID && sellerRateReferenceID && buyingRateReferenceID ? "auto" : "none", opacity: enquiryReferenceID && sellerRateReferenceID && buyingRateReferenceID ? 1 : 0.5 }}>
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
                  <NavLink to={`/container-release-order?cro_id=${cro_id}`} className={`submenu-item ${getActiveClass("/container-release-order")}`}>
                    New CRO
                  </NavLink>
                </li>
                <li>
                <NavLink
                    to={`/cargo-details?cro_id=${cro_id}&crocargo_id=${crocargo_id}`}
                    className={`submenu-item ${getActiveClass("/cargo-details")}`}
                    style={{ pointerEvents: cro_id > 0 && crocargo_id ? "auto" : "none", opacity: cro_id > 0 && crocargo_id ? 1 : 0.5 }}
                    >
                    Cargo Details
                  </NavLink>
                </li>
                <li>
                <NavLink
                    to={`/party?cro_id=${cro_id}&crocargo_id=${crocargo_id}`}
                    className={`submenu-item ${getActiveClass("/party")}`}
                    style={{ pointerEvents: cro_id > 0 && crocargo_id > 0 && party_id ? "auto" : "none", opacity: cro_id > 0 && crocargo_id > 0 && party_id ? 1 : 0.5 }}
                    >
                     Party Details
                  </NavLink>
                </li>
                <li>
                <NavLink
                    to={`/CROPort?cro_id=${cro_id}&crocargo_id=${crocargo_id}`}
                    className={`submenu-item ${getActiveClass("/CROPort")}`}
                    style={{ pointerEvents: cro_id > 0 && crocargo_id > 0 && party_id > 0 && port ? "auto" : "none", opacity: cro_id > 0 && crocargo_id > 0 && party_id > 0 && port ? 1 : 0.5 }}
                    >
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
              <NavLink to="/shipper-details" onClick={handleShipperDetailsClick} className={`submenu-item ${getActiveClass("/shipper-details") || getActiveClass("/shipper-details-search")}`}>
                Shipper Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/consignee-details" onClick={handleConsigneeDetailsClick} className={`submenu-item ${getActiveClass("/consignee-details") || getActiveClass("/consignee-details-search")}`}>
                Consignee Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/notify-parties" onClick={handleNotifyDetailsClick} className={`submenu-item ${getActiveClass("/notify-details") || getActiveClass("/notify-details-search")}`}>
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
              <NavLink to="/package-details" onClick={handlePackageDetailsClick} className={`submenu-item ${getActiveClass("/package-details") || getActiveClass("/package-details-search")}`}>
                Package Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/shipping-line-details" onClick={handleShippinglineDetailsClick} className={`submenu-item ${getActiveClass("/shipping-line-details") || getActiveClass("/shipping-line-details-search")}`}>
                Shipping Line Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/commodity-details" onClick={handleCommodityDetailsClick} className={`submenu-item ${getActiveClass("/commodity-details") || getActiveClass("/commodity-details-search")}`}>
                Commodity Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/rate-details" onClick={handleChargeDetailsClick} className={`submenu-item ${getActiveClass("/rate-details") || getActiveClass("/rate-details-search")}`}>
                Charges
              </NavLink>
            </li>
            <li>
              <NavLink to="/container-details" onClick={handleContainerDetailsClick} className={`submenu-item ${getActiveClass("/container-details") || getActiveClass("/container-details-search")}`}>
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