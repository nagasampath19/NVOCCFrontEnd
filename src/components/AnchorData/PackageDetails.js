import React, { useState } from "react";


const PackageDetails = () => {
  const [packageCode, setPackageCode] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Package Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="packageCode">Package Code</label>
          <input
            type="text"
            id="packageCode"
            value={packageCode}
            onChange={(e) => setPackageCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PackageDetails;
