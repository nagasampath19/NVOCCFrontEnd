import React, { useState } from "react";

const PurchasePayment = () => {
  const [billingParty, setBillingParty] = useState("");
  const [invoiceFinancialYear, setInvoiceFinancialYear] = useState("");
  const [ppDate, setPpDate] = useState("");
  const [ppNo, setPpNo] = useState("");
  const [accountType, setAccountType] = useState("Select");
  const [cashBankNeftDetails, setCashBankNeftDetails] = useState("");
  const [neftChequeDate, setNeftChequeDate] = useState("");
  const [bankName, setBankName] = useState("");
  const [totalAmountPayable, setTotalAmountPayable] = useState("");
  const [paymentBillingParty, setPaymentBillingParty] = useState("");
  const [invoiceType, setInvoiceType] = useState("Select");
  const [invoiceAmountWithoutGst, setInvoiceAmountWithoutGst] = useState("");
  const [invoiceAmountWithGst, setInvoiceAmountWithGst] = useState("");
  const [purInvoiceNumber, setPurInvoiceNumber] = useState("");
  const [paymentType, setPaymentType] = useState("Select");
  const [tdsPercentage, setTdsPercentage] = useState("Select");
  const [tdsAmount, setTdsAmount] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [actualAmountPaid, setActualAmountPaid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Purchase Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="billingParty">Billing Party</label>
            <input
              type="text"
              id="billingParty"
              value={billingParty}
              onChange={(e) => setBillingParty(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceFinancialYear">Invoice Financial Year</label>
            <input
              type="text"
              id="invoiceFinancialYear"
              value={invoiceFinancialYear}
              onChange={(e) => setInvoiceFinancialYear(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ppDate">P.P. Date</label>
            <input
              type="date"
              id="ppDate"
              value={ppDate}
              onChange={(e) => setPpDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ppNo">P.P. No</label>
            <input
              type="text"
              id="ppNo"
              value={ppNo}
              onChange={(e) => setPpNo(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountType">Account Type</label>
            <select
              id="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="ON ACCOUNT">ON ACCOUNT</option>
              <option value="NEFT/CASH">NEFT/CASH</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cashBankNeftDetails">Cash/Bank/Neft Details</label>
            <input
              type="text"
              id="cashBankNeftDetails"
              value={cashBankNeftDetails}
              onChange={(e) => setCashBankNeftDetails(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="neftChequeDate">Neft/Cheque Date</label>
            <input
              type="date"
              id="neftChequeDate"
              value={neftChequeDate}
              onChange={(e) => setNeftChequeDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              id="bankName"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalAmountPayable">Total Amount Payable</label>
            <input
              type="text"
              id="totalAmountPayable"
              value={totalAmountPayable}
              onChange={(e) => setTotalAmountPayable(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentBillingParty">Billing Party</label>
            <input
              type="text"
              id="paymentBillingParty"
              value={paymentBillingParty}
              onChange={(e) => setPaymentBillingParty(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Payment Details</h3>
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
              <option value="Debit Note (OVR)">Debit Note (OVR)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="invoiceAmountWithoutGst">Invoice Amount (Without GST)</label>
            <input
              type="text"
              id="invoiceAmountWithoutGst"
              value={invoiceAmountWithoutGst}
              onChange={(e) => setInvoiceAmountWithoutGst(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceAmountWithGst">Invoice Amount (With GST)</label>
            <input
              type="text"
              id="invoiceAmountWithGst"
              value={invoiceAmountWithGst}
              onChange={(e) => setInvoiceAmountWithGst(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="purInvoiceNumber">Pur. Invoice Number</label>
            <input
              type="text"
              id="purInvoiceNumber"
              value={purInvoiceNumber}
              onChange={(e) => setPurInvoiceNumber(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentType">Payment Type</label>
            <select
              id="paymentType"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="Full Payment">Full Payment</option>
              <option value="Part Payment">Part Payment</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="tdsPercentage">TDS Percentage (%)</label>
            <select
              id="tdsPercentage"
              value={tdsPercentage}
              onChange={(e) => setTdsPercentage(e.target.value)}
              className="form-control"
            >
              <option value="Select">Select</option>
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="1.50">1.50</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="tdsAmount">TDS Amount</label>
            <input
              type="text"
              id="tdsAmount"
              value={tdsAmount}
              onChange={(e) => setTdsAmount(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentAmount">Payment Amount</label>
            <input
              type="text"
              id="paymentAmount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="actualAmountPaid">Actual Amount Paid</label>
            <input
              type="text"
              id="actualAmountPaid"
              value={actualAmountPaid}
              onChange={(e) => setActualAmountPaid(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PurchasePayment;
