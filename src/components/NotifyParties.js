import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/NotifyParties.css";
import "../css/common.css";

const NotifyParties = () => {
  const [notifyParties, setNotifyParties] = useState([]);
  const [notifyPartyName, setNotifyPartyName] = useState("");
  const [notifyPartyAddress, setNotifyPartyAddress] = useState("");
  const [notifyPartyEmail, setNotifyPartyEmail] = useState("");
  const [notifyPartyPhone, setNotifyPartyPhone] = useState("");
  const navigate = useNavigate();

  const addNotifyParty = () => {
    const newNotifyParty = {
      name: notifyPartyName,
      address: notifyPartyAddress,
      email: notifyPartyEmail,
      phone: notifyPartyPhone,
    };
    setNotifyParties([...notifyParties, newNotifyParty]);
    setNotifyPartyName("");
    setNotifyPartyAddress("");
    setNotifyPartyEmail("");
    setNotifyPartyPhone("");
  };

  const nextStep = () => {
    navigate("/shipment-details");
  };

  const prevStep = () => {
    navigate("/consignee-details");
  };

  return (
    <div className="step-container">
      <h2>Notify Parties</h2>
      <div className="form-group">
        <label htmlFor="notifyPartyName">Name</label>
        <input
          type="text"
          id="notifyPartyName"
          value={notifyPartyName}
          onChange={(e) => setNotifyPartyName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="notifyPartyAddress">Address</label>
        <input
          type="text"
          id="notifyPartyAddress"
          value={notifyPartyAddress}
          onChange={(e) => setNotifyPartyAddress(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="notifyPartyEmail">Email</label>
        <input
          type="email"
          id="notifyPartyEmail"
          value={notifyPartyEmail}
          onChange={(e) => setNotifyPartyEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="notifyPartyPhone">Phone</label>
        <input type="text"
          id="notifyPartyPhone"
          value={notifyPartyPhone}
          onChange={(e) => setNotifyPartyPhone(e.target.value)}
          required
        />
      </div>
      <button type="button" onClick={addNotifyParty}>
        Add Notify Party
      </button>
      <div className="notify-party-grid">
        <h3>Notify Parties List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {notifyParties.map((party, index) => (
              <tr key={index}>
                <td>{party.name}</td>
                <td>{party.address}</td>
                <td>{party.email}</td>
                <td>{party.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="navigation">
        <button type="button" className="previous" onClick={prevStep}>
          Previous
        </button>
        <button type="button" className="next" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NotifyParties;