import React, { useState } from "react";

const OtherCharges = () => {
  const [party, setParty] = useState("Select");
  const [remarks, setRemarks] = useState("");
  const [containerDetails, setContainerDetails] = useState("");
  const [jobNo, setJobNo] = useState("");
  const [fullJobNo, setFullJobNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Other Charges</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
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
            <label htmlFor="containerDetails">Container Details</label>
            <textarea
              id="containerDetails"
              value={containerDetails}
              onChange={(e) => setContainerDetails(e.target.value)}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="jobNo">Job No</label>
            <input
              type="text"
              id="jobNo"
              value={jobNo}
              onChange={(e) => setJobNo(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullJobNo">Full Job No</label>
            <input
              type="text"
              id="fullJobNo"
              value={fullJobNo}
              onChange={(e) => setFullJobNo(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OtherCharges;
