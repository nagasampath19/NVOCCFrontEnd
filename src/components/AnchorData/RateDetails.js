import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ValidationPopup from "../Common/ValidationPopup"; // Assuming ValidationPopup is a component for displaying validation messages
import { API_URLS } from "../../config/urls"; // Assuming API_URLS contains the base URL

const RateDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [rateDetails, setRateDetails] = useState({
    chargeId: 0,
    chargeCode: "",
    chargeName: "",
    chargeledger: "",
    chargecurrency: "INR",
    chargetype: "Freight",
    chargevat: "yes",
    chargegst: "yes",
    chargegstpercentage: "0",
    chargevat: "0",
    chargeformula: "no",
    chargelimit: "",
    chargepercentage: "",
    chargesaccode: ""
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [currenciesOptions, setCurrenciesOptions] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (location.state && location.state.chargeDetails) {
      setRateDetails(location.state.chargeDetails);
    }
    fetchAllCurrencies();
  }, [location.state]);

  const fetchAllCurrencies = async () => {
    axios.post(`${API_URLS.BASE_URL}/blapi/anchordata/currencies`, {},
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const options = response.data.map(charge => ({
          value: charge.currency_id,
          label: charge.currency_code
        }));
        setCurrenciesOptions(options);
      })
      .catch(error => {
        console.error("Error fetching container size details:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setShowPopup(false);
      try {
        const userId = getUserIdFromToken();
        const chargeDetails = { ...rateDetails, user_id: userId };
        await axios.post(`${API_URLS.BASE_URL}/blapi/Anchordata/Charges/savechargesdetails`, chargeDetails, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const searchParams = location.state?.searchParams || {};
        navigate("/rate-details-search", { state: { updatedChargeDetails: chargeDetails, searchParams } });
      } catch (error) {
        console.error("Error saving charge details: ", error);
        // Handle error (e.g., show an error message)
      }
    } else {
      setShowPopup(true);
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRateDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }));
    if (errors[id]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const errors = {};
    if (!rateDetails.chargeCode) errors.chargeCode = "Charge Code is required.";
    if (!rateDetails.chargeName) errors.chargeName = "Charge Name is required.";
    if (!rateDetails.chargegstpercentage) errors.chargegstpercentage = "GST is required.";
    if (!rateDetails.chargesaccode) errors.chargesaccode = "SAC Code is required.";
    return errors;
  };

  return (
    <div className="step-container">
      <h2>Charge Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="chargeCode">Charge Code</label>
          <input
            type="text"
            id="chargeCode"
            value={rateDetails.chargeCode}
            onChange={handleChange}
            className={errors.chargeCode ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="chargeName">Charge Name</label>
          <input
            type="text"
            id="chargeName"
            value={rateDetails.chargeName}
            onChange={handleChange}
            className={errors.chargeName ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="chargeledger">Ledger Name (Tally)</label>
          <input
            type="text"
            id="chargeledger"
            value={rateDetails.chargeledger}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="chargecurrency">Currency</label>

          <select
            id="chargecurrency"
            value={rateDetails.chargecurrency || "Select"}
            onChange={handleChange}
            className="form-control"
          >
            <option value="0">Select</option>
            {currenciesOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="chargetype">Charge Type</label>
          <select
            id="chargetype"
            value={rateDetails.chargetype}
            onChange={handleChange}
            className="form-control"
          >
            <option value="Freight">Freight</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        <div className="form-group radio-group">
          <div className="radio-options">
            <label>GST</label>
            <label>
              <input
                type="radio"
                name="chargegst"
                value="Y"
                checked={rateDetails.chargegst === "Y"}
                onChange={() => setRateDetails((prevDetails) => ({ ...prevDetails, chargegst: "Y" }))}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="chargegst"
                value="N"
                checked={rateDetails.chargegst === "N"}
                onChange={() => setRateDetails((prevDetails) => ({ ...prevDetails, chargegst: "N" }))}
              /> No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="chargegstpercentage">GST %</label>
          <select
            id="chargegstpercentage"
            value={rateDetails.chargegstpercentage}
            onChange={handleChange}
            className="form-control"
          >
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="chargevat">VAT %</label>
          <select
            id="chargevat"
            value={rateDetails.chargevat}
            onChange={handleChange}
            className="form-control"
          >
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group radio-group">
          <div className="radio-options">
            <label>Formula</label>
            <label>
              <input
                type="radio"
                name="chargeformula"
                value="yes"
                checked={rateDetails.chargeformula === "yes"}
                onChange={() => setRateDetails((prevDetails) => ({ ...prevDetails, chargeformula: "yes" }))}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="chargeformula"
                value="no"
                checked={rateDetails.chargeformula === "no"}
                onChange={() => setRateDetails((prevDetails) => ({ ...prevDetails, chargeformula: "no" }))}
              />
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="chargelimit">Limit</label>
          <input
            type="text"
            id="chargelimit"
            value={rateDetails.chargelimit}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="chargepercentage">Percentage</label>
          <input
            type="text"
            id="chargepercentage"
            value={rateDetails.chargepercentage}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="chargesaccode">SAC Code</label>
          <input
            type="text"
            id="chargesaccode"
            value={rateDetails.chargesaccode}
            onChange={handleChange}
            className={errors.sacCode ? "error" : ""}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default RateDetails;
