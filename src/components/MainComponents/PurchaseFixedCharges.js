import React, { useState } from "react";

const PurchaseFixedCharges = () => {
  const [fixedChargeId, setFixedChargeId] = useState("");
  const [chargeName, setChargeName] = useState("Select");
  const [party, setParty] = useState("Select");
  const [rateBasis, setRateBasis] = useState("Select");
  const [lclFcl, setLclFcl] = useState("Select");
  const [currency, setCurrency] = useState("Select");
  const [rate, setRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Purchase Fixed Charges</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="fixedChargeId">Fixed Charge ID</label>
            <input
              type="text"
              id="fixedChargeId"
              value={fixedChargeId}
              onChange={(e) => setFixedChargeId(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="chargeName">Charge Name</label>
            <select
              id="chargeName"
              value={chargeName}
              onChange={(e) => setChargeName(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="party">Party</label>
            <select
              id="party"
              value={party}
              onChange={(e) => setParty(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="rateBasis">Rate Basis</label>
            <select
              id="rateBasis"
              value={rateBasis}
              onChange={(e) => setRateBasis(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Lumpsum">Lumpsum</option>
              <option value="CBM Wise">CBM Wise</option>
              <option value="Per Count">Per Count</option>
              <option value="GWT Wise">GWT Wise</option>
              <option value="CHGWt Wise">CHGWt Wise</option>
              <option value="Per Unit">Per Unit</option>
              <option value="Percentage Wise">Percentage Wise</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="lclFcl">LCL/FCL</label>
            <select
              id="lclFcl"
              value={lclFcl}
              onChange={(e) => setLclFcl(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="LCL">LCL</option>
              <option value="FCL 20ft">FCL 20ft</option>
              <option value="FCL 40ft">FCL 40ft</option>
              <option value="FCL 20/40ft">FCL 20/40ft</option>
              <option value="AIR">AIR</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="rate">Rate</label>
            <input
              type="text"
              id="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PurchaseFixedCharges;
