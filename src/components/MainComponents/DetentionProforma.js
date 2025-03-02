import React, { useState } from "react";

const DetentionProforma = () => {
  const [hblNumber, setHblNumber] = useState("Select");
  const [vesselVoyage, setVesselVoyage] = useState("");
  const [freeDays, setFreeDays] = useState("");
  const [party, setParty] = useState("Select");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [jobNumber, setJobNumber] = useState("Select");
  const [eta, setEta] = useState("");
  const [gstType, setGstType] = useState("Select");
  const [fullInvoiceNumber, setFullInvoiceNumber] = useState("");
  const [containerNumber, setContainerNumber] = useState("");
  const [detentionFromDate, setDetentionFromDate] = useState("");
  const [detentionToDate, setDetentionToDate] = useState("");
  const [demAmtUsd, setDemAmtUsd] = useState("");
  const [detDaysUsd, setDetDaysUsd] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [demAmount, setDemAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [doRevolutionAmount, setDoRevolutionAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Detention Proforma</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="hblNumber">HBL Number</label>
            <select
              id="hblNumber"
              value={hblNumber}
              onChange={(e) => setHblNumber(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="vesselVoyage">Vessel Voyage</label>
            <input
              type="text"
              id="vesselVoyage"
              value={vesselVoyage}
              onChange={(e) => setVesselVoyage(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="freeDays">Free Days</label>
            <input
              type="text"
              id="freeDays"
              value={freeDays}
              onChange={(e) => setFreeDays(e.target.value)}
              className="form-control"
            />
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
            <label htmlFor="invoiceNumber">Invoice Number</label>
            <input
              type="text"
              id="invoiceNumber"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input
              type="date"
              id="invoiceDate"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobNumber">Job Number</label>
            <select
              id="jobNumber"
              value={jobNumber}
              onChange={(e) => setJobNumber(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="eta">ETA</label>
            <input
              type="text"
              id="eta"
              value={eta}
              onChange={(e) => setEta(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gstType">GST Type</label>
            <select
              id="gstType"
              value={gstType}
              onChange={(e) => setGstType(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Local">Local</option>
              <option value="Outstation">Outstation</option>
              <option value="SEZ">SEZ</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fullInvoiceNumber">Full Invoice Number</label>
            <input
              type="text"
              id="fullInvoiceNumber"
              value={fullInvoiceNumber}
              onChange={(e) => setFullInvoiceNumber(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Container Details</h3>
          <div className="form-group">
            <label htmlFor="containerNumber">Container Number</label>
            <input
              type="text"
              id="containerNumber"
              value={containerNumber}
              onChange={(e) => setContainerNumber(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="detentionFromDate">Detention From Date</label>
            <input
              type="date"
              id="detentionFromDate"
              value={detentionFromDate}
              onChange={(e) => setDetentionFromDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="detentionToDate">Detention To Date</label>
            <input
              type="date"
              id="detentionToDate"
              value={detentionToDate}
              onChange={(e) => setDetentionToDate(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Dem Calculations as per containers</h3>
          <div className="form-group">
            <label htmlFor="demAmtUsd">DEM. AMT (USD)</label>
            <input
              type="text"
              id="demAmtUsd"
              value={demAmtUsd}
              onChange={(e) => setDemAmtUsd(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="detDaysUsd">Det Days (USD)</label>
            <input
              type="text"
              id="detDaysUsd"
              value={detDaysUsd}
              onChange={(e) => setDetDaysUsd(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exchangeRate">Exchange Rate</label>
            <input
              type="text"
              id="exchangeRate"
              value={exchangeRate}
              onChange={(e) => setExchangeRate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="demAmount">Dem Amount</label>
            <input
              type="text"
              id="demAmount"
              value={demAmount}
              onChange={(e) => setDemAmount(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="remarks">Remarks</label>
            <textarea
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="doRevolutionAmount">DO Revolution Amount</label>
            <input
              type="text"
              id="doRevolutionAmount"
              value={doRevolutionAmount}
              onChange={(e) => setDoRevolutionAmount(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DetentionProforma;
