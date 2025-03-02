import React, { useState } from "react";

const ExportBLOtherDetails = () => {
  const [markAndNumbers, setMarkAndNumbers] = useState("");
  const [goodsDescription, setGoodsDescription] = useState("");
  const [demurageTerm, setDemurageTerm] = useState("");
  const [sbillNumber, setSbillNumber] = useState("");
  const [sbillDate, setSbillDate] = useState("");
  const [customerInvoiceNumber, setCustomerInvoiceNumber] = useState("");
  const [fullJobNumber, setFullJobNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h3>Other Details</h3>
      <form onSubmit={handleSubmit} className="other-details-form">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="markAndNumbers">Mark and Numbers</label>
              <input
                type="text"
                id="markAndNumbers"
                value={markAndNumbers}
                onChange={(e) => setMarkAndNumbers(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="goodsDescription">Goods Description</label>
              <input
                type="text"
                id="goodsDescription"
                value={goodsDescription}
                onChange={(e) => setGoodsDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="demurageTerm">Demurage Term</label>
              <input
                type="text"
                id="demurageTerm"
                value={demurageTerm}
                onChange={(e) => setDemurageTerm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sbillNumber">S/Bill Number</label>
              <input
                type="text"
                id="sbillNumber"
                value={sbillNumber}
                onChange={(e) => setSbillNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sbillDate">S/Bill Date</label>
              <input
                type="date"
                id="sbillDate"
                value={sbillDate}
                onChange={(e) => setSbillDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="customerInvoiceNumber">Customer Invoice Number</label>
              <input
                type="text"
                id="customerInvoiceNumber"
                value={customerInvoiceNumber}
                onChange={(e) => setCustomerInvoiceNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullJobNumber">Full Job Number</label>
              <input
                type="text"
                id="fullJobNumber"
                value={fullJobNumber}
                onChange={(e) => setFullJobNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExportBLOtherDetails;
