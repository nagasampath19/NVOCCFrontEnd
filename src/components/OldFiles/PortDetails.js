import React, { useState } from "react";

const PortDetails = () => {
  const [portCode, setPortCode] = useState("");
  const [portName, setPortName] = useState("");
  const [cfsAddress, setCfsAddress] = useState("");
  const [ediCode, setEdiCode] = useState("");
  const [jnptCode, setJnptCode] = useState("");
  const [nsictGroupCode, setNsictGroupCode] = useState("");
  const [gtiCode, setGtiCode] = useState("");
  const [gtiGroupName, setGtiGroupName] = useState("");
  const [bmctCode, setBmctCode] = useState("");
  const [nsiGtCode, setNsiGtCode] = useState("");
  const [portType, setPortType] = useState("Port");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Port Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="portCode">Port Code</label>
          <input
            type="text"
            id="portCode"
            value={portCode}
            onChange={(e) => setPortCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="portName">Port Name</label>
          <input
            type="text"
            id="portName"
            value={portName}
            onChange={(e) => setPortName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cfsAddress">CFS Address</label>
          <input
            type="text"
            id="cfsAddress"
            value={cfsAddress}
            onChange={(e) => setCfsAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ediCode">EDI Code</label>
          <input
            type="text"
            id="ediCode"
            value={ediCode}
            onChange={(e) => setEdiCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jnptCode">JNPT Code</label>
          <input
            type="text"
            id="jnptCode"
            value={jnptCode}
            onChange={(e) => setJnptCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nsictGroupCode">NSICT Group Code</label>
          <input
            type="text"
            id="nsictGroupCode"
            value={nsictGroupCode}
            onChange={(e) => setNsictGroupCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gtiCode">GTI Code</label>
          <input
            type="text"
            id="gtiCode"
            value={gtiCode}
            onChange={(e) => setGtiCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gtiGroupName">GTI Group Name</label>
          <input
            type="text"
            id="gtiGroupName"
            value={gtiGroupName}
            onChange={(e) => setGtiGroupName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bmctCode">BMCT Code</label>
          <input
            type="text"
            id="bmctCode"
            value={bmctCode}
            onChange={(e) => setBmctCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nsiGtCode">NSI GT Code</label>
          <input
            type="text"
            id="nsiGtCode"
            value={nsiGtCode}
            onChange={(e) => setNsiGtCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="portType">Port Type</label>
          <select
            id="portType"
            value={portType}
            onChange={(e) => setPortType(e.target.value)}
            className="form-control"
          >
            <option value="0">Select</option>
            <option value="1">Port</option>
            <option value="2">DPD</option>
            <option value="3">CFS</option>
            <option value="4">Carrier</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PortDetails;
