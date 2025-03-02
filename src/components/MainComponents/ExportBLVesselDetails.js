import React, { useState } from "react";

const ExportBLVesselDetails = () => {
  const [oceanVessel, setOceanVessel] = useState("Select");
  const [voyageNumber, setVoyageNumber] = useState("");
  const [houseBLNumber, setHouseBLNumber] = useState("");
  const [masterBLNumber, setMasterBLNumber] = useState("");

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
              <label htmlFor="oceanVessel">Ocean Vessel</label>
              <select
                id="oceanVessel"
                value={oceanVessel}
                onChange={(e) => setOceanVessel(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="voyageNumber">Voyage Number</label>
              <input
                type="text"
                id="voyageNumber"
                value={voyageNumber}
                onChange={(e) => setVoyageNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="houseBLNumber">House Bill of Lading Number (HBL)</label>
              <input
                type="text"
                id="houseBLNumber"
                value={houseBLNumber}
                onChange={(e) => setHouseBLNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="masterBLNumber">Master Bill of Lading (MBL)</label>
              <input
                type="text"
                id="masterBLNumber"
                value={masterBLNumber}
                onChange={(e) => setMasterBLNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExportBLVesselDetails;
