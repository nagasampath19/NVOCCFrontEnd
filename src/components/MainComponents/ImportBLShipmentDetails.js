import React, { useState } from "react";

const ImportBLShipmentDetails = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-section">
      <h3>Shipment Details</h3>
      <form onSubmit={handleSubmit} className="shipment-details-form">
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
          </div>
          <div className="form-column">
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
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImportBLShipmentDetails;
