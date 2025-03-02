import React, { useState } from "react";

const ExportBLContainerDetails = () => {
  const [containerHBL, setContainerHBL] = useState("");
  const [containerNumber, setContainerNumber] = useState("");
  const [containerSize, setContainerSize] = useState("Select");
  const [customerSealNumber, setCustomerSealNumber] = useState("");
  const [containerNetWeight, setContainerNetWeight] = useState("");
  const [containerCbm, setContainerCbm] = useState("");
  const [containerGrossWeight, setContainerGrossWeight] = useState("");
  const [agentSealNumber, setAgentSealNumber] = useState("");
  const [currentJobNumber, setCurrentJobNumber] = useState("");
  const [totalPackage, setTotalPackage] = useState("");
  const [containerCargoType, setContainerCargoType] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [gateInDate, setGateInDate] = useState("");
  const [fclLcl, setFclLcl] = useState("Select");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h3>Container Details</h3>
      <form onSubmit={handleSubmit} className="container-details-form">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="containerHBL">Container HBL</label>
              <input
                type="text"
                id="containerHBL"
                value={containerHBL}
                onChange={(e) => setContainerHBL(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="containerNumber">Container Number</label>
              <input
                type="text"
                id="containerNumber"
                value={containerNumber}
                onChange={(e) => setContainerNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="containerSize">Container Size</label>
              <select
                id="containerSize"
                value={containerSize}
                onChange={(e) => setContainerSize(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="customerSealNumber">Customer Seal Number</label>
              <input
                type="text"
                id="customerSealNumber"
                value={customerSealNumber}
                onChange={(e) => setCustomerSealNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="containerNetWeight">Container Net Weight</label>
              <input
                type="text"
                id="containerNetWeight"
                value={containerNetWeight}
                onChange={(e) => setContainerNetWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="containerCbm">Container CBM</label>
              <input
                type="text"
                id="containerCbm"
                value={containerCbm}
                onChange={(e) => setContainerCbm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="containerGrossWeight">Container Gross Weight</label>
              <input
                type="text"
                id="containerGrossWeight"
                value={containerGrossWeight}
                onChange={(e) => setContainerGrossWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="agentSealNumber">Agent Seal Number</label>
              <input
                type="text"
                id="agentSealNumber"
                value={agentSealNumber}
                onChange={(e) => setAgentSealNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="currentJobNumber">Current Job Number</label>
              <input
                type="text"
                id="currentJobNumber"
                value={currentJobNumber}
                onChange={(e) => setCurrentJobNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalPackage">Total Package</label>
              <input
                type="text"
                id="totalPackage"
                value={totalPackage}
                onChange={(e) => setTotalPackage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="containerCargoType">Container Cargo Type</label>
              <input
                type="text"
                id="containerCargoType"
                value={containerCargoType}
                onChange={(e) => setContainerCargoType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pickupDate">Pickup Date</label>
              <input
                type="date"
                id="pickupDate"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gateInDate">Gate In Date</label>
              <input
                type="date"
                id="gateInDate"
                value={gateInDate}
                onChange={(e) => setGateInDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fclLcl">FCL/LCL</label>
              <select
                id="fclLcl"
                value={fclLcl}
                onChange={(e) => setFclLcl(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="FCL">FCL</option>
                <option value="LCL">LCL</option>
                <option value="ETY">ETY</option>
                <option value="AIR">AIR</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExportBLContainerDetails;
