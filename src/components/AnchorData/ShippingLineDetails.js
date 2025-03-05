import React, { useState } from "react";


const ShippingLineDetails = () => {
  const [shippingLineCode, setShippingLineCode] = useState("");
  const [shippingLineName, setShippingLineName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [agentCode, setAgentCode] = useState("");
  const [lineCode, setLineCode] = useState("");
  const [shippingLineType, setShippingLineType] = useState("India");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Shipping Line Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="shippingLineCode">Shipping Line Code</label>
          <input
            type="text"
            id="shippingLineCode"
            value={shippingLineCode}
            onChange={(e) => setShippingLineCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shippingLineName">Shipping Line Name</label>
          <input
            type="text"
            id="shippingLineName"
            value={shippingLineName}
            onChange={(e) => setShippingLineName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine2">Address Line 2</label>
          <input
            type="text"
            id="addressLine2"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="agentCode">Agent Code</label>
          <input
            type="text"
            id="agentCode"
            value={agentCode}
            onChange={(e) => setAgentCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lineCode">Line Code</label>
          <input
            type="text"
            id="lineCode"
            value={lineCode}
            onChange={(e) => setLineCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shippingLineType">Shipping Line Type</label>
          <select
            id="shippingLineType"
            value={shippingLineType}
            onChange={(e) => setShippingLineType(e.target.value)}
            className="form-control"
          >
            <option value="0">Select</option>
            <option value="1">India</option>
            <option value="2">Overseas</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShippingLineDetails;
