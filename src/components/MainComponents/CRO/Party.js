import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "../../../config/urls";
import jwtDecode from "jwt-decode";
import Address from "../../Common/Address";
import Popup from "../../Common/Popup";
import ValidationPopup from "../../Common/ValidationPopup";

const Party = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [deliveryOrderNumber, setDeliveryOrderNumber] = useState("");
  const [crocargo_id, setCrocargoId] = useState(0);
  const token = localStorage.getItem("token");

  const [deliveryOrderParty, setDeliveryOrderParty] = useState("");
  const [emptyYard, setEmptyYard] = useState("Select");
  const [salesPerson, setSalesPerson] = useState("Select");
  const [agentLeaseOwner, setAgentLeaseOwner] = useState("Select");
  const [shippingLine, setShippingLine] = useState("Select");
  const [slot, setSlot] = useState("");
  const [showEmptyYardPopup, setShowEmptyYardPopup] = useState(false);
  const [showSalesPersonPopup, setShowSalesPersonPopup] = useState(false);
  const [showAgentLeaseOwnerPopup, setShowAgentLeaseOwnerPopup] = useState(false);
  const [showShippingLinePopup, setShowShippingLinePopup] = useState(false);

  const fetchEmptyYardAddress = async () => {
    const token = localStorage.getItem("token");
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const deliveryOrderNumber = queryParams.get("cro_id");
    const crocargo_id = queryParams.get("crocargo_id");
    setDeliveryOrderNumber(deliveryOrderNumber);
    setCrocargoId(crocargo_id);
  });

  const handleBackClick = () => {
    navigate(`/cargo-details?cro_id=${deliveryOrderNumber}&crocargo_id=${crocargo_id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Party Details</h2>
      <form onSubmit={handleSubmit} className="party-form">
        <div className="form-group">
          <label htmlFor="deliveryOrderParty">
            Delivery Order Party
          </label>
          <input
            type="text"
            id="deliveryOrderParty"
            value={deliveryOrderParty || ""}
            onChange={(e) => setDeliveryOrderParty(e.target.value)}
            ></input>
        </div>
        <div className="form-group">
          <label htmlFor="emptyYard">
            Empty Yard
            (<span
              style={{cursor: "pointer", color: "blue" }}
              onClick={() => setShowEmptyYardPopup(true)}
            >+ Add</span>)
          </label>
          <select
            id="emptyYard"
            value={emptyYard}
            onChange={(e) => setEmptyYard(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="salesPerson">
            Sales Person
            (<span
              style={{cursor: "pointer", color: "blue" }}
              onClick={() => setShowSalesPersonPopup(true)}
            >+ Add</span>)
            </label>
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
          <label htmlFor="agentLeaseOwner">
            Agent / Lease Owner
            (<span
              style={{cursor: "pointer", color: "blue" }}
              onClick={() => setShowAgentLeaseOwnerPopup(true)}
            >+ Add</span>)
          </label>
          <select
            id="agentLeaseOwner"
            value={agentLeaseOwner}
            onChange={(e) => setAgentLeaseOwner(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="shippingLine">Shipping Line</label>
          <select
            id="shippingLine"
            value={shippingLine}
            onChange={(e) => setShippingLine(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="slot">Slot</label>
          <input
            type="text"
            id="slot"
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
          />
        </div>
        <div className="navigation">
          <button type="button" className="previous" onClick={handleBackClick}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
      {showEmptyYardPopup && (
        <Popup
          onClose={() => setShowEmptyYardPopup(false)}
          width="550px"
          height="500px"
        >
          <Address
            header="Add Empty Yard"
            apiUrl={`${API_URLS.EMPTY_YARD}`}
            onClose={() => setShowEmptyYardPopup(false)}
            onSave={fetchEmptyYardAddress}
          />
        </Popup>
      )}
      {showSalesPersonPopup && (
        <Popup
          onClose={() => setShowSalesPersonPopup(false)}
          width="550px"
          height="500px"
        >
          <Address
            header="Add Sales Person"
            apiUrl={`${API_URLS.SALES_PERSON}`}
            onClose={() => setShowSalesPersonPopup(false)}
            onSave={fetchEmptyYardAddress}
          />
        </Popup>
      )}
      {showAgentLeaseOwnerPopup && (
        <Popup
          onClose={() => setShowAgentLeaseOwnerPopup(false)}
          width="550px"
          height="500px"
        >
          <Address
            header="Add Agent/Lease Owner"
            apiUrl={`${API_URLS.AGENT_LEASE_OWNER}`}
            onClose={() => setShowAgentLeaseOwnerPopup(false)}
            onSave={fetchEmptyYardAddress}
          />
        </Popup>
      )}
    </div>
  );
};

export default Party;
