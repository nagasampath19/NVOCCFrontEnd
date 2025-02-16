import React, { useState } from "react";
import NameAndAddress from "./NameAndAddressDetails";
import { useNavigate } from "react-router-dom";

const NotifyParties = () => {
  const [notifyPartyName, setNotifyPartyName] = useState("");
  const [notifyPartyAddress1, setNotifyPartyAddress1] = useState("");
  const [notifyPartyAddress2, setNotifyPartyAddress2] = useState("");
  const [notifyPartyCity, setNotifyPartyCity] = useState("");
  const [notifyPartyState, setNotifyPartyState] = useState("");
  const [notifyPartyCountry, setNotifyPartyCountry] = useState("");
  const [notifyPartyEmail, setNotifyPartyEmail] = useState("");
  const [notifyPartyPhone, setNotifyPartyPhone] = useState("");
  const [notifyPartyPinCode, setNotifyPartyPinCode] = useState("");
  const navigate = useNavigate();

  const onNameChange = (e) => {
    setNotifyPartyName(e.target.value);
  };

  const nextStep = () => {
    navigate("/shipment-details");
  };

  const prevStep = () => {
    navigate("/consignee-details");
  };

  return (
    <div className="step-container">
      <div className="step">
        <h2>Notify Parties</h2>
        <NameAndAddress
          prefix="notifyParty"
          onNameChange={onNameChange}
          onLNameChange={setNotifyPartyName}
          onAddress1Change={setNotifyPartyAddress1}
          onAddress2Change={setNotifyPartyAddress2}
          onCityChange={setNotifyPartyCity}
          onStateChange={setNotifyPartyState}
          onCountryChange={setNotifyPartyCountry}
          onEmailChange={setNotifyPartyEmail}
          onPhoneChange={setNotifyPartyPhone}
          onPinCodeChange={setNotifyPartyPinCode}
        />
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

export default NotifyParties;