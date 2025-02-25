import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles
import "./BuyingRate.css"; // Import the new CSS file for styling

const BuyingRate = () => {
  const [enquiryID, setEnquiryID] = useState("");
  const [fromValidDate, setFromValidDate] = useState("");
  const [toValidDate, setToValidDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [activity, setActivity] = useState("Select");
  const [containerSize, setContainerSize] = useState("Select");
  const [containerType, setContainerType] = useState("Select");
  const [freeDays, setFreeDays] = useState("");
  const [month, setMonth] = useState("Select");
  const [year, setYear] = useState("");
  const [chargeName, setChargeName] = useState("Select");
  const [gst, setGst] = useState("");
  const [currency, setCurrency] = useState("Select");
  const [prepColl, setPrepColl] = useState("Select");
  const [rateBasis, setRateBasis] = useState("Select");
  const [gstYN, setGstYN] = useState("Select");
  const [ratePart, setRatePart] = useState("Select");
  const [perUnit, setPerUnit] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [rate, setRate] = useState("");
  const [freight, setFreight] = useState("");
  const [amount, setAmount] = useState("");
  const [gstin, setGstin] = useState("");
  const [sacCode, setSacCode] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [igst, setIgst] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Buying Rate</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="enquiryID">Enquiry ID</label>
              <input
                type="text"
                id="enquiryID"
                value={enquiryID}
                onChange={(e) => setEnquiryID(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fromValidDate">From Valid Date</label>
              <input
                type="date"
                id="fromValidDate"
                value={fromValidDate}
                onChange={(e) => setFromValidDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="toValidDate">To Valid Date</label>
              <input
                type="date"
                id="toValidDate"
                value={toValidDate}
                onChange={(e) => setToValidDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input
                type="text"
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="activity">Activity</label>
              <select
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Forwarding">Forwarding</option>
                <option value="Custom Clearance">Custom Clearance</option>
                <option value="Transportation">Transportation</option>
              </select>
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
                <option value="LCL">LCL</option>
                <option value="20 FCL">20 FCL</option>
                <option value="40 FCL">40 FCL</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="containerType">Container Type</label>
              <select
                id="containerType"
                value={containerType}
                onChange={(e) => setContainerType(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="freeDays">Free Days</label>
              <input
                type="text"
                id="freeDays"
                value={freeDays}
                onChange={(e) => setFreeDays(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="month">Month</label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {[...Array(12).keys()].map((m) => (
                  <option key={m + 1} value={m + 1}>
                    {m + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
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
              <label htmlFor="gst">GST</label>
              <input
                type="text"
                id="gst"
                value={gst}
                onChange={(e) => setGst(e.target.value)}
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
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="prepColl">Prep/Coll</label>
              <select
                id="prepColl"
                value={prepColl}
                onChange={(e) => setPrepColl(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="C">C</option>
                <option value="P">P</option>
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
                <option value="Per Count">Per Count</option>
                <option value="Per Unit">Per Unit</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gstYN">GST (Y/N)</label>
              <select
                id="gstYN"
                value={gstYN}
                onChange={(e) => setGstYN(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gstin">GSTIN</label>
              <input
                type="text"
                id="gstin"
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
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
            <div className="form-group">
              <label htmlFor="cgst">CGST</label>
              <input
                type="text"
                id="cgst"
                value={cgst}
                onChange={(e) => setCgst(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sgst">SGST</label>
              <input
                type="text"
                id="sgst"
                value={sgst}
                onChange={(e) => setSgst(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="igst">IGST</label>
              <input
                type="text"
                id="igst"
                value={igst}
                onChange={(e) => setIgst(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="total">Total</label>
              <input
                type="text"
                id="total"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ratePart">Rate Part</label>
              <select
                id="ratePart"
                value={ratePart}
                onChange={(e) => setRatePart(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Part A">Part A</option>
                <option value="Part B">Part B</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="perUnit">Per Unit</label>
              <input
                type="text"
                id="perUnit"
                value={perUnit}
                onChange={(e) => setPerUnit(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exchangeRate">Exchange Rate</label>
              <input
                type="text"
                id="exchangeRate"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rate">Rate</label>
              <input
                type="text"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="freight">Freight</label>
              <input
                type="text"
                id="freight"
                value={freight}
                onChange={(e) => setFreight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuyingRate;
