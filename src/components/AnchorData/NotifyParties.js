import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "../../css/NotifyParties.css";
import "../../css/common.css";
import { API_URLS } from "../../config/urls";
import { FaPen, FaTrash } from "react-icons/fa";

const NotifyParties = () => {
  const [notifyParties, setNotifyParties] = useState([]);
  const [notifyPartyName, setNotifyPartyName] = useState("");
  const [notifyPartyAddress, setNotifyPartyAddress] = useState("");
  const [notifyPartyEmail, setNotifyPartyEmail] = useState("");
  const [notifyPartyPhone, setNotifyPartyPhone] = useState("");
  const [notifyPartyId, setNotifyPartyId] = useState(null);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [editingRow, setEditingRow] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      axios.post(API_URLS.VALIDATE_TOKEN, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.status !== 200) {
          navigate("/");
        }
      })
      .catch(error => {
        navigate("/");
      });
    }

    const userId = getUserIdFromToken();
    const blId = searchParams.get("bl_id");
    if (blId && userId) {
      fetchNotifyDetails(blId, userId);
    }
  }, [navigate, searchParams]);

  const fetchNotifyDetails = (blId, userId) => {
    const token = localStorage.getItem("token");
    const getNotifyParty = {
      user_id: userId,
      bl_id: blId
    };
    axios.post(`${API_URLS.BASE_URL}/blapi/Notify/getNotifyDetails`, getNotifyParty, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      const notifyDetails = response.data.map(detail => ({
        id: detail.notify_id,
        name: detail.notify_name,
        address: detail.notify_address,
        email: detail.notify_email,
        phone: detail.notify_phone
      }));
      setNotifyParties(notifyDetails);
    })
    .catch(error => {
      if (error.response && error.response.status === 403) {
        navigate("/");
      }
      if (error.response && error.response.status === 401) {
        navigate("/");
      }
    });
  };

  const closeModal = () => {
    setShowModal(false);
    // Add error class to the input fields and labels with errors
    Object.keys(errors).forEach((key) => {
      const input = document.getElementById(`${key.charAt(0) + key.slice(1)}`);
      const label = document.querySelector(`label[for="${key.charAt(0) + key.slice(1)}"]`);
      if (input) {
        input.classList.add("error");
      }
      if (label) {
        label.classList.add("error");
      }
    });
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.user_id;
    }
    return null;
  };

  const validate = () => {
    const newErrors = {};
    if (!notifyPartyName) newErrors.notifyPartyName = "Name is required";
    if (notifyPartyEmail && !/\S+@\S+\.\S+/.test(notifyPartyEmail)) {
      newErrors.notifyPartyEmail = "Email address is invalid";
    }
    if (notifyPartyPhone && !/^\d{10}$/.test(notifyPartyPhone)) {
      newErrors.notifyPartyPhone = "Phone number is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addNotifyParty = () => {
    if (!notifyPartyName) {
      return;
    }
    const newNotifyParty = {
      id: notifyPartyId,
      name: notifyPartyName,
      address: notifyPartyAddress,
      email: notifyPartyEmail,
      phone: notifyPartyPhone,
    };
    const updatedNotifyParties = [...notifyParties, newNotifyParty];
    setNotifyParties(updatedNotifyParties);
    setNotifyPartyName("");
    setNotifyPartyAddress("");
    setNotifyPartyEmail("");
    setNotifyPartyPhone("");
    setNotifyPartyId(null);
    setEditingRow(null);
  };

  const saveNotifyParties = () => {
    if (validate()) {
      const token = localStorage.getItem("token");
      const userId = getUserIdFromToken();
      let bl_id = searchParams.get("bl_id");
      const newNotifyParty = {
        name: notifyPartyName,
        address: notifyPartyAddress,
        email: notifyPartyEmail,
        phone: notifyPartyPhone,
        user_id: userId,
        bl_id: bl_id
      };

      axios.post(`${API_URLS.BASE_URL}/blapi/Notify/create`, newNotifyParty, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setNotifyPartyId(response.data.notify_id);
        addNotifyParty();
      })
      .catch(error => {
        if (error.response && error.response.status === 403) {
          navigate("/");
        }
        if (error.response && error.response.status === 401) {
          navigate("/");
        }
      });
    } else {
      setShowModal(true);
    }
  };

  const nextStep = () => {
    navigate("/shipment-details");
  };

  const prevStep = () => {
    navigate("/consignee-details");
  };

  const handleNameChange = (e) => {
    setNotifyPartyName(e.target.value);
    // Remove error class when typing
    const input = document.getElementById("notifyPartyName");
    const label = document.querySelector(`label[for="notifyPartyName"]`);
    if (input) {
      input.classList.remove("error");
    }
    if (label) {
      label.classList.remove("error");
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const handleUpdate = (index) => {
    const party = notifyParties[index];
    setNotifyPartyId(party.id);
    setNotifyPartyName(party.name);
    setNotifyPartyAddress(party.address);
    setNotifyPartyEmail(party.email);
    setNotifyPartyPhone(party.phone);
    setEditingRow(index);
  };

  const handleDelete = (index) => {
    const updatedNotifyParties = notifyParties.filter((_, i) => i !== index);
    setNotifyParties(updatedNotifyParties);
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
          onChange={handleNameChange}
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
        />
      </div>
      <div className="form-group">
        <label htmlFor="notifyPartyEmail">Email</label>
        <input
          type="email"
          id="notifyPartyEmail"
          value={notifyPartyEmail}
          onChange={(e) => setNotifyPartyEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="notifyPartyPhone">Phone</label>
        <input type="text"
          id="notifyPartyPhone"
          value={notifyPartyPhone}
          onChange={(e) => setNotifyPartyPhone(e.target.value)}
        />
      </div>
      <button type="button" onClick={saveNotifyParties}>
        {editingRow !== null ? "Update Notify Party" : "Add Notify Party"}
      </button>
      {notifyParties.length > 0 && (
        <div className="notify-party-grid">
          <h3>Notify Parties List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notifyParties.map((party, index) => (
                <tr
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={editingRow === index ? "editing-row" : ""}
                >
                  <td>{party.name}</td>
                  <td>{party.address}</td>
                  <td>{party.email}</td>
                  <td>{party.phone}</td>
                  <td>
                    {hoveredRow === index && party.name && (
                      <div className="actions">
                        <FaPen style={{ marginRight: "10px" }} onClick={() => handleUpdate(index)} />
                        <FaTrash onClick={() => handleDelete(index)} />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="navigation">
        <button type="button" className="previous" onClick={prevStep}>
          Previous
        </button>
        <button type="button" className="next" onClick={nextStep}>
          Next
        </button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Enter missing fields</h3>
            <ul>
              {Object.keys(errors).map((key) => (
                <li key={key}>{errors[key]}</li>
              ))}
            </ul>
            <button className="close-modal-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotifyParties;