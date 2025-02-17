import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import NameAndAddress from "./NameAndAddressDetails";
import { useNavigate } from "react-router-dom";
import { updateShipperDetails } from "../redux/actions/shipperActions";
import { API_URLS } from "../config/urls";

const ShipperDetails = () => {
  const dispatch = useDispatch();
  const ShipperDetails = useSelector((state) => state.shipping);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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

    axios.post(API_URLS.CREATE_SHIPPING, shippingData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Shipping created successfully', response.data);
      navigate("/consignee-details");
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

  const nextStep = () => {
    if (validate()) {
      createShipping();
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
      <label htmlFor="shipperCIN">CIN</label>
      <input type="text" id="shipperCIN" name="shipperCIN" value={ShipperDetails.shipperCIN} onChange={onChange} required />
      <div className="firstnavigation">
        <button type="button" className="next" onClick={nextStep}>
          Next
        </button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Enter missing fields</h3>
            <ul>
              {Object.keys(errors).map((key) => (
                <li key={key}>{errors[key]}</li>
              ))}
            </ul>
            <button className="close-modal-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShipperDetails;


