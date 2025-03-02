import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ValidationPopup from "../Common/ValidationPopup";
import { API_URLS } from "../../config/urls";

const PortDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [portDetails, setPortDetails] = useState({
    port_id: "0",
    portcode: "",
    portname: "",
    porttype: "",
    cfsaddress: "",
    edicode: "",
    jnptcode: "",
    nsictgroupcode: "",
    gticode: "",
    gtigroupname: "",
    bmctcode: "",
    nsigtcode: ""
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const urls = API_URLS;

  useEffect(() => {
    if (location.state && location.state.portDetails) {
      setPortDetails(location.state.portDetails);
    }
  }, [location.state]);

  const validate = () => {
    const newErrors = {};
    if (portDetails.porttype === "0") newErrors.porttype = "Port Type is required";
    if (portDetails.portcode.trim() === "") newErrors.portcode = "Port Code is required";
    if (portDetails.portname.trim() === "") newErrors.portname = "Port Name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setShowPopup(false);
      const token = localStorage.getItem("token");
      try {
        let url = `${urls.BASE_URL}/blapi/anchordata/saveportdetails`;
        const response = await axios.post(url, portDetails, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const searchParams = location.state?.searchParams || {};
        navigate("/port-details-search", { state: { updatedPortDetails: response.data, searchParams } });
      } catch (error) {
        console.error("Error submitting form data: ", error);
      }
    } else {
      setShowPopup(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
    const input = document.getElementById(e.target.id);
    const label = document.querySelector(`label[for="${e.target.id}"]`);
    if (input) {
      input.classList.remove("error");
    }
    if (label) {
      label.classList.remove("error");
    }
  };

  return (
    <div className="step-container">
      <h2>Port Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="porttype">Port Type</label>
          <select
            id="porttype"
            name="porttype"
            value={portDetails.porttype}
            onChange={handleChange}
            className="form-control"
          >
            <option value="0">Select</option>
            <option value="1">Port</option>
            <option value="2">DPD</option>
            <option value="3">CFS</option>
            <option value="4">Carrier</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="portcode">Port Code</label>
          <input
            type="text"
            id="portcode"
            name="portcode"
            value={portDetails.portcode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="portname">Port Name</label>
          <input
            type="text"
            id="portname"
            name="portname"
            value={portDetails.portname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cfsaddress">CFS Address</label>
          <input
            type="text"
            id="cfsaddress"
            name="cfsaddress"
            value={portDetails.cfsaddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="edicode">EDI Code</label>
          <input
            type="text"
            id="edicode"
            name="edicode"
            value={portDetails.edicode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jnptcode">JNPT Code</label>
          <input
            type="text"
            id="jnptcode"
            name="jnptcode"
            value={portDetails.jnptcode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nsictgroupcode">NSICT Group Code</label>
          <input
            type="text"
            id="nsictgroupcode"
            name="nsictgroupcode"
            value={portDetails.nsictgroupcode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gticode">GTI Code</label>
          <input
            type="text"
            id="gticode"
            name="gticode"
            value={portDetails.gticode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gtigroupname">GTI Group Name</label>
          <input
            type="text"
            id="gtigroupname"
            name="gtigroupname"
            value={portDetails.gtigroupname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bmctcode">BMCT Code</label>
          <input
            type="text"
            id="bmctcode"
            name="bmctcode"
            value={portDetails.bmctcode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nsigtcode">NSI GT Code</label>
          <input
            type="text"
            id="nsigtcode"
            name="nsigtcode"
            value={portDetails.nsigtcode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default PortDetails;
