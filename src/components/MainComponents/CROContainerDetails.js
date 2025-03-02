import React, { useState } from "react";

const CROContainerDetails = () => {
  const [contCat, setContCat] = useState("Select");
  const [containerNo, setContainerNo] = useState("Select");
  const [size, setSize] = useState("Select");
  const [customerSealNumber, setCustomerSealNumber] = useState("");
  const [tareWeight, setTareWeight] = useState("");
  const [netWeight, setNetWeight] = useState("");
  const [capacity, setCapacity] = useState("");
  const [cargoSpecificGravity, setCargoSpecificGravity] = useState("");
  const [minimumFilling, setMinimumFilling] = useState("");
  const [maximumFilling, setMaximumFilling] = useState("");
  const [minimumFillingKgs, setMinimumFillingKgs] = useState("");
  const [maximumFillingKgs, setMaximumFillingKgs] = useState("");
  const [tankType, setTankType] = useState("Select");
  const [loadingDt, setLoadingDt] = useState("");
  const [loadingDate, setLoadingDate] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [gateIn, setGateIn] = useState("");
  const [icdHandOver, setIcdHandOver] = useState("");
  const [railout, setRailout] = useState("");
  const [terminal, setTerminal] = useState("");
  const [containerDeliveryNumber, setContainerDeliveryNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2>Container Details</h2>
      <form onSubmit={handleSubmit} className="container-details-form">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="contCat">Container Category</label>
              <select
                id="contCat"
                value={contCat}
                onChange={(e) => setContCat(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="TK">TK</option>
                <option value="HD">HD</option>
                <option value="HQ">HQ</option>
                <option value="GP">GP</option>
                <option value="OT">OT</option>
                <option value="RF">RF</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="containerNo">Container Number</label>
              <select
                id="containerNo"
                value={containerNo}
                onChange={(e) => setContainerNo(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="customerSealNumber">Customer Seal Number</label>
              <input
                type="text"
                id="customerSealNumber"
                value={customerSealNumber}
                onChange={(e) => setCustomerSealNumber(e.target.value)}
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
              <label htmlFor="netWeight">Net Weight</label>
              <input
                type="text"
                id="netWeight"
                value={netWeight}
                onChange={(e) => setNetWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="capacity">Capacity (Ltr)</label>
              <input
                type="text"
                id="capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cargoSpecificGravity">Cargo Specific Gravity</label>
              <input
                type="text"
                id="cargoSpecificGravity"
                value={cargoSpecificGravity}
                onChange={(e) => setCargoSpecificGravity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="icdHandOver">ICD Hand Over Date</label>
              <input
                type="date"
                id="icdHandOver"
                value={icdHandOver}
                onChange={(e) => setIcdHandOver(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="railout">Railout Date</label>
              <input
                type="date"
                id="railout"
                value={railout}
                onChange={(e) => setRailout(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="containerDeliveryNumber">Container Delivery Number</label>
              <input
                type="text"
                id="containerDeliveryNumber"
                value={containerDeliveryNumber}
                onChange={(e) => setContainerDeliveryNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="minimumFilling">Minimum Filling (Ltr)</label>
              <input
                type="text"
                id="minimumFilling"
                value={minimumFilling}
                onChange={(e) => setMinimumFilling(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="maximumFilling">Maximum Filling (Ltr)</label>
              <input
                type="text"
                id="maximumFilling"
                value={maximumFilling}
                onChange={(e) => setMaximumFilling(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="minimumFillingKgs">Minimum Filling (Kgs)</label>
              <input
                type="text"
                id="minimumFillingKgs"
                value={minimumFillingKgs}
                onChange={(e) => setMinimumFillingKgs(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="maximumFillingKgs">Maximum Filling (Kgs)</label>
              <input
                type="text"
                id="maximumFillingKgs"
                value={maximumFillingKgs}
                onChange={(e) => setMaximumFillingKgs(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tankType">Tank Type</label>
              <select
                id="tankType"
                value={tankType}
                onChange={(e) => setTankType(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Baffle">Baffle</option>
                <option value="Normal">Normal</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="loadingDt">Loading Dt (Ltr)</label>
              <input
                type="text"
                id="loadingDt"
                value={loadingDt}
                onChange={(e) => setLoadingDt(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="loadingDate">Loading Date</label>
              <input
                type="date"
                id="loadingDate"
                value={loadingDate}
                onChange={(e) => setLoadingDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pickUp">Pick Up Date</label>
              <input
                type="date"
                id="pickUp"
                value={pickUp}
                onChange={(e) => setPickUp(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gateIn">Gate In Date</label>
              <input
                type="date"
                id="gateIn"
                value={gateIn}
                onChange={(e) => setGateIn(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="terminal">Terminal Date</label>
              <input
                type="date"
                id="terminal"
                value={terminal}
                onChange={(e) => setTerminal(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CROContainerDetails;
