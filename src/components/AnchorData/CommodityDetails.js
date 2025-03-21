import React, { useState,useEffect } from "react";
import axios from "axios";
import { API_URLS } from "../../config/urls";
import { useLocation, useNavigate } from "react-router-dom";
import ValidationPopup from "../Common/ValidationPopup";

const CommodityDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [commodityDetails, setCommodityDetails] = useState({
    commodity_id: "0",
    commodity_name: "",
    commodity_imocode: "",
    commodity_unocode: ""
  });

  useEffect(() => {
        if (location.state && location.state.commodityDetails) {
          setCommodityDetails(location.state.commodityDetails);
        }
      }, [location.state]);
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setShowPopup(false);
      const token = localStorage.getItem("token");
      try {
        let tempCompDetails = {
          commodity_id: commodityDetails.commodityId,
          commodity_name: commodityDetails.commodityName,
          commodity_imocode: commodityDetails.commodityimocode,
          commodity_unocode: commodityDetails.commodityUnoCode
        };
        const response = await axios.post(`${API_URLS.BASE_URL}/blapi/anchordata/savecommoditydetails`, tempCompDetails, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const searchParams = location.state?.searchParams || {};
        navigate("/commodity-details-search", { state: { updatedCommodityDetailsDetails: response.data, searchParams } });
      } catch (error) {
        console.error("Error saving commodity details: ", error);
      }
    } else {
      setShowPopup(true);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCommodityDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }));
    const input = document.getElementById(e.target.id);
    const label = document.querySelector(`label[for="${e.target.id}"]`);
    if (input) {
      input.classList.remove("error");
    }
    if (label) {
      label.classList.remove("error");
    }
  };

  const validate = () => {
    const errors = {};
    if (!commodityDetails.commodityName) errors.commodity_name = "Commodity Name is required.";
    if (!commodityDetails.commodityimocode) errors.commodity_imocode = "Commodity IMO Code/Class is required.";
    return errors;
  };

  return (
    <div className="step-container">
      <h2>Commodity Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="commodityName">Name</label>
          <input
            type="text"
            id="commodityName"
            value={commodityDetails.commodityName || ""}
            onChange={handleChange}
            className={errors.commodity_name ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="commodityimocode">IMO Code/Class</label>
          <input
            type="text"
            id="commodityimocode"
            value={commodityDetails.commodityimocode || ""}
            onChange={handleChange}
            className={errors.commodity_imocode ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="commodityUnoCode">Uno Code</label>
          <input
            type="text"
            id="commodityUnoCode"
            value={commodityDetails.commodityUnoCode || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default CommodityDetails;
