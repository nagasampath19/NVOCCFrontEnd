import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles

const ContainerDetails = () => {
  const [containerNo, setContainerNo] = useState("");
  const [size, setSize] = useState("");
  const [containerType, setContainerType] = useState("Dry / General Purpose");
  const [otherContainerType, setOtherContainerType] = useState("");
  const [agentLeaseOwner, setAgentLeaseOwner] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [yearOfMaking, setYearOfMaking] = useState("");
  const [onOffHire, setOnOffHire] = useState("On Hire");
  const [onHireDate, setOnHireDate] = useState("");
  const [inventoryType, setInventoryType] = useState("Select");
  const [location, setLocation] = useState("Select");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [freeDays, setFreeDays] = useState("");
  const [pickUpCharge, setPickUpCharge] = useState("");
  const [pickUpCredit, setPickUpCredit] = useState("");
  const [leasePurchaseStartDate, setLeasePurchaseStartDate] = useState("");
  const [leasePurchaseEndDate, setLeasePurchaseEndDate] = useState("");
  const [offHireLocationSold, setOffHireLocationSold] = useState("");
  const [offHireSoldDate, setOffHireSoldDate] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [newContainerType, setNewContainerType] = useState("");
  const [description, setDescription] = useState("");
  const [isoCode, setIsoCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleAddSize = () => {
    setShowPopup(true);
  };

  const handleSaveSize = () => {
    // Handle save size logic
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="step-container">
      <h2>Container Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="containerNo">Container Number</label>
          <input
            type="text"
            id="containerNo"
            value={containerNo}
            onChange={(e) => setContainerNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Container Size</label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="form-control"
          >
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="45">45</option>
          </select>
          <a href="#" onClick={handleAddSize} className="add-size-link" style={{ display: 'block', marginTop: '10px' }}>+ Add Size</a>
        </div>
        <div className="form-group">
          <label htmlFor="containerType">Container Type</label>
          <select
            id="containerType"
            value={containerType}
            onChange={(e) => setContainerType(e.target.value)}
            className="form-control"
          >
            <option value="0">Select</option>
            <option value="1">Dry / General Purpose</option>
            <option value="2">Reefer / Refrigerated</option>
            <option value="3">Flat Rack</option>
            <option value="4">Open Top</option>
            <option value="5">Tank</option>
            <option value="6">Open Side</option>
            <option value="7">Other</option>
          </select>
          {containerType === "7" && (
            <input
              type="text"
              id="otherContainerType"
              value={otherContainerType}
              onChange={(e) => setOtherContainerType(e.target.value)}
              placeholder="Enter Container Type"
              className="form-control"
              style={{ marginTop: '10px' }}
            />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="agentLeaseOwner">Agent / Lease Owner</label>
          <input
            type="text"
            id="agentLeaseOwner"
            value={agentLeaseOwner}
            onChange={(e) => setAgentLeaseOwner(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="purchaseDate">Purchase Date</label>
          <input
            type="date"
            id="purchaseDate"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearOfMaking">Year of Making</label>
          <input
            type="text"
            id="yearOfMaking"
            value={yearOfMaking}
            onChange={(e) => setYearOfMaking(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="onOffHire">ON/OFF Hire</label>
          <select
            id="onOffHire"
            value={onOffHire}
            onChange={(e) => setOnOffHire(e.target.value)}
            className="form-control"
          >
            <option value="On Hire">On Hire</option>
            <option value="Off Hire">Off Hire</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="onHireDate">ON Hire Date</label>
          <input
            type="date"
            id="onHireDate"
            value={onHireDate}
            onChange={(e) => setOnHireDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inventoryType">Inventory Type</label>
          <select
            id="inventoryType"
            value={inventoryType}
            onChange={(e) => setInventoryType(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            <option value="Own">Own</option>
            <option value="Lease">Lease</option>
            <option value="One Way Lease">One Way Lease</option>
            <option value="Principal">Principal</option>
            <option value="Lease Purchase">Lease Purchase</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            {/* Add other location options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="form-control"
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
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
          <label htmlFor="pickUpCharge">Pick Up Charge</label>
          <input
            type="text"
            id="pickUpCharge"
            value={pickUpCharge}
            onChange={(e) => setPickUpCharge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pickUpCredit">Pick Up Credit</label>
          <input
            type="text"
            id="pickUpCredit"
            value={pickUpCredit}
            onChange={(e) => setPickUpCredit(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leasePurchaseStartDate">Lease Purchase Start Date</label>
          <input
            type="date"
            id="leasePurchaseStartDate"
            value={leasePurchaseStartDate}
            onChange={(e) => setLeasePurchaseStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leasePurchaseEndDate">Lease Purchase End Date</label>
          <input
            type="date"
            id="leasePurchaseEndDate"
            value={leasePurchaseEndDate}
            onChange={(e) => setLeasePurchaseEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="offHireLocationSold">OFF Hire Location Sold</label>
          <input
            type="text"
            id="offHireLocationSold"
            value={offHireLocationSold}
            onChange={(e) => setOffHireLocationSold(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="offHireSoldDate">OFF Hire Sold Date</label>
          <input
            type="date"
            id="offHireSoldDate"
            value={offHireSoldDate}
            onChange={(e) => setOffHireSoldDate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add Container Size</h3>
            <div className="form-group">
              <label htmlFor="newContainerType">Container Type</label>
              <input
                type="text"
                id="newContainerType"
                value={newContainerType}
                onChange={(e) => setNewContainerType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="isoCode">ISO Code</label>
              <input
                type="text"
                id="isoCode"
                value={isoCode}
                onChange={(e) => setIsoCode(e.target.value)}
              />
            </div>
            <button onClick={handleClosePopup}>Close</button>
            <button onClick={handleSaveSize}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContainerDetails;
