import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import Login from "./components/Login";
import ShipperDetails from "./components/AnchorData/ShipperDetails";
import ConsigneeDetails from "./components/AnchorData/ConsigneeDetails";
import NotifyParties from "./components/AnchorData/NotifyParties";
import VesselDetails from "./components/AnchorData/VesselDetails";
import ContainerDetails from "./components/AnchorData/ContainerDetails";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import "./css/App.css"; // Ensure this does not import ShipperDetails.css
import axios from 'axios';
import { API_URLS } from "./config/urls";
import { resetState } from './redux/actions/authActions';
import PortDetails from "./components/AnchorData/PortDetails";
import PortDetailsSearch from "./components/AnchorData/PortDetailsSearch";
import PackageDetails from "./components/AnchorData/PackageDetails";
import PackageDetailsSearch from "./components/AnchorData/PackageDetailsSearch";
import ShippingLineDetails from "./components/AnchorData/ShippingLineDetails";
import CommodityDetails from "./components/AnchorData/CommodityDetails";
import RateDetails from "./components/AnchorData/RateDetails";
import CROContainerDetails from "./components/MainComponents/CRO/CROContainerDetails";
import BankDetails from "./components/AnchorData/BankDetails";
import EnquirySearch from "./components/MainComponents/Enquiry/EnquirySearch";
import EnquiryDetails from "./components/MainComponents/Enquiry/EnquiryDetails";
import SellingRate from "./components/MainComponents/Enquiry/SellingRate";
import BuyingRate from "./components/MainComponents/Enquiry/BuyingRate";
import Estimation from "./components/MainComponents/Enquiry/Estimation";
import ContainerReleaseOrder from "./components/MainComponents/CRO/ContainerReleaseOrder";
import ExportBL from "./components/MainComponents/ExportBL";
import ImportBL from "./components/MainComponents/ImportBL";
import IGMUpdate from "./components/MainComponents/IGMUpdate";
import Detention from "./components/MainComponents/Detention";
import DetentionProforma from "./components/MainComponents/DetentionProforma";
import SalesInvoice from "./components/MainComponents/SalesInvoice";
import PurchaseInvoice from "./components/MainComponents/PurchaseInvoice";
import ProformaInvoice from "./components/MainComponents/ProformaInvoice";
import PurchasePayment from "./components/MainComponents/PurchasePayment";
import OtherCharges from "./components/MainComponents/OtherCharges";
import SalesFixedCharges from "./components/MainComponents/SalesFixedCharges";
import PurchaseFixedCharges from "./components/MainComponents/PurchaseFixedCharges";
import CargoDetails from "./components/MainComponents/CRO/CargoDetails";
import CROPort from "./components/MainComponents/CRO/CROPort";
import Party from "./components/MainComponents/CRO/Party";
import ImportBLVesselDetails from "./components/MainComponents/VesselDetails";
import ImportBLPortDetails from "./components/MainComponents/PortDetails";
import ImportBLPartyDetails from "./components/MainComponents/ImportBLPartyDetails";
import ImportBLShipmentDetails from "./components/MainComponents/ImportBLShipmentDetails";
import HSNDetails from "./components/MainComponents/HSNDetails";
import ImportBLContainerDetails from "./components/MainComponents/ImportBLContainerDetails";
import ExportBLCargoDetails from "./components/MainComponents/ExportBLCargoDetails";
import ExportBLOverSeasAgent from "./components/MainComponents/ExportBLOverSeasAgent";
import ExportBLPortDetails from "./components/MainComponents/ExportBLPortDetails";
import ExportBLVesselDetails from "./components/MainComponents/ExportBLVesselDetails";
import ExportBLOtherDetails from "./components/MainComponents/ExportBLOtherDetails";
import ExportBLContainerDetails from "./components/MainComponents/ExportBLContainerDetails";
import Dashboard from "./components/Dashboard";
import VesselDetailsSearch from "./components/AnchorData/VesselDetailsSearch";
import ShipperDetailsSearch from "./components/AnchorData/ShipperDetailsSearch";
import ConsigneeDetailsSearch from "./components/AnchorData/ConsigneeDetailsSearch";
import NotifySearchDetails from "./components/AnchorData/NotifySearchDetails";
import ShippingLineDetailsSearch from "./components/AnchorData/ShippingLineDetailsSearch"; 
import CommodityDetailsSearch from "./components/AnchorData/CommodityDetailsSearch";
import RateSearchDetails from "./components/AnchorData/RateSearchDetails";
import ContainerDetailsSearch from "./components/AnchorData/ContainerDetailsSearch";

const AppLayout = ({ children, enquiryReferenceID }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
      } else {
        try {
          const response = await axios.post(API_URLS.VALIDATE_TOKEN, {}, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (response.status !== 200) {
            navigate("/");
          }
        } catch (error) {
          navigate("/");
        }
      }
    };

    if (!isLoginPage) {
      validateToken();
    }
  }, [isLoginPage, navigate]);

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
        dispatch(resetState());
        navigate("/");
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          dispatch(resetState());
          navigate("/");
        }
      });
  };
  
  return (
    <div className="App">
      {!isLoginPage && <Header toggleMenu={toggleMenu} handleLogout={handleLogout} />}
      <div className="main-layout">
        {!isLoginPage && <SideMenu  currentPath={location.pathname} isMenuOpen={isMenuOpen} />}
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shipper-details" element={<ShipperDetails />} />
            <Route path="/shipper-details-search" element={<ShipperDetailsSearch />} />
            <Route path="/consignee-details" element={<ConsigneeDetails />} />
            <Route path="/consignee-details-search" element={<ConsigneeDetailsSearch />} />
            <Route path="/notify-parties" element={<NotifyParties />} />
            <Route path="/notify-details-search" element={<NotifySearchDetails />} />
            <Route path="/notify-details" element={<NotifyParties />} /> {/* Add this route */}
            <Route path="/vessel-details" element={<VesselDetails />} />
            <Route path="/vessel-details-search" element={<VesselDetailsSearch />} />
            <Route path="/port-details" element={<PortDetails />} />
            <Route path="/port-details-search" element={<PortDetailsSearch />} />
            <Route path="/package-details" element={<PackageDetails />} />
            <Route path="/package-details-search" element={<PackageDetailsSearch />} />
            <Route path="/shipping-line-details" element={<ShippingLineDetails />} />
            <Route path="/shipping-line-details-search" element={<ShippingLineDetailsSearch />} />
            <Route path="/commodity-details" element={<CommodityDetails />} />
            <Route path="/commodity-details-search" element={<CommodityDetailsSearch />} />
            <Route path="/rate-details" element={<RateDetails />} />
            <Route path="/rate-details-search" element={<RateSearchDetails />} />
            <Route path="/container-details" element={<ContainerDetails />} />
            <Route path="/container-details-search" element={<ContainerDetailsSearch />} />
            <Route path="/bank-details" element={<BankDetails />} />
            <Route path="/enquiry-details" element={<EnquiryDetails />} />
            <Route path="/enquiry-search" element={<EnquirySearch />} />
            <Route path="/selling-rate" element={<SellingRate />} />
            <Route path="/buying-rate" element={<BuyingRate />} />
            <Route path="/estimation" element={<Estimation />} />
            <Route path="/container-release-order" element={<ContainerReleaseOrder />} />
            <Route path="/export-bl" element={<ExportBL />} />
            <Route path="/import-bl" element={<ImportBL />} />
            <Route path="/igm-update" element={<IGMUpdate />} />
            <Route path="/detention" element={<Detention />} />
            <Route path="/detention-proforma" element={<DetentionProforma />} />
            <Route path="/sales-invoice" element={<SalesInvoice />} />
            <Route path="/purchase-invoice" element={<PurchaseInvoice />} />
            <Route path="/proforma-invoice" element={<ProformaInvoice />} />
            <Route path="/purchase-payment" element={<PurchasePayment />} />
            <Route path="/other-charges" element={<OtherCharges />} />
            <Route path="/sales-fixed-charges" element={<SalesFixedCharges />} />
            <Route path="/purchase-fixed-charges" element={<PurchaseFixedCharges />} />
            <Route path="/cargo-details" element={<CargoDetails />} />
            <Route path="/CROPort" element={<CROPort />} />
            <Route path="/crocontainer-details" element={<CROContainerDetails />} />
            <Route path="/party" element={<Party />} />
            <Route path="/importbl-vessel-details" element={<ImportBLVesselDetails />} />
            <Route path="/importbl-port-details" element={<ImportBLPortDetails />} />
            <Route path="/importbl-party-details" element={<ImportBLPartyDetails />} />
            <Route path="/importbl-shipment-details" element={<ImportBLShipmentDetails />} />
            <Route path="/hsn-details" element={<HSNDetails />} />
            <Route path="/importbl-container-details" element={<ImportBLContainerDetails />} />
            <Route path="/exportbl-cargo-details" element={<ExportBLCargoDetails />} />
            <Route path="/exportbl-overseas-agent" element={<ExportBLOverSeasAgent />} />
            <Route path="/exportbl-port-details" element={<ExportBLPortDetails />} />
            <Route path="/exportbl-vessel-details" element={<ExportBLVesselDetails />} />
            <Route path="/exportbl-other-details" element={<ExportBLOtherDetails />} />
            <Route path="/exportbl-container-details" element={<ExportBLContainerDetails />} />
          </Routes>
        </AppLayout>
      </Router>
    </Provider>
  );
};

export default App;