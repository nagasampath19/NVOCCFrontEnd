import React, { useState } from "react";

const ExportBLCargoDetails = () => {
  const [quantity, setQuantity] = useState("");
  const [packageType, setPackageType] = useState("Select");
  const [freight, setFreight] = useState("Select");
  const [freightCharges, setFreightCharges] = useState("");
  const [netWeight, setNetWeight] = useState("");
  const [tareWeight, setTareWeight] = useState("");
  const [grossWeight, setGrossWeight] = useState("");
  const [volume, setVolume] = useState("Select");
  const [movement, setMovement] = useState("Select");
  const [cargoType, setCargoType] = useState("Select");
  const [eta, setEta] = useState("");
  const [etd, setEtd] = useState("");
  const [cbm, setCbm] = useState("");
  const [sailingDate, setSailingDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h3>Cargo Details</h3>
      <form onSubmit={handleSubmit} className="cargo-details-form">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="packageType">Package</label>
              <select
                id="packageType"
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="freight">Freight</label>
              <select
                id="freight"
                value={freight}
                onChange={(e) => setFreight(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Prepaid">Prepaid</option>
                <option value="To Be Collected">To Be Collected</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="freightCharges">Freight Charges</label>
              <input
                type="text"
                id="freightCharges"
                value={freightCharges}
                onChange={(e) => setFreightCharges(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="netWeight">Net Weight</label>
              <input
                type="text"
                id="netWeight"
                value={netWeight}
                onChange={(e) => setNetWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tareWeight">Tare Weight</label>
              <input
                type="text"
                id="tareWeight"
                value={tareWeight}
                onChange={(e) => setTareWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="grossWeight">Gross Weight</label>
              <input
                type="text"
                id="grossWeight"
                value={grossWeight}
                onChange={(e) => setGrossWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="volume">Volume</label>
              <select
                id="volume"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="movement">Movement</label>
              <select
                id="movement"
                value={movement}
                onChange={(e) => setMovement(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="CY/CY">CY/CY</option>
                <option value="CY/CFS">CY/CFS</option>
                <option value="CFS/CY">CFS/CY</option>
                <option value="CFS/CFS">CFS/CFS</option>
                <option value="CY/DOOR">CY/DOOR</option>
                <option value="DOOR/DOOR">DOOR/DOOR</option>
                <option value="DOOR/CY">DOOR/CY</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cargoType">Cargo Type</label>
              <select
                id="cargoType"
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="FCL/FCL">FCL/FCL</option>
                <option value="FCL/LCL">FCL/LCL</option>
                <option value="LCL/FCL">LCL/FCL</option>
                <option value="LCL/LCL">LCL/LCL</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="eta">Estimated Time of Arrival</label>
              <input
                type="date"
                id="eta"
                value={eta}
                onChange={(e) => setEta(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="etd">Estimated Time of Departure</label>
              <input
                type="date"
                id="etd"
                value={etd}
                onChange={(e) => setEtd(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cbm">CBM</label>
              <input
                type="text"
                id="cbm"
                value={cbm}
                onChange={(e) => setCbm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sailingDate">Sailing Date</label>
              <input
                type="date"
                id="sailingDate"
                value={sailingDate}
                onChange={(e) => setSailingDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExportBLCargoDetails;
