import React, { useState, useEffect } from "react";
import { API_URLS } from "../../../config/urls";
import axios from "axios";
import SearchableSelect from "../../Common/SearchableSelect";
import ValidationPopup from "../../Common/ValidationPopup";
import jwtDecode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";

const ContainerReleaseOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();
  const [activityType, setActivityType] = useState("Select");
  const [entryBy, setEntryBy] = useState("Select");
  const [deliveryOrderNumber, setDeliveryOrderNumber] = useState("");
  const [voyageNumber, setVoyageNumber] = useState("");
  const [oceanVessel, setOceanVessel] = useState("Select");
  const [errors, setErrors] = useState({});
  const [vesselOptions, setVesselOptions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");
  const [cro_id, setCROId] = useState(0); // Initialize cro_id state
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cro_id = queryParams.get("cro_id");
    const userId = getUserIdFromToken();
    
    setDeliveryOrderNumber(cro_id !== 'null' ? cro_id : 0); 

    fetchOceanVessel();
    if (cro_id > 0) {
      fetchCRODetails(cro_id,userId);
    }
  }, [location.search]);

  const fetchCRODetails = async (cro_id,user_id) => {
    try {
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/cro/getcrodetailsbyid`, { cro_id: cro_id,user_id: user_id }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = response.data;
      setActivityType(data.cro_activity || "Select");
      setEntryBy(data.cro_entryby || "Select");
      setVoyageNumber(data.cro_voyagenumber || "");
      setOceanVessel(data.cro_oceanvessel || "Select");
      setCROId(data.cro_id || 0); 
    } catch (error) {
      console.error("Error fetching enquiry details: ", error);
    }
  }

  const fetchOceanVessel = async () => {
    const token = localStorage.getItem("token");
    const searchParams = {
      vesselid: 0,
    };
    axios
      .post(
        `${API_URLS.BASE_URL}/blapi/anchordata/getvesseldetailsbyid`,
        searchParams,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        const options = response.data.map((vessel) => ({
          value: vessel.vesselid,
          label: vessel.vesselname,
        }));
        setVesselOptions(options);
      })
      .catch((error) => {
        console.error("Error fetching port details:", error);
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "activityType") setActivityType(value);
    if (id === "entryBy") setEntryBy(value);
    if (id === "deliveryOrderNumber") setDeliveryOrderNumber(value);
    if (id === "voyageNumber") setVoyageNumber(value);

    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    if (input) input.classList.remove("error");
    if (label) label.classList.remove("error");
  };

  const handlesetOceanVesseleChange = (value) => {
    setOceanVessel(value);
    setErrors((prevErrors) => ({ ...prevErrors, oceanVessel: undefined })); // Remove error class
    const input = document.getElementById("oceanVessel");
    const label = document.querySelector(`label[for="oceanVessel"]`);
    if (input) input.classList.remove("error");
    if (label) label.classList.remove("error");
  };

  const validate = () => {
    const newErrors = {};
    if (activityType === "Select")
      newErrors.activityType = "Activity Type is required.";
    if (entryBy === "Select") newErrors.entryBy = "Entry By is required.";
    if (!voyageNumber)
      newErrors.voyageNumber = "Voyage Number is required.";
    if (oceanVessel === "Select")
      newErrors.oceanVessel = "Ocean Vessel is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setShowPopup(true);
      return;
    }
    setShowPopup(false);

    const token = localStorage.getItem("token");
    const userId = getUserIdFromToken(); // Extract user_id from token

    const formObject = {
      cro_id: deliveryOrderNumber || 0,
      cro_activity: activityType,
      cro_entryby: entryBy,
      cro_voyagenumber: voyageNumber,
      cro_oceanvessel: oceanVessel,
      user_id: userId
    };

    try {
      const response = await axios.post(
        `${API_URLS.BASE_URL}/blapi/cro/savecrodetails`,
        formObject,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data > 0) {
        navigate(`/cargo-details?cro_id=${response.data}&crocargo_id=0`);
      } else {
        console.error("Failed to save CRO details:", response.data.message);
      }
    } catch (error) {
      console.error("Error saving CRO details:", error);
    }
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.user_id;
    }
    return null;
  };

  return (
    <div className="step-container">
      <h2>Container Release Order (CRO)</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="activityType">Activity Type</label>
          <select
            id="activityType"
            value={activityType}
            onChange={handleInputChange}
            className={`form-control ${errors.activityType ? "error" : ""}`}
          >
            <option value="Select">Select</option>
            <option value="CI">From Container Inventory (CI)</option>
            <option value="RFE">From Ready For Export (RFE)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="entryBy">Entry By</label>
          <select
            id="entryBy"
            value={entryBy}
            onChange={handleInputChange}
            className={`form-control ${errors.entryBy ? "error" : ""}`}
          >
            <option value="Select">Select</option>
            <option value="Enquiry">Enquiry</option>
            <option value="Nominated">Nominated</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="deliveryOrderNumber">Delivery Order Number</label>
          <input
            type="text"
            id="deliveryOrderNumber"
            value={deliveryOrderNumber || ""}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="voyageNumber">Voyage Number</label>
          <input
            type="text"
            id="voyageNumber"
            value={voyageNumber || ""}
            onChange={handleInputChange}
            className={`form-control ${errors.voyageNumber ? "error" : ""}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="oceanVessel" className={`${errors.oceanVessel ? "error" : ""}`}>Ocean Vessel</label>
          <SearchableSelect
            id="oceanVessel"
            textValue={oceanVessel || ""}
            setTextValue={(text) => setOceanVessel(text)}
            setIdValue={handlesetOceanVesseleChange}
            options={vesselOptions}
            className="form-control"
            isError={errors.oceanVessel}
          />
        </div>
        <div className="firstnavigation">
          <button type="submit">Next</button>
        </div>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default ContainerReleaseOrder;
