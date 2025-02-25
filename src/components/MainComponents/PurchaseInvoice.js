import React, { useState } from "react";
import "./PurchaseInvoice.css";

const PurchaseInvoice = () => {
  const [activityType, setActivityType] = useState("Select");
  const [hblNumber, setHblNumber] = useState("");
  const [jobNumber, setJobNumber] = useState("");
  const [voyageCode, setVoyageCode] = useState("");
  const [pod, setPod] = useState("");
  const [containers, setContainers] = useState("");
  const [consignee, setConsignee] = useState("");
  const [cbm, setCbm] = useState("");
  const [grossWt, setGrossWt] = useState("");
  const [chgWt, setChgWt] = useState("");
  const [partyType, setPartyType] = useState("Select");
  const [billingParty, setBillingParty] = useState("Select");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceType, setInvoiceType] = useState("Select");
  const [ovrsExchRate, setOvrsExchRate] = useState("");
  const [gstType, setGstType] = useState("Select");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [fullInvoiceNumber, setFullInvoiceNumber] = useState("");
  const [terminalPort, setTerminalPort] = useState("Select");
  const [thcEndorsement, setThcEndorsement] = useState("Select");
  const [genHaz, setGenHaz] = useState("Select");
  const [gstin, setGstin] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [roundOff, setRoundOff] = useState("");
  const [narration, setNarration] = useState("");
  const [chargeName, setChargeName] = useState("Select");
  const [gst, setGst] = useState("");
  const [currency, setCurrency] = useState("Select");
  const [prepColl, setPrepColl] = useState("Select");
  const [rateBasis, setRateBasis] = useState("Select");
  const [gstYn, setGstYn] = useState("Select");
  const [perUnit, setPerUnit] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [rate, setRate] = useState("");
  const [freight, setFreight] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [cafPercent, setCafPercent] = useState("");
  const [cafAmt, setCafAmt] = useState("");
  const [bafPercent, setBafPercent] = useState("");
  const [bafAmt, setBafAmt] = useState("");
  const [ccPercent, setCcPercent] = useState("");
  const [ccAmt, setCcAmt] = useState("");
  const [ccApply, setCcApply] = useState("Select");
  const [cafApply, setCafApply] = useState("Select");
  const [sacCode, setSacCode] = useState("");
  const [vatPercent, setVatPercent] = useState("");
  const [vatAmt, setVatAmt] = useState("");
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
      <h2>Purchase Invoice</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="activityType">Activity Type</label>
            <select
              id="activityType"
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="AIR IMPORTS">AIR IMPORTS</option>
              <option value="AIR EXPORTS">AIR EXPORTS</option>
              <option value="SEA IMPORTS">SEA IMPORTS</option>
              <option value="SEA EXPORTS">SEA EXPORTS</option>
              <option value="OTHER CHARGES">OTHER CHARGES</option>
              <option value="DETENTION">DETENTION</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="hblNumber">HBL Number</label>
            <input
              type="text"
              id="hblNumber"
              value={hblNumber}
              onChange={(e) => setHblNumber(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobNumber">Job Number</label>
            <input
              type="text"
              id="jobNumber"
              value={jobNumber}
              onChange={(e) => setJobNumber(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="voyageCode">Voyage Code</label>
            <input
              type="text"
              id="voyageCode"
              value={voyageCode}
              onChange={(e) => setVoyageCode(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pod">POD</label>
            <input
              type="text"
              id="pod"
              value={pod}
              onChange={(e) => setPod(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="containers">Container(s)</label>
            <input
              type="text"
              id="containers"
              value={containers}
              onChange={(e) => setContainers(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="consignee">Consignee</label>
            <input
              type="text"
              id="consignee"
              value={consignee}
              onChange={(e) => setConsignee(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cbm">CBM</label>
            <input
              type="text"
              id="cbm"
              value={cbm}
              onChange={(e) => setCbm(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="grossWt">Gross WT</label>
            <input
              type="text"
              id="grossWt"
              value={grossWt}
              onChange={(e) => setGrossWt(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="chgWt">Chg WT</label>
            <input
              type="text"
              id="chgWt"
              value={chgWt}
              onChange={(e) => setChgWt(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="partyType">Party Type</label>
            <select
              id="partyType"
              value={partyType}
              onChange={(e) => setPartyType(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Customer">Customer</option>
              <option value="Other Billing Party">Other Billing Party</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="billingParty">Billing Party</label>
            <select
              id="billingParty"
              value={billingParty}
              onChange={(e) => setBillingParty(e.target.value)}
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
            <label htmlFor="invoiceType">Invoice Type</label>
            <select
              id="invoiceType"
              value={invoiceType}
              onChange={(e) => setInvoiceType(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Debit Note (Rs)">Debit Note (Rs)</option>
              <option value="Credit Note (Rs)">Credit Note (Rs)</option>
              <option value="Debit Note (OVR)">Debit Note (OVR)</option>
              <option value="Credit Note (OVR)">Credit Note (OVR)</option>
              <option value="Reimbursement Invoice">Reimbursement Invoice</option>
              <option value="Commission/Rebate">Commission/Rebate</option>
              <option value="Detention">Detention</option>
              <option value="SEZ">SEZ</option>
              <option value="FRT (Credit Note)">FRT (Credit Note)</option>
              <option value="Cancel">Cancel</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ovrsExchRate">Ovrs Exch. Rate</label>
            <input
              type="text"
              id="ovrsExchRate"
              value={ovrsExchRate}
              onChange={(e) => setOvrsExchRate(e.target.value)}
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
            <label htmlFor="fullInvoiceNumber">Full Invoice Number</label>
            <input
              type="text"
              id="fullInvoiceNumber"
              value={fullInvoiceNumber}
              onChange={(e) => setFullInvoiceNumber(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="terminalPort">Terminal Port</label>
            <select
              id="terminalPort"
              value={terminalPort}
              onChange={(e) => setTerminalPort(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="thcEndorsement">THC/ENDORSEMENT</label>
            <select
              id="thcEndorsement"
              value={thcEndorsement}
              onChange={(e) => setThcEndorsement(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="THC">THC</option>
              <option value="Endorsement">Endorsement</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="genHaz">GEN/HAZ</label>
            <select
              id="genHaz"
              value={genHaz}
              onChange={(e) => setGenHaz(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Gen">Gen</option>
              <option value="HAZ">HAZ</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gstin">GSTIN</label>
            <input
              type="text"
              id="gstin"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountNo">Account No</label>
            <input
              type="text"
              id="accountNo"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="roundOff">Round Off</label>
            <input
              type="text"
              id="roundOff"
              value={roundOff}
              onChange={(e) => setRoundOff(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="narration">Narration</label>
            <input
              type="text"
              id="narration"
              value={narration}
              onChange={(e) => setNarration(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Charges</h3>
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
              className="form-control"
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
              <option value="P">P</option>
              <option value="C">C</option>
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
              <option value="CBMWise">CBMWise</option>
              <option value="PerCount">PerCount</option>
              <option value="GWTWise">GWTWise</option>
              <option value="CHGWTWise">CHGWTWise</option>
              <option value="PerUnit">PerUnit</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gstYn">GST (Y/N)</label>
            <select
              id="gstYn"
              value={gstYn}
              onChange={(e) => setGstYn(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="perUnit">Per Unit</label>
            <input
              type="text"
              id="perUnit"
              value={perUnit}
              onChange={(e) => setPerUnit(e.target.value)}
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
            <label htmlFor="rate">Rate</label>
            <input
              type="text"
              id="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="freight">Freight</label>
            <input
              type="text"
              id="freight"
              value={freight}
              onChange={(e) => setFreight(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="remarks">Remarks</label>
            <input
              type="text"
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cafPercent">CAF %</label>
            <input
              type="text"
              id="cafPercent"
              value={cafPercent}
              onChange={(e) => setCafPercent(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cafAmt">CAF. Amt</label>
            <input
              type="text"
              id="cafAmt"
              value={cafAmt}
              onChange={(e) => setCafAmt(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bafPercent">BAF %</label>
            <input
              type="text"
              id="bafPercent"
              value={bafPercent}
              onChange={(e) => setBafPercent(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bafAmt">BAF. Amt</label>
            <input
              type="text"
              id="bafAmt"
              value={bafAmt}
              onChange={(e) => setBafAmt(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ccPercent">CC %</label>
            <input
              type="text"
              id="ccPercent"
              value={ccPercent}
              onChange={(e) => setCcPercent(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ccAmt">CC. Amt</label>
            <input
              type="text"
              id="ccAmt"
              value={ccAmt}
              onChange={(e) => setCcAmt(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ccApply">CC APPLY</label>
            <select
              id="ccApply"
              value={ccApply}
              onChange={(e) => setCcApply(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cafApply">CAF Apply</label>
            <select
              id="cafApply"
              value={cafApply}
              onChange={(e) => setCafApply(e.target.value)}
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
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sacCode">SAC Code</label>
            <input
              type="text"
              id="sacCode"
              value={sacCode}
              onChange={(e) => setSacCode(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="vatPercent">VAT %</label>
            <input
              type="text"
              id="vatPercent"
              value={vatPercent}
              onChange={(e) => setVatPercent(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="vatAmt">VAT Amt.</label>
            <input
              type="text"
              id="vatAmt"
              value={vatAmt}
              onChange={(e) => setVatAmt(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cgst">CGST</label>
            <input
              type="text"
              id="cgst"
              value={cgst}
              onChange={(e) => setCgst(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sgst">SGST</label>
            <input
              type="text"
              id="sgst"
              value={sgst}
              onChange={(e) => setSgst(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="igst">IGST</label>
            <input
              type="text"
              id="igst"
              value={igst}
              onChange={(e) => setIgst(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="total">Total</label>
            <input
              type="text"
              id="total"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PurchaseInvoice;