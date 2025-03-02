import React, { useState } from "react";

const HSNDetails = () => {
  const [hsnHblNo, setHsnHblNo] = useState("");
  const [hsnCode, setHsnCode] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [totalPkgs, setTotalPkgs] = useState("");
  const [unCode, setUnCode] = useState("");
  const [imdgCode, setImdgCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h3>HSN Details</h3>
      <form onSubmit={handleSubmit} className="hsn-details-form">
        <div className="form-group">
          <label htmlFor="hsnHblNo">HSN HBL Number</label>
          <input
            type="text"
            id="hsnHblNo"
            value={hsnHblNo}
            onChange={(e) => setHsnHblNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hsnCode">HSN Code</label>
          <input
            type="text"
            id="hsnCode"
            value={hsnCode}
            onChange={(e) => setHsnCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemDescription">Item Description</label>
          <input
            type="text"
            id="itemDescription"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalPkgs">Total Packages</label>
          <input
            type="text"
            id="totalPkgs"
            value={totalPkgs}
            onChange={(e) => setTotalPkgs(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="unCode">UN Code</label>
          <input
            type="text"
            id="unCode"
            value={unCode}
            onChange={(e) => setUnCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imdgCode">IMDG Code</label>
          <input
            type="text"
            id="imdgCode"
            value={imdgCode}
            onChange={(e) => setImdgCode(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HSNDetails;
