import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles


const ContainerReleaseOrder = () => {
  const [activityType, setActivityType] = useState("Select");
  const [entryBy, setEntryBy] = useState("Select");
  const [deliveryOrderNumber, setDeliveryOrderNumber] = useState("");
  const [voyageNumber, setVoyageNumber] = useState("");
  const [oceanVessel, setOceanVessel] = useState("Select");
  const [deliveryOrderParty, setDeliveryOrderParty] = useState("Select");
  const [emptyYard, setEmptyYard] = useState("Select");
  const [salesPerson, setSalesPerson] = useState("Select");
  const [agentLeaseOwner, setAgentLeaseOwner] = useState("Select");
  const [shippingLine, setShippingLine] = useState("Select");
  const [slot, setSlot] = useState("");
  const [estimatedTimeOfDeparture, setEstimatedTimeOfDeparture] = useState("");
  const [estimatedTimeOfArrival, setEstimatedTimeOfArrival] = useState("");
  const [daysValid, setDaysValid] = useState("");
  const [validityDate, setValidityDate] = useState("");
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
  const [portOfReceipt, setPortOfReceipt] = useState("Select");
  const [portOfLoading, setPortOfLoading] = useState("Select");
  const [portOfDischarge, setPortOfDischarge] = useState("Select");
  const [transhipmentPort, setTranshipmentPort] = useState("Select");
  const [portOfFinalDestination, setPortOfFinalDestination] = useState("Select");
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
    <div className="step-container">
      <h2>Container Release Order (CRO)</h2>
      <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="activityType">Activity Type</label>
              <select
                id="activityType"
                value={activityType}
                onChange={(e) => setActivityType(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="From Container Inventory (CI)">From Container Inventory (CI)</option>
                <option value="From Ready For Export (RFE)">From Ready For Export (RFE)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="entryBy">Entry By</label>
              <select
                id="entryBy"
                value={entryBy}
                onChange={(e) => setEntryBy(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Enquiry">Enquiry</option>
                <option value="Nominated">Nominated</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="deliveryOrderNumber">Delivery Order Number</label>
              <input
                type="text"
                id="deliveryOrderNumber"
                value={deliveryOrderNumber}
                onChange={(e) => setDeliveryOrderNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="voyageNumber">Voyage Number</label>
              <input
                type="text"
                id="voyageNumber"
                value={voyageNumber}
                onChange={(e) => setVoyageNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="oceanVessel">Ocean Vessel</label>
              <select
                id="oceanVessel"
                value={oceanVessel}
                onChange={(e) => setOceanVessel(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContainerReleaseOrder;
