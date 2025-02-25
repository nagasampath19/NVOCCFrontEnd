import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles
import "./Estimation.css"; // Import the new CSS file for styling

const Estimation = () => {
  const [totalSellingRate, setTotalSellingRate] = useState("");
  const [totalBuyRate, setTotalBuyRate] = useState("");
  const [estimatedProfit, setEstimatedProfit] = useState("");
  const [approved, setApproved] = useState("Select");
  const [approvalDate, setApprovalDate] = useState("");
  const [approvedBy, setApprovedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Estimation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="totalSellingRate">Total Selling Rate</label>
              <input
                type="text"
                id="totalSellingRate"
                value={totalSellingRate}
                onChange={(e) => setTotalSellingRate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalBuyRate">Total Buy Rate</label>
              <input
                type="text"
                id="totalBuyRate"
                value={totalBuyRate}
                onChange={(e) => setTotalBuyRate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="estimatedProfit">Estimated Profit</label>
              <input
                type="text"
                id="estimatedProfit"
                value={estimatedProfit}
                onChange={(e) => setEstimatedProfit(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="approved">Approved</label>
              <select
                id="approved"
                value={approved}
                onChange={(e) => setApproved(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="approvalDate">Approval Date</label>
              <input
                type="date"
                id="approvalDate"
                value={approvalDate}
                onChange={(e) => setApprovalDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="approvedBy">Approved By</label>
              <input
                type="text"
                id="approvedBy"
                value={approvedBy}
                onChange={(e) => setApprovedBy(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Estimation;
