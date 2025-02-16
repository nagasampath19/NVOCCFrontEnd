import React, { useState } from "react";

const ContainerDetails = ({ prevStep }) => {
  const [CarrierFName, setCarrierFName] = useState("");
  const [CarrierLName, setCarrierLName] = useState("");
  const [CarrierAddress1, setCarrierAddress1] = useState("");
  const [CarrierAddress2, setCarrierAddress2] = useState("");
  const [CarrierCity, setCarrierCity] = useState("");
  const [CarrierState, setCarrierState] = useState("");
  const [CarrierCountry, setCarrierCountry] = useState("");
  const [CarrierEmail, setCarrierEmail] = useState("");
  const [CarrierPhone, setCarrierPhone] = useState("");
  

  return (
    <div className="step">
      <h2> Container Details</h2>
       
      <div className="navigation">
        <button type="button" className="previous" onClick={() => prevStep(5)}>Previous</button>
        <button type="submit">Generate Bill of Lading</button>
      </div>
    </div>
  );
};

export default ContainerDetails;