import React, { useState } from "react";

const ImportBLVesselDetails = () => {
  const [vesselName, setVesselName] = useState("Select");
  const [eta, setEta] = useState("");
  const [etd, setEtd] = useState("");
  const [rotationNumber, setRotationNumber] = useState("");
  const [demurrageAmount, setDemurrageAmount] = useState("");
  const [hsnCodeHbl, setHsnCodeHbl] = useState("");
  const [commodity, setCommodity] = useState("Select");
  const [imoClass, setImoClass] = useState("");
  const [unoCd, setUnoCd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h3>Vessel Details</h3>
      <form onSubmit={handleSubmit} className="vessel-details-form">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="vesselName">Vessel Name</label>
              <select
                id="vesselName"
                value={vesselName}
                onChange={(e) => setVesselName(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="eta">Estimate Time of Arrival</label>
              <input
                type="date"
                id="eta"
                value={eta}
                onChange={(e) => setEta(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="etd">Estimate Time of Departure</label>
              <input
                type="date"
                id="etd"
                value={etd}
                onChange={(e) => setEtd(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rotationNumber">Rotation Number</label>
              <input
                type="text"
                id="rotationNumber"
                value={rotationNumber}
                onChange={(e) => setRotationNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="demurrageAmount">Demurrage Amount</label>
              <input
                type="text"
                id="demurrageAmount"
                value={demurrageAmount}
                onChange={(e) => setDemurrageAmount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="hsnCodeHbl">HSN Code HBL</label>
              <input
                type="text"
                id="hsnCodeHbl"
                value={hsnCodeHbl}
                onChange={(e) => setHsnCodeHbl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="commodity">Commodity</label>
              <select
                id="commodity"
                value={commodity}
                onChange={(e) => setCommodity(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="imoClass">IMO/Class</label>
              <input
                type="text"
                id="imoClass"
                value={imoClass}
                onChange={(e) => setImoClass(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="unoCd">UNO CD</label>
              <input
                type="text"
                id="unoCd"
                value={unoCd}
                onChange={(e) => setUnoCd(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImportBLVesselDetails;
