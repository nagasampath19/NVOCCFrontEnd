import React, { useState, useEffect } from "react";
import ValidationPopup from "../Common/ValidationPopup";
import axios from "axios";
import { API_URLS } from "../../config/urls";
import { useNavigate, useLocation } from "react-router-dom";

const PackageDetails = () => {
  const [packageDetails, setPackageDetails] = useState({
    packageid: "",
    packageCode: "",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.packageDetails) {
      setPackageDetails(location.state.packageDetails);
    }
  }, [location.state]);

  const validate = () => {
    const errors = {};
    if (!packageDetails.packageCode) errors.packageCode = "Package Code is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowPopup(false);
      await savePackageDetails();
    } else {
      setShowPopup(true);
    }
  };

  const savePackageDetails = async () => {
    const token = localStorage.getItem("token");
    try {
      const params = {
        packageId: packageDetails.packageId,
        packageCode: packageDetails.packageCode,
        description: packageDetails.description
      };
      await axios.post(`${urls.BASE_URL}/blapi/anchordata/savepackagedetails`, params, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const searchParams = location.state?.searchParams || {};
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/searchpackagedetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      navigate("/package-details-search", { state: { updatedPackageDetails: packageDetails, searchResults: response.data, searchParams } });
    } catch (error) {
      console.error("Error saving package details: ", error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPackageDetails((prevDetails) => ({
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
  }, [showPopup, errors]);

  return (
    <div className="step-container">
      <h2>Package Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="packageCode">Package Code</label>
          <input
            type="text"
            id="packageCode"
            value={packageDetails.packageCode}
            onChange={handleChange}
            maxLength={10}
            className={errors.packageCode ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={packageDetails.description}
            maxLength={100}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default PackageDetails;
