import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import ValidationPopup from "../Common/ValidationPopup";
import { API_URLS } from "../../config/urls";

const NotifyParties = () => {
  const [notifyPartyId, setNotifyPartyId] = useState(null);
  const [notifyPartyName, setNotifyPartyName] = useState("");
  const [notifyPartyAddress, setNotifyPartyAddress] = useState("");
  const [notifyPartyEmail, setNotifyPartyEmail] = useState("");
  const [notifyPartyPhone, setNotifyPartyPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

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
  }, [navigate, searchParams]);

  useEffect(() => {
    if (location.state && location.state.notifyPartyDetails) {
      const { notify_id, notify_name, notify_address, notify_email, notify_phone } = location.state.notifyPartyDetails;
      setNotifyPartyId(notify_id || null);
      setNotifyPartyName(notify_name || "");
      setNotifyPartyAddress(notify_address || "");
      setNotifyPartyEmail(notify_email || "");
      setNotifyPartyPhone(notify_phone || "");
    }
  }, [location.state]);

  const closeModal = () => {
    setShowPopup(false);
    // Add error class to the input fields and labels with errors
    Object.keys(errors).forEach((key) => {
      const input = document.getElementById(`notifyParty${key.charAt(0).toUpperCase() + key.slice(1)}`);
      const label = document.querySelector(`label[for="notifyParty${key.charAt(0).toUpperCase() + key.slice(1)}"]`);
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
    if (!notifyPartyAddress) newErrors.notifyPartyAddress = "Address is required";
    if (notifyPartyEmail && !/\S+@\S+\.\S+/.test(notifyPartyEmail)) {
      newErrors.notifyPartyEmail = "Email address is invalid";
    }
    if (notifyPartyPhone && !/^\d{10}$/.test(notifyPartyPhone)) {
      newErrors.notifyPartyPhone = "Phone number is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      saveNotifyParty();
    } else {
      setShowPopup(true);
    }
  };

  const saveNotifyParty = () => {
    const token = localStorage.getItem("token");
    const userId = getUserIdFromToken();
    const newNotifyParty = {
      notify_id: notifyPartyId,
      name: notifyPartyName,
      address: notifyPartyAddress,
      email: notifyPartyEmail,
      phone: notifyPartyPhone,
      user_id: userId
    };

    axios.post(`${API_URLS.BASE_URL}/blapi/Notify/create`, newNotifyParty, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      const createdNotifyParty = response.data;
      setNotifyPartyId(null);
      setNotifyPartyName("");
      setNotifyPartyAddress("");
      setNotifyPartyEmail("");
      setNotifyPartyPhone("");
      navigate("/notify-details-search", { state: { updatedNotifyPartyDetails: createdNotifyParty } });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "notifyPartyName":
        setNotifyPartyName(value);
        break;
      case "notifyPartyAddress":
        setNotifyPartyAddress(value);
        break;
      case "notifyPartyEmail":
        setNotifyPartyEmail(value);
        break;
      case "notifyPartyPhone":
        setNotifyPartyPhone(value);
        break;
      default:
        break;
    }
    // Remove error class when typing
    const input = document.getElementById(name);
    const label = document.querySelector(`label[for="${name}"]`);
    if (input) {
      input.classList.remove("error");
    }
    if (label) {
      label.classList.remove("error");
    }
  };

  return (
    <div className="step-container">
      <h2>Notify Parties</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="notifyPartyName">Name</label>
          <input
            type="text"
            id="notifyPartyName"
            name="notifyPartyName"
            value={notifyPartyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notifyPartyAddress">Address</label>
          <input
            type="text"
            id="notifyPartyAddress"
            name="notifyPartyAddress"
            value={notifyPartyAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notifyPartyEmail">Email</label>
          <input
            type="email"
            id="notifyPartyEmail"
            name="notifyPartyEmail"
            value={notifyPartyEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notifyPartyPhone">Phone</label>
          <input
            type="text"
            id="notifyPartyPhone"
            name="notifyPartyPhone"
            value={notifyPartyPhone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={closeModal} />}
    </div>
  );
};

export default NotifyParties;