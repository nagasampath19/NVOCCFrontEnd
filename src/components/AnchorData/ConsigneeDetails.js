import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import { updateConsigneeDetails } from "../../redux/actions/consigneeActions";
import { API_URLS } from "../../config/urls";
import ValidationPopup from "../Common/ValidationPopup";
import NameAndAddress from "./NameAndAddressDetails";

const ConsigneeDetails = () => {
  const dispatch = useDispatch();
  const ConsigneeDetails = useSelector((state) => state.consignee);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const urls = API_URLS;
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      axios.post(API_URLS.VALIDATE_TOKEN, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.status !== 200) {
          navigate("/");
        }
      })
      .catch(error => {
        navigate("/");
      });
    }
  }, [navigate]);

  useEffect(() => {
    if (location.state && location.state.consigneeDetails) {
      const consigneeDetails = location.state.consigneeDetails;
      dispatch(updateConsigneeDetails(consigneeDetails));
    }
  }, [location.state, dispatch]);

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.user_id;
    }
    return null;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateConsigneeDetails({ [name]: value }));
    handleChange(e);
  };

  const validate = () => {
    const newErrors = {};
    if (!ConsigneeDetails.consigneeName) newErrors.consigneeName = "Name is required";
    if (!ConsigneeDetails.consigneeAddress1) newErrors.consigneeAddress1 = "Address 1 is required";
    if (!ConsigneeDetails.consigneeCity) newErrors.consigneeCity = "City is required";
    if (!ConsigneeDetails.consigneeState) newErrors.consigneeState = "State is required";
    if (!ConsigneeDetails.consigneeCountry) newErrors.consigneeCountry = "Country is required";
    if (!ConsigneeDetails.consigneeEmail) {
      newErrors.consigneeEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(ConsigneeDetails.consigneeEmail)) {
      newErrors.consigneeEmail = "Email address is invalid";
    }
    if (!ConsigneeDetails.consigneePinCode) newErrors.consigneePinCode = "Pin Code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createConsignee = () => {
    const token = localStorage.getItem("token");
    const userId = getUserIdFromToken();
    const consigneeData = { ...ConsigneeDetails, user_id: userId };

    axios.post(`${urls.BASE_URL}/blapi/Consignee/create`, consigneeData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      const searchParams = location.state?.searchParams || {};
      navigate("/consignee-details-search", { state: { updatedConsigneeDetails: response.data, searchParams } });
    })
    .catch(error => {
      if(error.response && error.response.status === 403) {
        navigate("/");
      }
      if(error.response && error.response.status === 401) {
        navigate("/");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      createConsignee();
    } else {
      setShowPopup(true);
    }
  };

  const handleChange = (e) => {
    const input = document.getElementById(e.target.id);
    const label = document.querySelector(`label[for="${e.target.id}"]`);
    if (input) {
      input.classList.remove("error");
    }
    if (label) {
      label.classList.remove("error");
    }
  };

  const closeModal = () => {
    setShowPopup(false);
    // Add error class to the input fields and labels with errors
    Object.keys(errors).forEach((key) => {
      const input = document.getElementById(`consignee${key.charAt(0).toUpperCase() + key.slice(1)}`);
      const label = document.querySelector(`label[for="consignee${key.charAt(0).toUpperCase() + key.slice(1)}"]`);
      if (input) {
        input.classList.add("error");
      }
      if (label) {
        label.classList.add("error");
      }
    });
  };

  return (
    <div className="step-container">
      <h2>Consignee Details</h2>
      <form onSubmit={handleSubmit}>
        <NameAndAddress
          prefix="consignee"
          onNameChange={onChange}
          onAddress1Change={onChange}
          onAddress2Change={onChange}
          onCityChange={onChange}
          onStateChange={onChange}
          onCountryChange={onChange}
          onEmailChange={onChange}
          onPhoneChange={onChange}
          onPinCodeChange={onChange}
          name={ConsigneeDetails.consigneeName || ""}
          address1={ConsigneeDetails.consigneeAddress1 || ""}
          address2={ConsigneeDetails.consigneeAddress2 || ""}
          city={ConsigneeDetails.consigneeCity || ""}
          state={ConsigneeDetails.consigneeState || ""}
          country={ConsigneeDetails.consigneeCountry || ""}
          email={ConsigneeDetails.consigneeEmail || ""}
          phone={ConsigneeDetails.consigneePhone || ""}
          pinCode={ConsigneeDetails.consigneePinCode || ""}
        />
        <div className="form-group">
          <label htmlFor="consigneeGSTIN">GSTIN Number</label>
          <input
            type="text"
            id="consigneeGSTIN"
            name="consigneeGSTIN"
            value={ConsigneeDetails.consigneeGSTIN || ""}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ConsigneePAN">PAN Number</label>
          <input
            type="text"
            id="consigneePAN"
            name="consigneePAN"
            value={ConsigneeDetails.consigneePAN || ""}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consigneeIEC">IEC Code</label>
          <input
            type="text"
            id="consigneeIEC"
            name="consigneeIEC"
            value={ConsigneeDetails.consigneeIEC || ""}
            onChange={onChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={closeModal} />}
    </div>
  );
};

export default ConsigneeDetails;