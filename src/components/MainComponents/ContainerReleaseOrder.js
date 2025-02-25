import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles
import "./ContainerReleaseOrder.css"; // Import the new CSS file for styling

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
        <div className="form-row">
          <div className="form-column">
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
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="portOfReceipt">Port Of Receipt</label>
              <select
                id="portOfReceipt"
                value={portOfReceipt}
                onChange={(e) => setPortOfReceipt(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="portOfLoading">Port Of Loading</label>
              <select
                id="portOfLoading"
                value={portOfLoading}
                onChange={(e) => setPortOfLoading(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="portOfDischarge">Port Of Discharge</label>
              <select
                id="portOfDischarge"
                value={portOfDischarge}
                onChange={(e) => setPortOfDischarge(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="transhipmentPort">Transhipment Port</label>
              <select
                id="transhipmentPort"
                value={transhipmentPort}
                onChange={(e) => setTranshipmentPort(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="portOfFinalDestination">Port Of Final Destination</label>
              <select
                id="portOfFinalDestination"
                value={portOfFinalDestination}
                onChange={(e) => setPortOfFinalDestination(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contCat">Cont Category</label>
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
              <label htmlFor="pickUp">Pick Up</label>
              <input
                type="date"
                id="pickUp"
                value={pickUp}
                onChange={(e) => setPickUp(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gateIn">Gate In</label>
              <input
                type="date"
                id="gateIn"
                value={gateIn}
                onChange={(e) => setGateIn(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="icdHandOver">ICD HandOver</label>
              <input
                type="date"
                id="icdHandOver"
                value={icdHandOver}
                onChange={(e) => setIcdHandOver(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="railout">Railout</label>
              <input
                type="date"
                id="railout"
                value={railout}
                onChange={(e) => setRailout(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="terminal">Terminal</label>
              <input
                type="date"
                id="terminal"
                value={terminal}
                onChange={(e) => setTerminal(e.target.value)}
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
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContainerReleaseOrder;
