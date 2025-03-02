import React, { useState } from "react";

const OverseasAgent = () => {
  const [cargoType, setCargoType] = useState("Select");
  const [containerVolume, setContainerVolume] = useState("");
  const [gateOpen, setGateOpen] = useState("");
  const [cargoWeight, setCargoWeight] = useState("");
  const [cutOff, setCutOff] = useState("");
  const [deliveryOrderCancel, setDeliveryOrderCancel] = useState("Select");
  const [ventilation, setVentilation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [commodity, setCommodity] = useState("");
  const [humidity, setHumidity] = useState("");
  const [unNo, setUnNo] = useState("");
  const [hazClass, setHazClass] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [freight, setFreight] = useState("");
  const [packagingGroup, setPackagingGroup] = useState("");
  const [specialEqRemarks, setSpecialEqRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Overseas Agent</h2>
      <form onSubmit={handleSubmit} className="overseas-agent-form">
        <div className="form-group">
          <label htmlFor="cargoType">Cargo Type</label>
          <select
            id="cargoType"
            value={cargoType}
            onChange={(e) => setCargoType(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            <option value="Non-Haz">Non-Haz</option>
            <option value="Haz">Haz</option>
            <option value="Refeer">Refeer</option>
            <option value="Special Equipments">Special Equipments</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="containerVolume">Container Volume</label>
          <input
            type="text"
            id="containerVolume"
            value={containerVolume}
            onChange={(e) => setContainerVolume(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gateOpen">Gate Open</label>
          <input
            type="text"
            id="gateOpen"
            value={gateOpen}
            onChange={(e) => setGateOpen(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cargoWeight">Cargo Weight</label>
          <input
            type="text"
            id="cargoWeight"
            value={cargoWeight}
            onChange={(e) => setCargoWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cutOff">Cut Off</label>
          <input
            type="text"
            id="cutOff"
            value={cutOff}
            onChange={(e) => setCutOff(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryOrderCancel">Delivery Order Cancel</label>
          <select
            id="deliveryOrderCancel"
            value={deliveryOrderCancel}
            onChange={(e) => setDeliveryOrderCancel(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ventilation">Ventilation</label>
          <input
            type="text"
            id="ventilation"
            value={ventilation}
            onChange={(e) => setVentilation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="temperature">Temperature</label>
          <input
            type="text"
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="commodity">Commodity</label>
          <input
            type="text"
            id="commodity"
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="humidity">Humidity</label>
          <input
            type="text"
            id="humidity"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="unNo">UN NO</label>
          <input
            type="text"
            id="unNo"
            value={unNo}
            onChange={(e) => setUnNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hazClass">HAZ CLASS</label>
          <input
            type="text"
            id="hazClass"
            value={hazClass}
            onChange={(e) => setHazClass(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="referenceNo">Reference No</label>
          <input
            type="text"
            id="referenceNo"
            value={referenceNo}
            onChange={(e) => setReferenceNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="freight">Freight</label>
          <input
            type="text"
            id="freight"
            value={freight}
            onChange={(e) => setFreight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="packagingGroup">Packaging Group</label>
          <input
            type="text"
            id="packagingGroup"
            value={packagingGroup}
            onChange={(e) => setPackagingGroup(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialEqRemarks">Special Eq. Remarks / Haz Clause</label>
          <textarea
            id="specialEqRemarks"
            value={specialEqRemarks}
            onChange={(e) => setSpecialEqRemarks(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OverseasAgent;
