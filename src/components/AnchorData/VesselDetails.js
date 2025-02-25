import React, { useState } from "react";
import "../../css/ShipperDetails.css"; // Assuming ShipperDetails.css contains the desired styles

const VesselDetails = () => {
  const [vesselName, setVesselName] = useState("");
  const [imoCode, setImoCode] = useState("");
  const [flag, setFlag] = useState("");
  const [vesselType, setVesselType] = useState("Cargo");
  const [vesselOwner, setVesselOwner] = useState("");
  const [vesselOperator, setVesselOperator] = useState("");
  const [vesselCapacity, setVesselCapacity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Vessel Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vesselName">Vessel Name</label>
          <input
            type="text"
            id="vesselName"
            value={vesselName}
            onChange={(e) => setVesselName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imoCode">IMO Code</label>
          <input
            type="text"
            id="imoCode"
            value={imoCode}
            onChange={(e) => setImoCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="flag">Flag</label>
          <input
            type="text"
            id="flag"
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vesselType">Vessel Type</label>
          <select
            id="vesselType"
            value={vesselType}
            onChange={(e) => setVesselType(e.target.value)}
            className="form-control"
          >
            <option value="0">Select</option>
            <option value="1">Cargo</option>
            <option value="2">Tanker</option>
            <option value="3">Passenger</option>
            <option value="4">Fishing</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="vesselOwner">Vessel Owner</label>
          <input
            type="text"
            id="vesselOwner"
            value={vesselOwner}
            onChange={(e) => setVesselOwner(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vesselOperator">Vessel Operator</label>
          <input
            type="text"
            id="vesselOperator"
            value={vesselOperator}
            onChange={(e) => setVesselOperator(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vesselCapacity">Vessel Capacity</label>
          <input
            type="text"
            id="vesselCapacity"
            value={vesselCapacity}
            onChange={(e) => setVesselCapacity(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VesselDetails;