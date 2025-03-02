import React, { useState } from "react";

const CROPort = () => {
  const [portOfReceipt, setPortOfReceipt] = useState("Select");
  const [portOfLoading, setPortOfLoading] = useState("Select");
  const [portOfDischarge, setPortOfDischarge] = useState("Select");
  const [transhipmentPort, setTranshipmentPort] = useState("Select");
  const [portOfFinalDestination, setPortOfFinalDestination] = useState("Select");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Port Details</h2>
      <form onSubmit={handleSubmit} className="port-form">
        <div className="form-group">
          <label htmlFor="portOfReceipt">Port Of Receipt</label>
          <select
            id="portOfReceipt"
            value={portOfReceipt}
            onChange={(e) => setPortOfReceipt(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="portOfLoading">Port Of Loading</label>
          <select
            id="portOfLoading"
            value={portOfLoading}
            onChange={(e) => setPortOfLoading(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="portOfDischarge">Port Of Discharge</label>
          <select
            id="portOfDischarge"
            value={portOfDischarge}
            onChange={(e) => setPortOfDischarge(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="transhipmentPort">Transhipment Port</label>
          <select
            id="transhipmentPort"
            value={transhipmentPort}
            onChange={(e) => setTranshipmentPort(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="portOfFinalDestination">Port Of Final Destination</label>
          <select
            id="portOfFinalDestination"
            value={portOfFinalDestination}
            onChange={(e) => setPortOfFinalDestination(e.target.value)}
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

export default CROPort;
