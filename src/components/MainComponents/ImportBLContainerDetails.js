import React, { useState } from "react";

const ImportBLContainerDetails = () => {
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
    <div className="form-section">
      <h3>Container Details</h3>
      <form onSubmit={handleSubmit} className="container-details-form">
        <div className="form-row">
          <div className="form-column">
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
              <label htmlFor="principal">Principal</label>
              <input
                type="text"
                id="principal"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </div>
          </div>
          <div className="form-column">
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImportBLContainerDetails;
