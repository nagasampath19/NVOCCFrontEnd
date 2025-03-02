import React, { useState } from "react";

const SalesFixedCharges = () => {
  const [fixedChargeId, setFixedChargeId] = useState("");
  const [chargeName, setChargeName] = useState("");
  const [terminalPort, setTerminalPort] = useState("");
  const [containerSize, setContainerSize] = useState("");
  const [genHaz, setGenHaz] = useState("");
  const [thcEndorsement, setThcEndorsement] = useState("");
  const [perBlContainer, setPerBlContainer] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Purchase Fixed Charges</h2>
      <form onSubmit={handleSubmit} className="fixed-charges-form">
        <div className="form-group">
          <label>Fixed Charge ID:</label>
          <input
            type="text"
            value={fixedChargeId}
            onChange={(e) => setFixedChargeId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Charge Name:</label>
          <select value={chargeName} onChange={(e) => setChargeName(e.target.value)}>
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label>Terminal Port:</label>
          <select value={terminalPort} onChange={(e) => setTerminalPort(e.target.value)}>
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <label>Container Size:</label>
          <select value={containerSize} onChange={(e) => setContainerSize(e.target.value)}>
            <option value="">Select</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="45">45</option>
          </select>
        </div>
        <div className="form-group">
          <label>GEN/HAZ:</label>
          <select value={genHaz} onChange={(e) => setGenHaz(e.target.value)}>
            <option value="">Select</option>
            <option value="GEN">GEN</option>
            <option value="HAZ">HAZ</option>
          </select>
        </div>
        <div className="form-group">
          <label>THC/ENDORSEMENT:</label>
          <select value={thcEndorsement} onChange={(e) => setThcEndorsement(e.target.value)}>
            <option value="">Select</option>
            <option value="THC">THC</option>
            <option value="ENDORSEMENT">ENDORSEMENT</option>
          </select>
        </div>
        <div className="form-group">
          <label>Per BL/Container:</label>
          <select value={perBlContainer} onChange={(e) => setPerBlContainer(e.target.value)}>
            <option value="">Select</option>
            <option value="Per BL">Per BL</option>
            <option value="Per Container">Per Container</option>
          </select>
        </div>
        <div className="form-group">
          <label>Rate:</label>
          <input
            type="text"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SalesFixedCharges;
