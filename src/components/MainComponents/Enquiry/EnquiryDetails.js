import React, { useState, useEffect } from "react";
import SearchableSelect from "../../Common/SearchableSelect";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { API_URLS } from "../../../config/urls";
import ValidationPopup from "../../Common/ValidationPopup";
import { useLocation, useNavigate } from "react-router-dom";
import { allowOnlyNumbers } from "../../../utils/commonUtils";

function formatDate(dateString) {
  const todaydate = new Date(dateString);
  const today = String(todaydate.getDate()).padStart(2, '0');
  const thismonth = String(todaydate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const thisyear = todaydate.getFullYear();
  return `${thisyear}-${thismonth}-${today}`;
}

const EnquiryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [enquiryReferenceID, setEnquiryReferenceID] = useState("");
  const [enquiryDate, setEnquiryDate] = useState("");
  const [portOfDischarge, setPortOfDischarge] = useState("Select");
  const [portOfLoding, setportOfLoding] = useState("Select");
  const [placeOfReceipt, setPlaceOfReceipt] = useState("Select");
  const [placeOfDelivery, setPlaceOfDelivery] = useState("Select");
  const [shipper, setShipper] = useState("Select");
  const [contactDetails, setContactDetails] = useState("");
  const [freightTerms, setFreightTerms] = useState("Select");
  const [commodityDesc, setCommodityDesc] = useState("");
  const [grossWeight, setGrossWeight] = useState("");
  const [cbm, setCbm] = useState("");
  const [chargeableWeight, setChargeableWeight] = useState("");
  const [kgsMts, setKgsMts] = useState("Select");
  const [shipmentType, setShipmentType] = useState("0");
  const [enquiryStatus, setEnquiryStatus] = useState("Select");
  const [quantity, setQuantity] = useState("");
  const [noOfContainer, setNoOfContainer] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [contSize, setContSize] = useState("Select");
  const [shippingCompany, setShippingCompany] = useState("");
  const [route, setRoute] = useState("Select");
  const [forwardingAgent, setForwardingAgent] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [polFreday, setPolFreday] = useState("");
  const [polDemRate, setPolDemRate] = useState("");
  const [podFredays, setPodFredays] = useState("");
  const [podDemRate, setPodDemRate] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [lostEnquiryRemarks, setLostEnquiryRemarks] = useState("");
  const [portOptions, setPortOptions] = useState([]);
  const [shipperOptions, setShipperOptions] = useState([]);
  const [containerSizeOptions, setContainerSizeOptions] = useState([]);
  const token = localStorage.getItem("token");
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const enquiryID = queryParams.get("enquiryReferenceID");

    setEnquiryReferenceID(enquiryID !== 'null' ? enquiryID : 0); 

    const userId = getUserIdFromToken();
    const today = new Date();
    const formattedDate = formatDate(today);
    setEnquiryDate(formattedDate);
    fetchPorts();
    fetchShipperDetails(userId);
    fetchContainerSize();

    if (enquiryID > 0) {
      fetchEnquiryDetails(enquiryID);
    }
  }, [location.search]);

  const fetchEnquiryDetails = async (id) => {
    try {
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Enquiry/getenquirydetailsbyid`, { enquiry_id: id }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = response.data;
      setEnquiryDate(data.enquiry_date || "");
      setPortOfDischarge(data.enquiry_portofdischarge || "Select");
      setportOfLoding(data.enquiry_portofloding || "Select");
      setPlaceOfReceipt(data.enquiry_placeofreceipt || "Select");
      setPlaceOfDelivery(data.enquiry_placeofdelivery || "Select");
      setShipper(data.enquiry_shipper || "Select");
      setContactDetails(data.enquiry_contactdetails || "");
      setFreightTerms(data.enquiry_freightterms || "Select");
      setCommodityDesc(data.enquiry_commoditydesc || "");
      setGrossWeight(data.enquiry_grossweight || "");
      setCbm(data.enquiry_cbm || "");
      setChargeableWeight(data.enquiry_chargeableweight || "");
      setKgsMts(data.enquiry_kgsmts || "Select");
      setShipmentType(data.enquiry_shipmenttype || "0");
      setEnquiryStatus(data.enquiry_enquirystatus || "Select");
      setQuantity(data.enquiry_quantity || "");
      setNoOfContainer(data.enquiry_noofcontainer || "");
      setSalesPerson(data.enquiry_salesperson || "");
      setContSize(data.enquiry_contsize || "Select");
      setShippingCompany(data.enquiry_shippingcompany || "");
      setRoute(data.enquiry_route || "Select");
      setForwardingAgent(data.enquiry_forwardingagent || "");
      setPickUpLocation(data.enquiry_pickuplocation || "");
      setPolFreday(data.enquiry_polfreday || "");
      setPolDemRate(data.enquiry_poldemrate || "");
      setPodFredays(data.enquiry_podfredays || "");
      setPodDemRate(data.enquiry_poddemrate || "");
      setFollowUp(data.enquiry_followUp || "");
      setLostEnquiryRemarks(data.enquiry_lostenquiryremarks || "");
    } catch (error) {
      console.error("Error fetching enquiry details: ", error);
    }
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.user_id;
    }
    return null;
  };

  const fetchPorts = async () => {
    axios.post(`${API_URLS.BASE_URL}/blapi/anchordata/getallportdetails`, {},
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const options = response.data.map(port => ({
          value: port.port_id,
          label: port.portname
        }));
        setPortOptions(options);
      })
      .catch(error => {
        console.error("Error fetching port details:", error);
      });
  };

  const fetchShipperDetails = async (userId) => {
    axios.post(`${API_URLS.BASE_URL}/blapi/Shipper/getallshipperdetails`, { user_id: userId },
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const options = response.data.map(shipper => ({
          value: shipper.shipperid,
          label: shipper.shipperName
        }));
        setShipperOptions(options);
      })
      .catch(error => {
        console.error("Error fetching port details:", error);
      });
  };

  const fetchContainerSize = async () => {
    axios.post(`${API_URLS.BASE_URL}/blapi/Container/getcontainersize`, {},
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const options = response.data.map(shipper => ({
          value: shipper.containersize_id,
          label: shipper.containersize_type
        }));
        setContainerSizeOptions(options);
      })
      .catch(error => {
        console.error("Error fetching container size details:", error);
      });
  };

  const validate = () => {
    const newErrors = {};
    if (typeof portOfDischarge === 'string' && portOfDischarge.trim() === "Select") {
      newErrors.portOfDischarge = "Port Of Discharge is required";
    }
    if (typeof portOfLoding === 'string' && portOfLoding.trim() === "Select") {
      newErrors.portOfLoding = "Port Of Loading is required";
    }
    if (typeof shipper === 'string' && shipper.trim() === "Select") {
      newErrors.shipper = "Shipper is required";
    }
    if (shipmentType == "0") {
      newErrors.shipmentType = "Shipment Type is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setShowPopup(true);
      return;
    }
    setShowPopup(false);
    const formData = {
      enquiry_id: enquiryReferenceID || 0,
      enquiry_date: enquiryDate,
      enquiry_portofdischarge: portOfDischarge,
      enquiry_portofloding: portOfLoding,
      enquiry_placeofreceipt: placeOfReceipt,
      enquiry_placeofdelivery: placeOfDelivery,
      enquiry_shipper: shipper,
      enquiry_contactdetails: contactDetails,
      enquiry_freightterms: freightTerms,
      enquiry_commoditydesc: commodityDesc,
      enquiry_grossweight: grossWeight,
      enquiry_cbm: cbm,
      enquiry_chargeableweight: chargeableWeight,
      enquiry_kgsmts: kgsMts,
      enquiry_shipmenttype: shipmentType,
      enquiry_enquirystatus: enquiryStatus,
      enquiry_quantity: quantity,
      enquiry_noofcontainer: noOfContainer,
      enquiry_salesperson: salesPerson,
      enquiry_contsize: contSize,
      enquiry_shippingcompany: shippingCompany,
      enquiry_route: route,
      enquiry_forwardingagent: forwardingAgent,
      enquiry_pickuplocation: pickUpLocation,
      enquiry_polfreday: polFreday,
      enquiry_poldemrate: polDemRate,
      enquiry_podfredays: podFredays,
      enquiry_poddemrate: podDemRate,
      enquiry_followUp: followUp,
      enquiry_lostenquiryremarks: lostEnquiryRemarks,
    };
    try {
      const userId = getUserIdFromToken();
      const enquiryDetails = { ...formData, user_id: userId };
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Enquiry/saveenquiry`, enquiryDetails, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      let enquiryReferenceID = response.data;
      if (enquiryReferenceID > 0) {
        navigate(`/selling-rate?enquiryReferenceID=${enquiryReferenceID}`);
      }
      console.log("Enquiry details saved successfully: ", response.data);
    } catch (error) {
      console.error("Error saving charge details: ", error);
    }
  };

  const handlePortOfDischargeChange = (value) => {
    setPortOfDischarge(value);
    setErrors((prevErrors) => ({ ...prevErrors, portOfDischarge: undefined })); // Remove error class
  };

  const handlePlaceOfReceiptChange = (value) => {
    setPlaceOfReceipt(value);
  }
  const handlePortOfLodingChange = (value) => {
    setportOfLoding(value);
    setErrors((prevErrors) => ({ ...prevErrors, portOfLoding: undefined })); // Remove error class
  }
  const handlePlaceOfDeliveryChange = (value) => {
    setPlaceOfDelivery(value);
  }
  const handleshipperChange = (value) => {
    setShipper(value);
    setErrors((prevErrors) => ({ ...prevErrors, shipper: undefined })); // Remove error class
  }
  const handleGrossWeightChange = (e) => {
    const value = allowOnlyNumbers(e.target.value);
    setGrossWeight(value);
  };
  const handlecbmChange = (e) => {
    const cbm = allowOnlyNumbers(e.target.value);
    setCbm(cbm);
  };
  const handleChargableWeightChange = (e) => {
    const value = allowOnlyNumbers(e.target.value);
    setChargeableWeight(value);
  };
  const handleQuantityChange = (e) => {
    const value = allowOnlyNumbers(e.target.value);
    setQuantity(value);
  };
  const handlenoOfContainerChange = (e) => {
    const value = allowOnlyNumbers(e.target.value);
    setNoOfContainer(value);
  };
  const handlepolfreedayChange = (e) => {
    const value = allowOnlyNumbers(e.target.value);
    setPolFreday(value);
  };
  const handlepodfredaysChange = (e) => {
    const value = allowOnlyNumbers(e.target.value);
    setPodFredays(value);
  };
  const handlepoldemrateChange = (e) => {
    const value = allowOnlyNumbers(e.target.value);
    setPolDemRate(value);
  };
  const handlepodDemRateChange = (e) => {
    const value = allowOnlyNumbers(e.target.value);
    setPodDemRate(value);
  };
  return (
    <div className="step-container">
      <h2>Enquiry</h2>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="enquiryDate">Enquiry Date</label>
            <input
              type="date"
              id="enquiryDate"
              value={enquiryDate}
              onChange={(e) => setEnquiryDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="portOfDischarge" className="${errors.portOfDischarge ? 'error' : ''}">Port of Discharge</label>
            <SearchableSelect
              id="portOfDischarge"
              textValue={portOfDischarge || ""}
              setTextValue={(text) => setPortOfDischarge(text)}
              setIdValue={handlePortOfDischargeChange}
              options={portOptions}
              className="form-control"
              isError={errors.portOfDischarge}
            />
          </div>
          <div className="form-group">
            <label htmlFor="portOfLoding" className="${errors.portOfLoding ? 'error' : ''}">Port of Loading</label>
            <SearchableSelect
              id="portOfLoding"
              textValue={portOfLoding || ""}
              setTextValue={(text) => setportOfLoding(text)}
              setIdValue={handlePortOfLodingChange}
              options={portOptions}
              className="form-control"
              isError={errors.portOfLoding}
            />
          </div>
          <div className="form-group">
            <label htmlFor="placeOfReceipt">Place of Receipt</label>
            <SearchableSelect
              id="placeOfReceipt"
              textValue={placeOfReceipt || ""}
              setTextValue={(text) => setPlaceOfReceipt(text)}
              setIdValue={handlePlaceOfReceiptChange}
              options={portOptions}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="placeOfDelivery">Place of Delivery</label>
            <SearchableSelect
              id="placeOfDelivery"
              textValue={placeOfDelivery || ""}
              setTextValue={(text) => setPlaceOfDelivery(text)}
              setIdValue={handlePlaceOfDeliveryChange}
              options={portOptions}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="shipper" className="${errors.shipper ? 'error' : ''}">Shipper</label>
            <SearchableSelect
              id="shipper"
              textValue={shipper || ""}
              setTextValue={(text) => setShipper(text)}
              setIdValue={handleshipperChange}
              options={shipperOptions}
              className="form-control"
              isError={errors.shipper}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactDetails">Contact Details</label>
            <input
              type="text"
              id="contactDetails"
              value={contactDetails || ""}
              onChange={(e) => setContactDetails(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="freightTerms">Freight Terms</label>
            <select
              id="freightTerms"
              value={freightTerms || ""}
              onChange={(e) => setFreightTerms(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="CY/CY">CY/CY</option>
              <option value="CY/DOOR">CY/DOOR</option>
              <option value="DOOR/DOOR">DOOR/DOOR</option>
              <option value="DOOR/CY">DOOR/CY</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="commodityDesc">Commodity Description</label>
            <input
              type="text"
              id="commodityDesc"
              value={commodityDesc || ""}
              onChange={(e) => setCommodityDesc(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="grossWeight">Gross Weight</label>
            <input
              type="text"
              id="grossWeight"
              value={grossWeight || ""}
              onChange={handleGrossWeightChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cbm">CBM</label>
            <input
              type="text"
              id="cbm"
              value={cbm || ""}
              onChange={handlecbmChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="chargeableWeight">Chargeable Weight</label>
            <input
              type="text"
              id="chargeableWeight"
              value={chargeableWeight || ""}
              onChange={handleChargableWeightChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="kgsmts">KGS/MTS</label>
            <select
              id="kgsmts"
              value={kgsMts || ""}
              onChange={(e) => setKgsMts(e.target.value)}
              className="form-control"
            >
              <option value="0">Select</option>
              <option value="KGS">KGS</option>
              <option value="MTS">MTS</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="shipmentType">Shipment Type</label>
            <select
              id="shipmentType"
              value={shipmentType || ""}
              onChange={(e) => setShipmentType(e.target.value)}
              className="form-control"
            >
              <option value="0">Select</option>
              <option value="SeaImports">Sea Imports</option>
              <option value="SeaExports">Sea Exports</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="enquiryStatus">Enquiry Status</label>
            <select
              id="enquiryStatus"
              value={enquiryStatus || ""}
              onChange={(e) => setEnquiryStatus(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Active">Active</option>
              <option value="Order">Order</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              id="quantity"
              value={quantity || ""}
              onChange={handleQuantityChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="noOfContainer">Number of Container(s)</label>
            <input
              type="text"
              id="noOfContainer"
              value={noOfContainer || ""}
              onChange={handlenoOfContainerChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contSize">Container Size</label>
            <select
              id="contSize"
              value={contSize || ""}
              onChange={(e) => setContSize(e.target.value)}
              className="form-control"
            >
              <option value="0">Select</option>
              {containerSizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="salesPerson">Sales Person</label>
            <input
              type="text"
              id="salesPerson"
              value={salesPerson || ""}
              onChange={(e) => setSalesPerson(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="shippingCompany">Shipping Company</label>
            <input
              type="text"
              id="shippingCompany"
              value={shippingCompany || ""}
              onChange={(e) => setShippingCompany(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="route">Route</label>
            <select
              id="route"
              value={route || ""}
              onChange={(e) => setRoute(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Transhipment">Transhipment</option>
              <option value="SameRoute">Same Route</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="forwardingAgent">Forwarding Agent</label>
            <input
              type="text"
              id="forwardingAgent"
              value={forwardingAgent || ""}
              onChange={(e) => setForwardingAgent(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pickUpLocation">Pick Up Location</label>
            <input
              type="text"
              id="pickUpLocation"
              value={pickUpLocation || ""}
              onChange={(e) => setPickUpLocation(e.target.value)}
            />
          </div>
       
          <div className="form-group">
            <label htmlFor="polFreday">Port of Loading Free day(s)</label>
            <input
              type="text"
              id="polFreday"
              value={polFreday || ""}
              onChange={handlepolfreedayChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="polDemRate">Port of Loading Demurrage Rate</label>
            <input
              type="text"
              id="polDemRate"
              value={polDemRate || ""}
              onChange={handlepoldemrateChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="podFredays">Pod Freeday(s)</label>
            <input
              type="text"
              id="podFredays"
              value={podFredays || ""}
              onChange={handlepodfredaysChange}
            />
          </div>
        
          <div className="form-group">
            <label htmlFor="podDemRate">POD Demurrage Rate</label>
            <input
              type="text"
              id="podDemRate"
              value={podDemRate || ""}
              onChange={handlepodDemRateChange}
            />
          </div>
        <div className="form-group">
          <label htmlFor="followUp">Follow-Up</label>
          <textarea
            id="followUp"
            value={followUp || ""}
            onChange={(e) => setFollowUp(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="lostEnquiryRemarks">Lost Enquiry Remarks</label>
          <textarea
            id="lostEnquiryRemarks"
            value={lostEnquiryRemarks || ""}
            onChange={(e) => setLostEnquiryRemarks(e.target.value)}
          ></textarea>
        </div>
        <div className="firstnavigation">
          <button type="submit">Next</button>
        </div>
        
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default EnquiryDetails;
