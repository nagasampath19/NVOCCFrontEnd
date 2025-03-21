import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URLS } from "../../config/urls";
import { useLocation, useNavigate } from "react-router-dom";
import ValidationPopup from "../Common/ValidationPopup";

const ShippingLineDetails = () => {
  const location = useLocation();
  const [shippingLineDetails, setShippingLineDetails] = useState({
    shippingLineId: "0",
    shippingLineCode: "",
    shippingLineName: "",
    addressLine1: "",
    agentCode: "",
    lineCode: "",
    shippingLineType: "0"
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!shippingLineDetails.shippingLineCode) errors.shippingLineCode = "Shipping Line Code is required.";
    if (!shippingLineDetails.shippingLineName) errors.shippingLineName = "Shipping Line Name is required.";
    if (!shippingLineDetails.addressLine1) errors.addressLine1 = "Address Line 1 is required.";
    if (shippingLineDetails.shippingLineType == 0) errors.shippingLineType = "Shipping Line Type is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setShowPopup(false);
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(`${API_URLS.BASE_URL}/blapi/anchordata/saveshippinglinedetails`, shippingLineDetails, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const searchParams = location.state?.searchParams || {};
        navigate("/shipping-line-details-search", { state: { updatedShippingLineDetails: response.data, searchParams } });
      } catch (error) {
        console.error("Error saving shipping line details: ", error);
        // Handle error (e.g., show an error message)
      }
    } else {
      setShowPopup(true);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setShippingLineDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }));
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    if (input) {
      input.classList.remove("error");
    }
    if (label) {
      label.classList.remove("error");
    }
  };

  useEffect(() => {
    if (showPopup) {
      Object.keys(errors).forEach((key) => {
        const input = document.getElementById(key);
        const label = document.querySelector(`label[for="${key}"]`);
        if (input) {
          input.classList.add("error");
        }
        if (label) {
          label.classList.add("error");
        }
      });
    }
    if (location.state && location.state.shippingLineDetails) {
      setShippingLineDetails(location.state.shippingLineDetails);
    }
  }, [showPopup, errors, location.state]);

  return (
    <div className="step-container">
      <h2>Shipping Line Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="shippingLineCode">Shipping Line Code</label>
          <input
            type="text"
            id="shippingLineCode"
            maxLength={50}
            value={shippingLineDetails.shippingLineCode || ""}
            onChange={handleChange}
            className={errors.shippingLineCode ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shippingLineName">Shipping Line Name</label>
          <input
            type="text"
            id="shippingLineName"
            maxLength={200}
            value={shippingLineDetails.shippingLineName || ""}
            onChange={handleChange}
            className={errors.shippingLineName ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1">Address</label>
          <textarea
            id="addressLine1"
            value={shippingLineDetails.addressLine1 || ""}
            maxLength={500}
            onChange={handleChange}
            className={errors.addressLine1 ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="agentCode">Agent Code</label>
          <input
            type="text"
            id="agentCode"
            value={shippingLineDetails.agentCode || ""}
            onChange={handleChange}
            maxLength={25}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lineCode">Line Code</label>
          <input
            type="text"
            id="lineCode"
            value={shippingLineDetails.lineCode || ""}
            onChange={handleChange}
            maxLength={25}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shippingLineType">Shipping Line Type</label>
          <select
            id="shippingLineType"
            value={shippingLineDetails.shippingLineType || "0"}
            onChange={handleChange}
            className={errors.shippingLineType ? "error" : ""}
          >
            <option value="0">Select</option>
            <option value="India">India</option>
            <option value="Overseas">Overseas</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default ShippingLineDetails;
