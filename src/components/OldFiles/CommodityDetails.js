import React, { useState } from "react";
import "../css/ShipperDetails.css"; // Assuming ShipperDetails.css contains the desired styles

const CommodityDetails = () => {
  const [name, setName] = useState("");
  const [imoCode, setImoCode] = useState("");
  const [unoCode, setUnoCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Commodity Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imoCode">IMO Code/Class</label>
          <input
            type="text"
            id="imoCode"
            value={imoCode}
            onChange={(e) => setImoCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="unoCode">Uno Code</label>
          <input
            type="text"
            id="unoCode"
            value={unoCode}
            onChange={(e) => setUnoCode(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommodityDetails;
