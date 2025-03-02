import React, { useState } from "react";

const Party = () => {
  const [deliveryOrderParty, setDeliveryOrderParty] = useState("Select");
  const [emptyYard, setEmptyYard] = useState("Select");
  const [salesPerson, setSalesPerson] = useState("Select");
  const [agentLeaseOwner, setAgentLeaseOwner] = useState("Select");
  const [shippingLine, setShippingLine] = useState("Select");
  const [slot, setSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Party Details</h2>
      <form onSubmit={handleSubmit} className="party-form">
        <div className="form-group">
          <label htmlFor="deliveryOrderParty">Delivery Order Party</label>
          <select
            id="deliveryOrderParty"
            value={deliveryOrderParty}
            onChange={(e) => setDeliveryOrderParty(e.target.value)}
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
          <label htmlFor="agentLeaseOwner">Agent / Lease Owner</label>
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
          <label htmlFor="shippingLine">Shipping Line</label>
          <select
            id="shippingLine"
            value={shippingLine}
            onChange={(e) => setShippingLine(e.target.value)}
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Party;
