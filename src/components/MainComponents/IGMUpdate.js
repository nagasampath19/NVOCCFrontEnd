import React, { useState } from "react";


const IGMUpdate = () => {
  const [vessel, setVessel] = useState("Select");
  const [voyageNumber, setVoyageNumber] = useState("Select");
  const [igmNo, setIgmNo] = useState("");
  const [igmDate, setIgmDate] = useState("");
  const [eta, setEta] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>IGM Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vessel">Vessel</label>
          <select
            id="vessel"
            value={vessel}
            onChange={(e) => setVessel(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="voyageNumber">Voyage Number</label>
          <select
            id="voyageNumber"
            value={voyageNumber}
            onChange={(e) => setVoyageNumber(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="igmNo">IGM No</label>
          <input
            type="text"
            id="igmNo"
            value={igmNo}
            onChange={(e) => setIgmNo(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="igmDate">IGM Date</label>
          <input
            type="date"
            id="igmDate"
            value={igmDate}
            onChange={(e) => setIgmDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eta">Estimated Time of Arrival</label>
          <input
            type="date"
            id="eta"
            value={eta}
            onChange={(e) => setEta(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrivalDate">Arrival Date</label>
          <input
            type="date"
            id="arrivalDate"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IGMUpdate;
