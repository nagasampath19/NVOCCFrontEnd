import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import Login from "./components/Login";
import ShipperDetails from "./components/AnchorData/ShipperDetails";
import ConsigneeDetails from "./components/AnchorData/ConsigneeDetails";
import NotifyParties from "./components/AnchorData/NotifyParties";
import VesselDetails from "./components/AnchorData/VesselDetails";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import "./css/App.css"; // Ensure this does not import ShipperDetails.css
import axios from 'axios';
import { API_URLS } from "./config/urls";
import { resetState } from './redux/actions/authActions';
import PortDetails from "./components/AnchorData/PortDetails";
import PackageDetails from "./components/AnchorData/PackageDetails";
import ShippingLineDetails from "./components/AnchorData/ShippingLineDetails";
import CommodityDetails from "./components/AnchorData/CommodityDetails";
import RateDetails from "./components/AnchorData/RateDetails";
import ContainerDetails from "./components/AnchorData/ContainerDetails";
import BankDetails from "./components/AnchorData/BankDetails";
import EnquiryDetails from "./components/MainComponents/EnquiryDetails";
import SellingRate from "./components/MainComponents/SellingRate";
import BuyingRate from "./components/MainComponents/BuyingRate";
import Estimation from "./components/MainComponents/Estimation";
import ContainerReleaseOrder from "./components/MainComponents/ContainerReleaseOrder";
import ExportBL from "./components/MainComponents/ExportBL";
import ImportBL from "./components/MainComponents/ImportBL";
import IGMUpdate from "./components/MainComponents/IGMUpdate";
import Detention from "./components/MainComponents/Detention";
import DetentionProforma from "./components/MainComponents/DetentionProforma";
import SalesInvoice from "./components/MainComponents/SalesInvoice";
import PurchaseInvoice from "./components/MainComponents/PurchaseInvoice";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

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
        navigate("/vessel-details");
        break;
      case 5:
        navigate("/port-details");
        break;
      case 6:
        navigate("/package-details");
        break;
      case 7:
        navigate("/shipping-line-details");
        break;
      case 8:
        navigate("/commodity-details");
        break;
      case 9:
        navigate("/rate-details");
        break;
      case 10:
        navigate("/container-details");
        break;
      case 11:
        navigate("/bank-details");
        break;
      case 12:
        navigate("/enquiry-details");
        break;
      case 13:
        navigate("/container-release-order");
        break
      case 14:
        navigate("/export-bl");
        break;
      case 15:
        navigate("/import-bl");
        break;
      case 16:
        navigate("/igm-update");
        break;
      case 17:
        navigate("/detention");
        break;
      case 18:
          navigate("/detention-proforma");
          break;
      case 19:
            navigate("/sales-invoice");
            break;  
      case 20:
            navigate("/purchase-invoice");
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
            <Route path="/vessel-details" element={<VesselDetails />} />
            <Route path="/port-details" element={<PortDetails />} />
            <Route path="/package-details" element={<PackageDetails />} />
            <Route path="/shipping-line-details" element={<ShippingLineDetails />} />
            <Route path="/commodity-details" element={<CommodityDetails />} />
            <Route path="/rate-details" element={<RateDetails />} />
            <Route path="/container-details" element={<ContainerDetails />} />
            <Route path="/bank-details" element={<BankDetails />} />
            <Route path="/enquiry-details" element={<EnquiryDetails />} />
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
          </Routes>
        </AppLayout>
      </Router>
    </Provider>
  );
};

export default App;