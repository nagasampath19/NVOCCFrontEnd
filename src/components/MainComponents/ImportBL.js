import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles
import "./ImportBL.css"; // Import the new CSS file for styling

const ImportBL = () => {
  const [blIssuedBy, setBlIssuedBy] = useState("Select");
  const [jobNumber, setJobNumber] = useState("");
  const [cargoCustomer, setCargoCustomer] = useState("Select");
  const [mblNumber, setMblNumber] = useState("");
  const [mblDate, setMblDate] = useState("");
  const [hblNumber, setHblNumber] = useState("");
  const [hblDate, setHblDate] = useState("");
  const [igmNumber, setIgmNumber] = useState("");
  const [igmDate, setIgmDate] = useState("");
  const [itemNumber, setItemNumber] = useState("");
  const [subItemNumber, setSubItemNumber] = useState("");
  const [voyageNumber, setVoyageNumber] = useState("");
  const [berthArrivalDate, setBerthArrivalDate] = useState("");
  const [vesselName, setVesselName] = useState("Select");
  const [eta, setEta] = useState("");
  const [etd, setEtd] = useState("");
  const [rotationNumber, setRotationNumber] = useState("");
  const [demurrageAmount, setDemurrageAmount] = useState("");
  const [hsnCodeHbl, setHsnCodeHbl] = useState("");
  const [commodity, setCommodity] = useState("Select");
  const [imoClass, setImoClass] = useState("");
  const [unoCd, setUnoCd] = useState("");
  const [quantity, setQuantity] = useState("");
  const [packageType, setPackageType] = useState("Select");
  const [freight, setFreight] = useState("Select");
  const [grossWeight, setGrossWeight] = useState("");
  const [cbm, setCbm] = useState("");
  const [cargo, setCargo] = useState("Select");
  const [material, setMaterial] = useState("Select");
  const [delType, setDelType] = useState("Select");
  const [freeDays, setFreeDays] = useState("");
  const [hblType, setHblType] = useState("Select");
  const [carrierBond, setCarrierBond] = useState("");
  const [carrierPan, setCarrierPan] = useState("");
  const [dpd, setDpd] = useState("Select");
  const [movement, setMovement] = useState("Select");
  const [cfsYard, setCfsYard] = useState("Select");
  const [terminalPort, setTerminalPort] = useState("Select");
  const [gstType, setGstType] = useState("");
  const [loadingPort, setLoadingPort] = useState("Select");
  const [dischargePort, setDischargePort] = useState("Select");
  const [deliveryPort, setDeliveryPort] = useState("Select");
  const [destinationPort, setDestinationPort] = useState("Select");
  const [agentLeaseOwner, setAgentLeaseOwner] = useState("Select");
  const [overseas, setOverseas] = useState("Select");
  const [emptyYard, setEmptyYard] = useState("Select");
  const [shipper, setShipper] = useState("Select");
  const [consignee, setConsignee] = useState("");
  const [notify, setNotify] = useState("");
  const [cha, setCha] = useState("");
  const [markAndNumbers, setMarkAndNumbers] = useState("");
  const [goodsDescription, setGoodsDescription] = useState("");
  const [oblNumber, setOblNumber] = useState("");
  const [oblDate, setOblDate] = useState("");
  const [refNo, setRefNo] = useState("");
  const [deliveryOrderDate, setDeliveryOrderDate] = useState("");
  const [surveyorGateOut, setSurveyorGateOut] = useState("");
  const [deliveryOrderValidityDate, setDeliveryOrderValidityDate] = useState("");
  const [surveyorGateIn, setSurveyorGateIn] = useState("");
  const [netWeight, setNetWeight] = useState("");
  const [invoiceValue, setInvoiceValue] = useState("");
  const [modeOfTransport, setModeOfTransport] = useState("Select");
  const [hsnHblNo, setHsnHblNo] = useState("");
  const [hsnCode, setHsnCode] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [totalPkgs, setTotalPkgs] = useState("");
  const [unCode, setUnCode] = useState("");
  const [imdgCode, setImdgCode] = useState("");
  const [containerHbl, setContainerHbl] = useState("");
  const [containerNumber, setContainerNumber] = useState("");
  const [containerSize, setContainerSize] = useState("Select");
  const [sealNo, setSealNo] = useState("");
  const [containerGrossWeight, setContainerGrossWeight] = useState("");
  const [containerCbm, setContainerCbm] = useState("");
  const [refer, setRefer] = useState("Select");
  const [fclLcl, setFclLcl] = useState("Select");
  const [totalPackage, setTotalPackage] = useState("");
  const [containerCargoType, setContainerCargoType] = useState("Select");
  const [pcDate, setPcDate] = useState("");
  const [freeDaysContainer, setFreeDaysContainer] = useState("");
  const [containerHsnCode, setContainerHsnCode] = useState("");
  const [tareWeight, setTareWeight] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [validityDate, setValidityDate] = useState("");
  const [pcNo, setPcNo] = useState("");
  const [imoCode, setImoCode] = useState("");
  const [unCore, setUnCore] = useState("");
  const [tpIcd, setTpIcd] = useState("");
  const [soc, setSoc] = useState("Select");
  const [pol, setPol] = useState("");
  const [ventilation, setVentilation] = useState("");
  const [printed, setPrinted] = useState("");
  const [selected, setSelected] = useState("");
  const [pod, setPod] = useState("");
  const [previousDays, setPreviousDays] = useState("");
  const [principal, setPrincipal] = useState("");
  const [fullJobNumberContainer, setFullJobNumberContainer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Import BL</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="blIssuedBy">BL Issued By</label>
                <select
                  id="blIssuedBy"
                  value={blIssuedBy}
                  onChange={(e) => setBlIssuedBy(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  <option value="Forwarder">Forwarder</option>
                  <option value="NVOCC">NVOCC</option>
                </select>
              </div>
            </div>
          </div>
        </div>
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
                <label htmlFor="cargoCustomer">Cargo (Customer)</label>
                <select
                  id="cargoCustomer"
                  value={cargoCustomer}
                  onChange={(e) => setCargoCustomer(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  <option value="FCL">FCL</option>
                  <option value="LCL">LCL</option>
                  <option value="ETY">ETY</option>
                  <option value="AIR">AIR</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mblNumber">Master Bill of Lading (MBL) Number</label>
                <input
                  type="text"
                  id="mblNumber"
                  value={mblNumber}
                  onChange={(e) => setMblNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mblDate">Master Bill of Lading (MBL) Date</label>
                <input
                  type="date"
                  id="mblDate"
                  value={mblDate}
                  onChange={(e) => setMblDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hblNumber">House Bill of Lading (HBL) Number</label>
                <input
                  type="text"
                  id="hblNumber"
                  value={hblNumber}
                  onChange={(e) => setHblNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hblDate">House Bill of Lading (HBL) Date</label>
                <input
                  type="date"
                  id="hblDate"
                  value={hblDate}
                  onChange={(e) => setHblDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="igmNumber">IGM Number</label>
                <input
                  type="text"
                  id="igmNumber"
                  value={igmNumber}
                  onChange={(e) => setIgmNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="igmDate">IGM Date</label>
                <input
                  type="date"
                  id="igmDate"
                  value={igmDate}
                  onChange={(e) => setIgmDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemNumber">Item Number</label>
                <input
                  type="text"
                  id="itemNumber"
                  value={itemNumber}
                  onChange={(e) => setItemNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subItemNumber">Sub Item Number</label>
                <input
                  type="text"
                  id="subItemNumber"
                  value={subItemNumber}
                  onChange={(e) => setSubItemNumber(e.target.value)}
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
                <label htmlFor="berthArrivalDate">Berth/Arrival Date</label>
                <input
                  type="date"
                  id="berthArrivalDate"
                  value={berthArrivalDate}
                  onChange={(e) => setBerthArrivalDate(e.target.value)}
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
                <label htmlFor="vesselName">Vessel Name</label>
                <select
                  id="vesselName"
                  value={vesselName}
                  onChange={(e) => setVesselName(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="eta">Estimate Time of Arrival</label>
                <input
                  type="date"
                  id="eta"
                  value={eta}
                  onChange={(e) => setEta(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="etd">Estimate Time of Departure</label>
                <input
                  type="date"
                  id="etd"
                  value={etd}
                  onChange={(e) => setEtd(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="rotationNumber">Rotation Number</label>
                <input
                  type="text"
                  id="rotationNumber"
                  value={rotationNumber}
                  onChange={(e) => setRotationNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="demurrageAmount">Demurrage Amount</label>
                <input
                  type="text"
                  id="demurrageAmount"
                  value={demurrageAmount}
                  onChange={(e) => setDemurrageAmount(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hsnCodeHbl">HSN Code HBL</label>
                <input
                  type="text"
                  id="hsnCodeHbl"
                  value={hsnCodeHbl}
                  onChange={(e) => setHsnCodeHbl(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="commodity">Commodity</label>
                <select
                  id="commodity"
                  value={commodity}
                  onChange={(e) => setCommodity(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="imoClass">IMO/Class</label>
                <input
                  type="text"
                  id="imoClass"
                  value={imoClass}
                  onChange={(e) => setImoClass(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="unoCd">UNO CD</label>
                <input
                  type="text"
                  id="unoCd"
                  value={unoCd}
                  onChange={(e) => setUnoCd(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3>Shipment Details</h3>
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
                  <option value="P">P</option>
                  <option value="S">S</option>
                </select>
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
                <label htmlFor="cbm">CBM</label>
                <input
                  type="text"
                  id="cbm"
                  value={cbm}
                  onChange={(e) => setCbm(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cargo">Cargo</label>
                <select
                  id="cargo"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  <option value="Local">Local</option>
                  <option value="SMTP">SMTP</option>
                  <option value="TP">TP</option>
                  <option value="UB">UB</option>
                  <option value="GOVT">GOVT</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="material">Material</label>
                <select
                  id="material"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="delType">Delivery Type</label>
                <select
                  id="delType"
                  value={delType}
                  onChange={(e) => setDelType(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  <option value="Direct">Direct</option>
                  <option value="Transhipment">Transhipment</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="freeDays">Free Days</label>
                <input
                  type="text"
                  id="freeDays"
                  value={freeDays}
                  onChange={(e) => setFreeDays(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hblType">HBL Type</label>
                <select
                  id="hblType"
                  value={hblType}
                  onChange={(e) => setHblType(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  <option value="Original">Original</option>
                  <option value="Seaway">Seaway</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="carrierBond">Carrier Bond</label>
                <input
                  type="text"
                  id="carrierBond"
                  value={carrierBond}
                  onChange={(e) => setCarrierBond(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="carrierPan">Carrier PAN</label>
                <input
                  type="text"
                  id="carrierPan"
                  value={carrierPan}
                  onChange={(e) => setCarrierPan(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dpd">DPD</label>
                <select
                  id="dpd"
                  value={dpd}
                  onChange={(e) => setDpd(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
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
                  <option value="Road">Road</option>
                  <option value="Rail">Rail</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cfsYard">CFS/Yard</label>
                <select
                  id="cfsYard"
                  value={cfsYard}
                  onChange={(e) => setCfsYard(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="terminalPort">Terminal/Port</label>
                <select
                  id="terminalPort"
                  value={terminalPort}
                  onChange={(e) => setTerminalPort(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="gstType">GST Type</label>
                <input
                  type="text"
                  id="gstType"
                  value={gstType}
                  onChange={(e) => setGstType(e.target.value)}
                />
              </div>
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
                <label htmlFor="destinationPort">Destination Port</label>
                <select
                  id="destinationPort"
                  value={destinationPort}
                  onChange={(e) => setDestinationPort(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="agentLeaseOwner">Agent/Lease Owner</label>
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
                <label htmlFor="overseas">Overseas</label>
                <select
                  id="overseas"
                  value={overseas}
                  onChange={(e) => setOverseas(e.target.value)}
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
                <label htmlFor="shipper">Shipper</label>
                <select
                  id="shipper"
                  value={shipper}
                  onChange={(e) => setShipper(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="consignee">Consignee</label>
                <input
                  type="text"
                  id="consignee"
                  value={consignee}
                  onChange={(e) => setConsignee(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="notify">Notify</label>
                <input
                  type="text"
                  id="notify"
                  value={notify}
                  onChange={(e) => setNotify(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cha">CHA</label>
                <input
                  type="text"
                  id="cha"
                  value={cha}
                  onChange={(e) => setCha(e.target.value)}
                />
              </div>
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
                <label htmlFor="oblNumber">OBL Number</label>
                <input
                  type="text"
                  id="oblNumber"
                  value={oblNumber}
                  onChange={(e) => setOblNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="oblDate">OBL Date</label>
                <input
                  type="date"
                  id="oblDate"
                  value={oblDate}
                  onChange={(e) => setOblDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="refNo">Reference Number</label>
                <input
                  type="text"
                  id="refNo"
                  value={refNo}
                  onChange={(e) => setRefNo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="deliveryOrderDate">Delivery Order Date</label>
                <input
                  type="date"
                  id="deliveryOrderDate"
                  value={deliveryOrderDate}
                  onChange={(e) => setDeliveryOrderDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="surveyorGateOut">Surveyor Gate Out</label>
                <input
                  type="text"
                  id="surveyorGateOut"
                  value={surveyorGateOut}
                  onChange={(e) => setSurveyorGateOut(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="deliveryOrderValidityDate">Delivery Order Validity Date</label>
                <input
                  type="date"
                  id="deliveryOrderValidityDate"
                  value={deliveryOrderValidityDate}
                  onChange={(e) => setDeliveryOrderValidityDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="surveyorGateIn">Surveyor Gate In</label>
                <input
                  type="text"
                  id="surveyorGateIn"
                  value={surveyorGateIn}
                  onChange={(e) => setSurveyorGateIn(e.target.value)}
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
                <label htmlFor="invoiceValue">Invoice Value</label>
                <input
                  type="text"
                  id="invoiceValue"
                  value={invoiceValue}
                  onChange={(e) => setInvoiceValue(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="modeOfTransport">Mode of Transport</label>
                <select
                  id="modeOfTransport"
                  value={modeOfTransport}
                  onChange={(e) => setModeOfTransport(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="hsnHblNo">HSN HBL Number</label>
                <input
                  type="text"
                  id="hsnHblNo"
                  value={hsnHblNo}
                  onChange={(e) => setHsnHblNo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hsnCode">HSN Code</label>
                <input
                  type="text"
                  id="hsnCode"
                  value={hsnCode}
                  onChange={(e) => setHsnCode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemDescription">Item Description</label>
                <input
                  type="text"
                  id="itemDescription"
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalPkgs">Total Packages</label>
                <input
                  type="text"
                  id="totalPkgs"
                  value={totalPkgs}
                  onChange={(e) => setTotalPkgs(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="unCode">UN Code</label>
                <input
                  type="text"
                  id="unCode"
                  value={unCode}
                  onChange={(e) => setUnCode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imdgCode">IMDG Code</label>
                <input
                  type="text"
                  id="imdgCode"
                  value={imdgCode}
                  onChange={(e) => setImdgCode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="containerHbl">Container HBL</label>
                <input
                  type="text"
                  id="containerHbl"
                  value={containerHbl}
                  onChange={(e) => setContainerHbl(e.target.value)}
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
                <label htmlFor="sealNo">Seal Number</label>
                <input
                  type="text"
                  id="sealNo"
                  value={sealNo}
                  onChange={(e) => setSealNo(e.target.value)}
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
                <label htmlFor="containerCbm">Container CBM</label>
                <input
                  type="text"
                  id="containerCbm"
                  value={containerCbm}
                  onChange={(e) => setContainerCbm(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="refer">Refer</label>
                <select
                  id="refer"
                  value={refer}
                  onChange={(e) => setRefer(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
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
                </select>
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
                <select
                  id="containerCargoType"
                  value={containerCargoType}
                  onChange={(e) => setContainerCargoType(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="pcDate">PC Date</label>
                <input
                  type="date"
                  id="pcDate"
                  value={pcDate}
                  onChange={(e) => setPcDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="freeDaysContainer">Free Days Container</label>
                <input
                  type="text"
                  id="freeDaysContainer"
                  value={freeDaysContainer}
                  onChange={(e) => setFreeDaysContainer(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="containerHsnCode">Container HSN Code</label>
                <input
                  type="text"
                  id="containerHsnCode"
                  value={containerHsnCode}
                  onChange={(e) => setContainerHsnCode(e.target.value)}
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
                <label htmlFor="temperature">Temperature</label>
                <input
                  type="text"
                  id="temperature"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
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
                <label htmlFor="validityDate">Validity Date</label>
                <input
                  type="date"
                  id="validityDate"
                  value={validityDate}
                  onChange={(e) => setValidityDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pcNo">PC Number</label>
                <input
                  type="text"
                  id="pcNo"
                  value={pcNo}
                  onChange={(e) => setPcNo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imoCode">IMO Code</label>
                <input
                  type="text"
                  id="imoCode"
                  value={imoCode}
                  onChange={(e) => setImoCode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="unCore">UN Core</label>
                <input
                  type="text"
                  id="unCore"
                  value={unCore}
                  onChange={(e) => setUnCore(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tpIcd">TP ICD</label>
                <input
                  type="text"
                  id="tpIcd"
                  value={tpIcd}
                  onChange={(e) => setTpIcd(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="soc">SOC</label>
                <select
                  id="soc"
                  value={soc}
                  onChange={(e) => setSoc(e.target.value)}
                  className="form-control"
                >
                  <option value="Select">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="pol">POL</label>
                <input
                  type="text"
                  id="pol"
                  value={pol}
                  onChange={(e) => setPol(e.target.value)}
                />
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
                <label htmlFor="printed">Printed</label>
                <input
                  type="text"
                  id="printed"
                  value={printed}
                  onChange={(e) => setPrinted(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="selected">Selected</label>
                <input
                  type="text"
                  id="selected"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pod">POD</label>
                <input
                  type="text"
                  id="pod"
                  value={pod}
                  onChange={(e) => setPod(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="previousDays">Previous Days</label>
                <input
                  type="text"
                  id="previousDays"
                  value={previousDays}
                  onChange={(e) => setPreviousDays(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="principal">Principal</label>
                <input
                  type="text"
                  id="principal"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullJobNumberContainer">Full Job Number Container</label>
                <input
                  type="text"
                  id="fullJobNumberContainer"
                  value={fullJobNumberContainer}
                  onChange={(e) => setFullJobNumberContainer(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImportBL;
