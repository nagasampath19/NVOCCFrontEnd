import React, { useState } from "react";

const ExportBLOverSeasAgent = () => {
  const [agentName, setAgentName] = useState("Select");
  const [blType, setBlType] = useState("Select");
  const [issuePlace, setIssuePlace] = useState("");
  const [noOfOrigin, setNoOfOrigin] = useState("");
  const [salesPerson, setSalesPerson] = useState("Select");
  const [slot, setSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h3>OverSeas Agent</h3>
      <form onSubmit={handleSubmit} className="overseas-agent-form">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="agentName">Agent Name</label>
              <select
                id="agentName"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="blType">BL Type</label>
              <select
                id="blType"
                value={blType}
                onChange={(e) => setBlType(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Original">Original</option>
                <option value="Seaway">Seaway</option>
                <option value="RFS">RFS</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="issuePlace">Issue Place</label>
              <input
                type="text"
                id="issuePlace"
                value={issuePlace}
                onChange={(e) => setIssuePlace(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="noOfOrigin">No of Origin</label>
              <input
                type="text"
                id="noOfOrigin"
                value={noOfOrigin}
                onChange={(e) => setNoOfOrigin(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="salesPerson">Sales Person</label>
              <select
                id="salesPerson"
                value={salesPerson}
                onChange={(e) => setSalesPerson(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="slot">Slot</label>
              <input
                type="text"
                id="slot"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExportBLOverSeasAgent;
