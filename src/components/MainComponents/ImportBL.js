import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles

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
      </form>
    </div>
  );
};

export default ImportBL;
