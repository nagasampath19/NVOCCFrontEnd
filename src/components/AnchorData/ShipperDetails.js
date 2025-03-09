import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import { updateShipperDetails } from "../../redux/actions/shipperActions";
import { API_URLS } from "../../config/urls";
import ValidationPopup from "../Common/ValidationPopup";
import NameAndAddress from "./NameAndAddressDetails";

const ShipperDetails = () => {
  const dispatch = useDispatch();
  const ShipperDetails = useSelector((state) => state.shipping);
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
    if (location.state && location.state.shipperDetails) {
      const shipperDetails = location.state.shipperDetails;
      dispatch(updateShipperDetails(shipperDetails));
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
    dispatch(updateShipperDetails({ [name]: value }));
    handleChange(e);
  };

  const validate = () => {
    const newErrors = {};
    if (!ShipperDetails.shipperName) newErrors.shipperName = "Name is required";
    if (!ShipperDetails.shipperAddress1) newErrors.shipperAddress1 = "Address 1 is required";
    if (!ShipperDetails.shipperCity) newErrors.shipperCity = "City is required";
    if (!ShipperDetails.shipperState) newErrors.shipperState = "State is required";
    if (!ShipperDetails.shipperCountry) newErrors.shipperCountry = "Country is required";
    if (!ShipperDetails.shipperEmail) {
      newErrors.shipperEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(ShipperDetails.shipperEmail)) {
      newErrors.shipperEmail = "Email address is invalid";
    }
    if (!ShipperDetails.shipperPinCode) newErrors.shipperPinCode = "Pin Code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createShipping = () => {
    const token = localStorage.getItem("token");
    const userId = getUserIdFromToken();
    const shippingData = { ...ShipperDetails, user_id: userId };

    axios.post(urls.CREATE_SHIPPER, shippingData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      const searchParams = location.state?.searchParams || {};
      navigate("/shipper-details-search", { state: { updatedShipperDetails: response.data, searchParams } });
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
      createShipping();
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
      const input = document.getElementById(`shipper${key.charAt(0).toUpperCase() + key.slice(1)}`);
      const label = document.querySelector(`label[for="shipper${key.charAt(0).toUpperCase() + key.slice(1)}"]`);
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
      <h2>Shipper Details</h2>
      <form onSubmit={handleSubmit}>
        <NameAndAddress
          prefix="shipper"
          onNameChange={onChange}
          onAddress1Change={onChange}
          onAddress2Change={onChange}
          onCityChange={onChange}
          onStateChange={onChange}
          onCountryChange={onChange}
          onEmailChange={onChange}
          onPhoneChange={onChange}
          onPinCodeChange={onChange}
          name={ShipperDetails.shipperName}
          address1={ShipperDetails.shipperAddress1}
          address2={ShipperDetails.shipperAddress2}
          city={ShipperDetails.shipperCity}
          state={ShipperDetails.shipperState}
          country={ShipperDetails.shipperCountry}
          email={ShipperDetails.shipperEmail}
          phone={ShipperDetails.shipperPhone}
          pinCode={ShipperDetails.shipperPinCode}
        />
        <div className="form-group">
          <label htmlFor="shipperCIN">CIN</label>
          <input
            type="text"
            id="shipperCIN"
            name="shipperCIN"
            value={ShipperDetails.shipperCIN || ""}
            onChange={onChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={closeModal} />}
    </div>
  );
};

export default ShipperDetails;


