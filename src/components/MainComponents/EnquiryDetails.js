import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles
import "./EnquiryDetails.css"; // Import the new CSS file for styling

const EnquiryDetails = () => {
  const [enquiryReferenceID, setenquiryReferenceID] = useState("");
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
  const [shipmentType, setShipmentType] = useState("Select");
  const [enquiryStatus, setEnquiryStatus] = useState("Select");
  const [quantity, setQuantity] = useState("");
  const [noOfContainer, setNoOfContainer] = useState("");
  const [salesPerson, setSalesPerson] = useState("Select");
  const [contSize, setContSize] = useState("Select");
  const [shippingCompany, setShippingCompany] = useState("Select");
  const [route, setRoute] = useState("Select");
  const [forwardingAgent, setForwardingAgent] = useState("Select");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [polFreday, setPolFreday] = useState("");
  const [polDemRate, setPolDemRate] = useState("");
  const [podFredays, setPodFredays] = useState("");
  const [podDemRate, setPodDemRate] = useState("");
  const [buyingRate, setBuyingRate] = useState("");
  const [sellingRate, setSellingRate] = useState("");
  const [estimatedProfit, setEstimatedProfit] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [lostEnquiryRemarks, setLostEnquiryRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2>Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="enquiryReferenceID">Enquiry ID</label>
              <input
                type="text"
                id="enquiryReferenceID"
                value={enquiryReferenceID}
                onChange={(e) => setenquiryReferenceID(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="portOfDischarge">Port of Discharge</label>
              <select
                id="portOfDischarge"
                value={portOfDischarge}
                onChange={(e) => setPortOfDischarge(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="placeOfReceipt">Place of Receipt</label>
              <select
                id="placeOfReceipt"
                value={placeOfReceipt}
                onChange={(e) => setPlaceOfReceipt(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="shipper">Shipper</label>
              <select
                id="shipper"
                value={shipper}
                onChange={(e) => setShipper(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="freightTerms">Freight Terms</label>
              <select
                id="freightTerms"
                value={freightTerms}
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
              <label htmlFor="grossWeight">Gross Weight</label>
              <input
                type="text"
                id="grossWeight"
                value={grossWeight}
                onChange={(e) => setGrossWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="chargeableWeight">Chargeable Weight</label>
              <input
                type="text"
                id="chargeableWeight"
                value={chargeableWeight}
                onChange={(e) => setChargeableWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="shipmentType">Shipment Type</label>
              <select
                id="shipmentType"
                value={shipmentType}
                onChange={(e) => setShipmentType(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Sea Imports">Sea Imports</option>
                <option value="Sea Exports">Sea Exports</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="salesPerson">Sales Person</label>
              <select
                id="salesPerson"
                value={salesPerson}
                onChange={(e) => setSalesPerson(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="shippingCompany">Shipping Company</label>
              <select
                id="shippingCompany"
                value={shippingCompany}
                onChange={(e) => setShippingCompany(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="forwardingAgent">Forwarding Agent</label>
              <select
                id="forwardingAgent"
                value={forwardingAgent}
                onChange={(e) => setForwardingAgent(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="polFreday">Port of Loading Free day(s)</label>
              <input
                type="text"
                id="polFreday"
                value={polFreday}
                onChange={(e) => setPolFreday(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="podFredays">Pod Freeday(s)</label>
              <input
                type="text"
                id="podFredays"
                value={podFredays}
                onChange={(e) => setPodFredays(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="buyingRate">Buying Rate</label>
              <input
                type="text"
                id="buyingRate"
                value={buyingRate}
                onChange={(e) => setBuyingRate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="estimatedProfit">Estimated Profit</label>
              <input
                type="text"
                id="estimatedProfit"
                value={estimatedProfit}
                onChange={(e) => setEstimatedProfit(e.target.value)}
              />
            </div>
          </div>
          <div className="form-column">
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
              <label htmlFor="portOfLoding">Port of Loading</label>
              <select
                id="portOfLoding"
                value={portOfLoding}
                onChange={(e) => setportOfLoding(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="placeOfDelivery">Place of Delivery</label>
              <select
                id="placeOfDelivery"
                value={placeOfDelivery}
                onChange={(e) => setPlaceOfDelivery(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contactDetails">Contact Details</label>
              <input
                type="text"
                id="contactDetails"
                value={contactDetails}
                onChange={(e) => setContactDetails(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="commodityDesc">Commodity Description</label>
              <input
                type="text"
                id="commodityDesc"
                value={commodityDesc}
                onChange={(e) => setCommodityDesc(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cbm">CBM</label>
              <input
                type="text"
                id="cbm"
                value={cbm}
                onChange={(e) => setCbm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="kgsMts">KGS/MTS</label>
              <select
                id="kgsMts"
                value={kgsMts}
                onChange={(e) => setKgsMts(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="KGS">KGS</option>
                <option value="MTS">MTS</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="enquiryStatus">Enquiry Status</label>
              <select
                id="enquiryStatus"
                value={enquiryStatus}
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
              <label htmlFor="noOfContainer">Number of Container(s)</label>
              <input
                type="text"
                id="noOfContainer"
                value={noOfContainer}
                onChange={(e) => setNoOfContainer(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contSize">Container Size</label>
              <select
                id="contSize"
                value={contSize}
                onChange={(e) => setContSize(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="route">Route</label>
              <select
                id="route"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="pickUpLocation">Pick Up Location</label>
              <input
                type="text"
                id="pickUpLocation"
                value={pickUpLocation}
                onChange={(e) => setPickUpLocation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="polDemRate">Port of Loading Demurrage Rate</label>
              <input
                type="text"
                id="polDemRate"
                value={polDemRate}
                onChange={(e) => setPolDemRate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="podDemRate">POD Demurrage Rate</label>
              <input
                type="text"
                id="podDemRate"
                value={podDemRate}
                onChange={(e) => setPodDemRate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="sellingRate">Selling Rate</label>
              <input
                type="text"
                id="sellingRate"
                value={sellingRate}
                onChange={(e) => setSellingRate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-group full-width">
          <label htmlFor="followUp">Follow-Up</label>
          <textarea
            id="followUp"
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group full-width">
          <label htmlFor="lostEnquiryRemarks">Lost Enquiry Remarks</label>
          <textarea
            id="lostEnquiryRemarks"
            value={lostEnquiryRemarks}
            onChange={(e) => setLostEnquiryRemarks(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnquiryDetails;
