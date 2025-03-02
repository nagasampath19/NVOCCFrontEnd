import React, { useState } from "react";

const CargoDetails = () => {
  const [estimatedTimeOfDeparture, setEstimatedTimeOfDeparture] = useState("");
  const [estimatedTimeOfArrival, setEstimatedTimeOfArrival] = useState("");
  const [daysValid, setDaysValid] = useState("");
  const [validityDate, setValidityDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Cargo Details</h2>
      <form onSubmit={handleSubmit} className="cargo-details-form">
        <div className="form-group">
          <label htmlFor="estimatedTimeOfDeparture">Estimated Time of Departure</label>
          <input
            type="date"
            id="estimatedTimeOfDeparture"
            value={estimatedTimeOfDeparture}
            onChange={(e) => setEstimatedTimeOfDeparture(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="estimatedTimeOfArrival">Estimated Time of Arrival</label>
          <input
            type="date"
            id="estimatedTimeOfArrival"
            value={estimatedTimeOfArrival}
            onChange={(e) => setEstimatedTimeOfArrival(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="daysValid">Days Valid</label>
          <input
            type="text"
            id="daysValid"
            value={daysValid}
            onChange={(e) => setDaysValid(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="validityDate">Validity Date</label>
          <input
            type="date"
            id="validityDate"
            value={validityDate}
            onChange={(e) => setValidityDate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CargoDetails;
