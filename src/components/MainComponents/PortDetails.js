import React, { useState } from "react";

const ImportBLPortDetails = () => {
  const [loadingPort, setLoadingPort] = useState("Select");
  const [dischargePort, setDischargePort] = useState("Select");
  const [deliveryPort, setDeliveryPort] = useState("Select");
  const [destinationPort, setDestinationPort] = useState("Select");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h3>Port Details</h3>
      <form onSubmit={handleSubmit} className="port-details-form">
        <div className="form-group">
          <label htmlFor="loadingPort">Loading Port</label>
          <select
            id="loadingPort"
            value={loadingPort}
            onChange={(e) => setLoadingPort(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dischargePort">Discharge Port</label>
          <select
            id="dischargePort"
            value={dischargePort}
            onChange={(e) => setDischargePort(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="deliveryPort">Delivery Port</label>
          <select
            id="deliveryPort"
            value={deliveryPort}
            onChange={(e) => setDeliveryPort(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="destinationPort">Destination Port</label>
          <select
            id="destinationPort"
            value={destinationPort}
            onChange={(e) => setDestinationPort(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImportBLPortDetails;
