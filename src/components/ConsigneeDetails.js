import React, { useState } from "react";
import NameAndAddress from "./NameAndAddressDetails";
import { useNavigate } from "react-router-dom";

const ConsigneeDetails = () => {
  const [consigneeName, setConsigneeName] = useState("");
  const [consigneeAddress1, setConsigneeAddress1] = useState("");
  const [consigneeAddress2, setConsigneeAddress2] = useState("");
  const [consigneeCity, setConsigneeCity] = useState("");
  const [consigneeState, setConsigneeState] = useState("");
  const [consigneeCountry, setConsigneeCountry] = useState("");
  const [consigneeEmail, setConsigneeEmail] = useState("");
  const [consigneePhone, setConsigneePhone] = useState("");
  const [consigneePinCode, setConsigneePinCode] = useState("");
  const [consigneeRegNo, setConsigneeRegNo] = useState("");
  const [consigneeTIN, setConsigneeTIN] = useState("");
  const navigate = useNavigate();

  const onNameChange = (e) => {
    setConsigneeName(e.target.value);
  };

  const nextStep = () => {
    navigate("/notify-parties");
  };

  const prevStep = () => {
    navigate("/shipper-details");
  };

  return (
    <div className="step-container">
      <div className="step">
        <h2>Consignee Details</h2>
        <NameAndAddress
          prefix="consignee"
          onNameChange={onNameChange}
          onLNameChange={setConsigneeName}
          onAddress1Change={setConsigneeAddress1}
          onAddress2Change={setConsigneeAddress2}
          onCityChange={setConsigneeCity}
          onStateChange={setConsigneeState}
          onCountryChange={setConsigneeCountry}
          onEmailChange={setConsigneeEmail}
          onPhoneChange={setConsigneePhone}
          onPinCodeChange={setConsigneePinCode}
        />
        <label htmlFor="consigneeRegNo">Registration No</label>
        <input type="text" id="consigneeRegNo" value={consigneeRegNo} onChange={(e) => setConsigneeRegNo(e.target.value)} required />
        <label htmlFor="consigneeTIN">TIN No</label>
        <input type="text" id="consigneeTIN" value={consigneeTIN} onChange={(e) => setConsigneeTIN(e.target.value)} required />
        <div className="navigation">
          <button type="button" className="previous" onClick={prevStep}>
            Previous
          </button>
          <button type="button" className="next" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsigneeDetails;