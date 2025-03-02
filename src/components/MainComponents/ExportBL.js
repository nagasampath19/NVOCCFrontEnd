import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles

const ExportBL = () => {
  const [jobNumber, setJobNumber] = useState("");
  const [bookingNumber, setBookingNumber] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [searchCRO, setSearchCRO] = useState("");
  const [oceanVessel, setOceanVessel] = useState("Select");
  const [voyageNumber, setVoyageNumber] = useState("");
  const [houseBLNumber, setHouseBLNumber] = useState("");
  const [masterBLNumber, setMasterBLNumber] = useState("");
  const [shipperDetails, setShipperDetails] = useState("");
  const [consigneeDetails, setConsigneeDetails] = useState("");
  const [notifyDetails, setNotifyDetails] = useState("");
  const [principle, setPrinciple] = useState("");
  const [portAC, setPortAC] = useState("");
  const [deliveryOrder, setDeliveryOrder] = useState("");
  const [surveyor, setSurveyor] = useState("");
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
  const [agentName, setAgentName] = useState("Select");
  const [blType, setBlType] = useState("Select");
  const [issuePlace, setIssuePlace] = useState("");
  const [noOfOrigin, setNoOfOrigin] = useState("");
  const [salesPerson, setSalesPerson] = useState("Select");
  const [slot, setSlot] = useState("");
  const [loadingPort, setLoadingPort] = useState("Select");
  const [dischargePort, setDischargePort] = useState("Select");
  const [receiptPort, setReceiptPort] = useState("Select");
  const [deliveryPort, setDeliveryPort] = useState("Select");
  const [refNo, setRefNo] = useState("");
  const [markAndNumbers, setMarkAndNumbers] = useState("");
  const [goodsDescription, setGoodsDescription] = useState("");
  const [demurageTerm, setDemurageTerm] = useState("");
  const [sbillNumber, setSbillNumber] = useState("");
  const [sbillDate, setSbillDate] = useState("");
  const [customerInvoiceNumber, setCustomerInvoiceNumber] = useState("");
  const [fullJobNumber, setFullJobNumber] = useState("");
  const [containerHBL, setContainerHBL] = useState("");
  const [containerNumber, setContainerNumber] = useState("");
  const [containerSize, setContainerSize] = useState("Select");
  const [customerSealNumber, setCustomerSealNumber] = useState("");
  const [containerNetWeight, setContainerNetWeight] = useState("");
  const [containerCbm, setContainerCbm] = useState("");
  const [containerGrossWeight, setContainerGrossWeight] = useState("");
  const [agentSealNumber, setAgentSealNumber] = useState("");
  const [currentJobNumber, setCurrentJobNumber] = useState("");
  const [totalPackage, setTotalPackage] = useState("");
  const [containerCargoType, setContainerCargoType] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [gateInDate, setGateInDate] = useState("");
  const [fclLcl, setFclLcl] = useState("Select");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Export BL</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>General Details</h3>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="jobNumber">Job Number</label>
                <input
                  type="text"
                  id="jobNumber"
                  value={jobNumber}
                  onChange={(e) => setJobNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bookingNumber">Booking Number</label>
                <input
                  type="text"
                  id="bookingNumber"
                  value={bookingNumber}
                  onChange={(e) => setBookingNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bookingDate">Booking Date</label>
                <input
                  type="date"
                  id="bookingDate"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="searchCRO">Search CRO</label>
                <input
                  type="text"
                  id="searchCRO"
                  value={searchCRO}
                  onChange={(e) => setSearchCRO(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="shipperDetails">Shipper Details</label>
                <input
                  type="text"
                  id="shipperDetails"
                  value={shipperDetails}
                  onChange={(e) => setShipperDetails(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="consigneeDetails">Consignee Details</label>
                <input
                  type="text"
                  id="consigneeDetails"
                  value={consigneeDetails}
                  onChange={(e) => setConsigneeDetails(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="notifyDetails">Notify Details</label>
                <input
                  type="text"
                  id="notifyDetails"
                  value={notifyDetails}
                  onChange={(e) => setNotifyDetails(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="principle">Principle</label>
                <input
                  type="text"
                  id="principle"
                  value={principle}
                  onChange={(e) => setPrinciple(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="portAC">Port A/C</label>
                <input
                  type="text"
                  id="portAC"
                  value={portAC}
                  onChange={(e) => setPortAC(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="deliveryOrder">Delivery Order</label>
                <input
                  type="text"
                  id="deliveryOrder"
                  value={deliveryOrder}
                  onChange={(e) => setDeliveryOrder(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="surveyor">Surveyor</label>
                <input
                  type="text"
                  id="surveyor"
                  value={surveyor}
                  onChange={(e) => setSurveyor(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3>Vessel Details</h3>
          <div className="form-row">
            <div className="form-column">
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
                <label htmlFor="voyageNumber">Voyage Number</label>
                <input
                  type="text"
                  id="voyageNumber"
                  value={voyageNumber}
                  onChange={(e) => setVoyageNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="houseBLNumber">House Bill of Lading Number (HBL)</label>
                <input
                  type="text"
                  id="houseBLNumber"
                  value={houseBLNumber}
                  onChange={(e) => setHouseBLNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="masterBLNumber">Master Bill of Lading (MBL)</label>
                <input
                  type="text"
                  id="masterBLNumber"
                  value={masterBLNumber}
                  onChange={(e) => setMasterBLNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3>Cargo Details</h3>
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
        </div>
        <div className="form-section">
          <h3>OverSeas Agent</h3>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="agentName">Agent Name</label>
                <select
                  id="agentName"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="blType">BL Type</label>
                <select
                  id="blType"
                  value={blType}
                  onChange={(e) => setBlType(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  <option value="Original">Original</option>
                  <option value="Seaway">Seaway</option>
                  <option value="RFS">RFS</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="issuePlace">Issue Place</label>
                <input
                  type="text"
                  id="issuePlace"
                  value={issuePlace}
                  onChange={(e) => setIssuePlace(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="noOfOrigin">No of Origin</label>
                <input
                  type="text"
                  id="noOfOrigin"
                  value={noOfOrigin}
                  onChange={(e) => setNoOfOrigin(e.target.value)}
                />
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
                <label htmlFor="slot">Slot</label>
                <input
                  type="text"
                  id="slot"
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3>Port Details</h3>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="loadingPort">Loading Port</label>
                <select
                  id="loadingPort"
                  value={loadingPort}
                  onChange={(e) => setLoadingPort(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dischargePort">Discharge Port</label>
                <select
                  id="dischargePort"
                  value={dischargePort}
                  onChange={(e) => setDischargePort(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="receiptPort">Receipt Port</label>
                <select
                  id="receiptPort"
                  value={receiptPort}
                  onChange={(e) => setReceiptPort(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="deliveryPort">Delivery Port</label>
                <select
                  id="deliveryPort"
                  value={deliveryPort}
                  onChange={(e) => setDeliveryPort(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="refNo">Ref No</label>
                <input
                  type="text"
                  id="refNo"
                  value={refNo}
                  onChange={(e) => setRefNo(e.target.value)}
                />
              </div>
              
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3>Other Details</h3>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="markAndNumbers">Mark and Numbers</label>
                <input
                  type="text"
                  id="markAndNumbers"
                  value={markAndNumbers}
                  onChange={(e) => setMarkAndNumbers(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="goodsDescription">Goods Description</label>
                <input
                  type="text"
                  id="goodsDescription"
                  value={goodsDescription}
                  onChange={(e) => setGoodsDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="demurageTerm">Demurage Term</label>
                <input
                  type="text"
                  id="demurageTerm"
                  value={demurageTerm}
                  onChange={(e) => setDemurageTerm(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sbillNumber">S/Bill Number</label>
                <input
                  type="text"
                  id="sbillNumber"
                  value={sbillNumber}
                  onChange={(e) => setSbillNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sbillDate">S/Bill Date</label>
                <input
                  type="date"
                  id="sbillDate"
                  value={sbillDate}
                  onChange={(e) => setSbillDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerInvoiceNumber">Customer Invoice Number</label>
                <input
                  type="text"
                  id="customerInvoiceNumber"
                  value={customerInvoiceNumber}
                  onChange={(e) => setCustomerInvoiceNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullJobNumber">Full Job Number</label>
                <input
                  type="text"
                  id="fullJobNumber"
                  value={fullJobNumber}
                  onChange={(e) => setFullJobNumber(e.target.value)}
                />
              </div>
              <div className="form-section">
                <h3>Container Details</h3>
                <div className="form-row">
                  <div className="form-column">
                    <div className="form-group">
                      <label htmlFor="containerHBL">Container HBL</label>
                      <input
                        type="text"
                        id="containerHBL"
                        value={containerHBL}
                        onChange={(e) => setContainerHBL(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="containerNumber">Container Number</label>
                      <input
                        type="text"
                        id="containerNumber"
                        value={containerNumber}
                        onChange={(e) => setContainerNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="containerSize">Container Size</label>
                      <select
                        id="containerSize"
                        value={containerSize}
                        onChange={(e) => setContainerSize(e.target.value)}
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
                      <label htmlFor="containerNetWeight">Container Net Weight</label>
                      <input
                        type="text"
                        id="containerNetWeight"
                        value={containerNetWeight}
                        onChange={(e) => setContainerNetWeight(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="containerCbm">Container CBM</label>
                      <input
                        type="text"
                        id="containerCbm"
                        value={containerCbm}
                        onChange={(e) => setContainerCbm(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="containerGrossWeight">Container Gross Weight</label>
                      <input
                        type="text"
                        id="containerGrossWeight"
                        value={containerGrossWeight}
                        onChange={(e) => setContainerGrossWeight(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="agentSealNumber">Agent Seal Number</label>
                      <input
                        type="text"
                        id="agentSealNumber"
                        value={agentSealNumber}
                        onChange={(e) => setAgentSealNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="currentJobNumber">Current Job Number</label>
                      <input
                        type="text"
                        id="currentJobNumber"
                        value={currentJobNumber}
                        onChange={(e) => setCurrentJobNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="totalPackage">Total Package</label>
                      <input
                        type="text"
                        id="totalPackage"
                        value={totalPackage}
                        onChange={(e) => setTotalPackage(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="containerCargoType">Container Cargo Type</label>
                      <input
                        type="text"
                        id="containerCargoType"
                        value={containerCargoType}
                        onChange={(e) => setContainerCargoType(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pickupDate">Pickup Date</label>
                      <input
                        type="date"
                        id="pickupDate"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gateInDate">Gate In Date</label>
                      <input
                        type="date"
                        id="gateInDate"
                        value={gateInDate}
                        onChange={(e) => setGateInDate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="fclLcl">FCL/LCL</label>
                      <select
                        id="fclLcl"
                        value={fclLcl}
                        onChange={(e) => setFclLcl(e.target.value)}
                        className="form-control"
                      >
                        <option value="Select">Select</option>
                        <option value="FCL">FCL</option>
                        <option value="LCL">LCL</option>
                        <option value="ETY">ETY</option>
                        <option value="AIR">AIR</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExportBL;
