import React, { useState, useEffect } from "react";
import axios from "axios";
import NameAndAddress from "./NameAndAddressDetails";
import { useNavigate } from "react-router-dom";

const ShipperDetails = () => {
  const [shipperName, setShipperName] = useState("");
  const [shipperAddress1, setShipperAddress1] = useState("");
  const [shipperAddress2, setShipperAddress2] = useState("");
  const [shipperCity, setShipperCity] = useState("");
  const [shipperState, setShipperState] = useState("");
  const [shipperCountry, setShipperCountry] = useState("");
  const [shipperEmail, setShipperEmail] = useState("");
  const [shipperPhone, setShipperPhone] = useState("");
  const [shipperPinCode, setShipperPinCode] = useState("");
  const [shipperCIN, setShipperCIN] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

 

  const validate = () => {
    const newErrors = {};
    if (!shipperName) newErrors.name = "Name is required";
    if (!shipperAddress1) newErrors.address1 = "Address 1 is required";
    if (!shipperCity) newErrors.city = "City is required";
    if (!shipperState) newErrors.state = "State is required";
    if (!shipperCountry) newErrors.country = "Country is required";
    if (!shipperEmail) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(shipperEmail)) {
      newErrors.email = "Email address is invalid";
    }
    if (!shipperPinCode) newErrors.pinCode = "Pin Code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createShipping = () => {
    const token = localStorage.getItem("token");
    const shippingData = {
      shipperName: shipperName,
      shipperAddress1: shipperAddress1,
      shipperAddress2: shipperAddress2,
      shipperCity: shipperCity,
      shipperState: shipperState,
      shipperCountry: shipperCountry,
      shipperEmail: shipperEmail,
      shipperPhone: shipperPhone,
      shipperPinCode: shipperPinCode,
      shipperCIN: shipperCIN
    };

    axios.post('http://localhost:9090/shipping/create', shippingData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Shipping created successfully', response.data);
      navigate("/consignee-details");
    })
    .catch(error => {
      console.error('Error creating shipping', error);
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
      <div className="step">
        <h2>Shipper Details</h2>
        <NameAndAddress
          prefix="shipper"
          onNameChange={setShipperName}
          onAddress1Change={setShipperAddress1}
          onAddress2Change={setShipperAddress2}
          onCityChange={setShipperCity}
          onStateChange={setShipperState}
          onCountryChange={setShipperCountry}
          onEmailChange={setShipperEmail}
          onPhoneChange={setShipperPhone}
          onPinCodeChange={setShipperPinCode}
        />
        <label htmlFor="shipperCIN">CIN</label>
        <input type="text" id="shipperCIN" value={shipperCIN} onChange={(e) => setShipperCIN(e.target.value)} required />
        <div className="firstnavigation">
          <button type="button" className="next" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h3>Missing Fields</h3>
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


