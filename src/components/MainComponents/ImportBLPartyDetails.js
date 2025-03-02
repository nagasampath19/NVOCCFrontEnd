import React, { useState } from "react";

const ImportBLPartyDetails = () => {
  const [agentLeaseOwner, setAgentLeaseOwner] = useState("Select");
  const [overseas, setOverseas] = useState("Select");
  const [emptyYard, setEmptyYard] = useState("Select");
  const [shipper, setShipper] = useState("Select");
  const [consignee, setConsignee] = useState("");
  const [notify, setNotify] = useState("");
  const [cha, setCha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h3>Party Details</h3>
      <form onSubmit={handleSubmit} className="party-details-form">
        <div className="form-group">
          <label htmlFor="agentLeaseOwner">Agent/Lease Owner</label>
          <select
            id="agentLeaseOwner"
            value={agentLeaseOwner}
            onChange={(e) => setAgentLeaseOwner(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="overseas">Overseas</label>
          <select
            id="overseas"
            value={overseas}
            onChange={(e) => setOverseas(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="emptyYard">Empty Yard</label>
          <select
            id="emptyYard"
            value={emptyYard}
            onChange={(e) => setEmptyYard(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="shipper">Shipper</label>
          <select
            id="shipper"
            value={shipper}
            onChange={(e) => setShipper(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="consignee">Consignee</label>
          <input
            type="text"
            id="consignee"
            value={consignee}
            onChange={(e) => setConsignee(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notify">Notify</label>
          <input
            type="text"
            id="notify"
            value={notify}
            onChange={(e) => setNotify(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cha">CHA</label>
          <input
            type="text"
            id="cha"
            value={cha}
            onChange={(e) => setCha(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImportBLPartyDetails;
