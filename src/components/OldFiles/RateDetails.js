import React, { useState } from "react";
import "../css/common.css"; // Import common styles

const RateDetails = () => {
  const [chargeCode, setChargeCode] = useState("");
  const [chargeName, setChargeName] = useState("");
  const [ledgerName, setLedgerName] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [typeChg, setTypeChg] = useState("Freight");
  const [gst, setGst] = useState("yes");
  const [gstPercentage, setGstPercentage] = useState("0");
  const [vatPercentage, setVatPercentage] = useState("0");
  const [formula, setFormula] = useState("yes");
  const [limit, setLimit] = useState("");
  const [percentage, setPercentage] = useState("");
  const [sacCode, setSacCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Rate Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="chargeCode">Charge Code</label>
          <input
            type="text"
            id="chargeCode"
            value={chargeCode}
            onChange={(e) => setChargeCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="chargeName">Charge Name</label>
          <input
            type="text"
            id="chargeName"
            value={chargeName}
            onChange={(e) => setChargeName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ledgerName">Ledger Name (Tally)</label>
          <input
            type="text"
            id="ledgerName"
            value={ledgerName}
            onChange={(e) => setLedgerName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="form-control"
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="typeChg">Type CHG</label>
          <select
            id="typeChg"
            value={typeChg}
            onChange={(e) => setTypeChg(e.target.value)}
            className="form-control"
          >
            <option value="Freight">Freight</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        <div className="form-group radio-group">
          <label>GST</label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="gst"
                value="yes"
                checked={gst === "yes"}
                onChange={() => setGst("yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="gst"
                value="no"
                checked={gst === "no"}
                onChange={() => setGst("no")}
              />
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gstPercentage">GST %</label>
          <select
            id="gstPercentage"
            value={gstPercentage}
            onChange={(e) => setGstPercentage(e.target.value)}
            className="form-control"
          >
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="vatPercentage">VAT %</label>
          <select
            id="vatPercentage"
            value={vatPercentage}
            onChange={(e) => setVatPercentage(e.target.value)}
            className="form-control"
          >
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group radio-group">
          <label>Formula (Y/N)</label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="formula"
                value="yes"
                checked={formula === "yes"}
                onChange={() => setFormula("yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="formula"
                value="no"
                checked={formula === "no"}
                onChange={() => setFormula("no")}
              />
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="limit">Limit</label>
          <input
            type="text"
            id="limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="percentage">Percentage</label>
          <input
            type="text"
            id="percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sacCode">SAC Code</label>
          <input
            type="text"
            id="sacCode"
            value={sacCode}
            onChange={(e) => setSacCode(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RateDetails;
