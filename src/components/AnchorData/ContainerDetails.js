import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import SearchableSelect from "../Common/SearchableSelect"; // Import SearchableSelect
import { API_URLS } from "../../config/urls";
import ValidationPopup from "../Common/ValidationPopup"; 
import { useNavigate, useLocation } from "react-router-dom";

const validateContainerNumber = (containerNumber) => {
  if (typeof containerNumber !== 'string') {
    return false;
  }

  const regex = /^[A-Z]{3}[UJZ]\d{6}\d$/;

  if (!regex.test(containerNumber)) {
    return false;
  }
  return true;
};

const ContainerDetails = () => {
  const [formData, setFormData] = useState({
    container_number: "",
    container_sizeid: "",
    container_typeid: "0",
    container_agent: "",
    container_purchasedate: "",
    container_makeyear: "",
    container_hire: "On Hire",
    container_hiredate: "",
    container_inventorytype: "Select",
    container_locationid: "",
    container_location_text: "", 
    container_currency: "",
    container_amount: "",
    container_freedays: "",
    container_pickupcharge: "",
    container_pickupcredit: "",
    container_leasepurchsestartdate: "",
    container_leasepurchseenddate: "",
    container_offhirelocsold: "",
    container_offhirelocsolddate: "",
    containersize_type: "",
    containersize_desc  : "",
    containersize_code: ""
  });
  const [countries, setCountries] = useState([]);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [showSizePopup, setSizePopup] = useState(false);
  const [sizeErrors, setSizeErrors] = useState({});
  const [containerSizes, setContainerSizes] = useState([]); // Add state for container sizes
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchCountries = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(`${API_URLS.BASE_URL}/blapi/anchordata/countries`, {}, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const transformedCountries = response.data.map(country => ({
          label: country.countryname,
          value: country.countryid
        }));
        setCountries(transformedCountries);
      } catch (error) {
        console.error("Error fetching countries: ", error);
      }
    };
    
    fetchCountries();
    populateContainerSizes();
  }, []);

  useEffect(() => {
    if (location.state && location.state.containerDetails) {
      const containerDetails = location.state.containerDetails;
      setFormData((prevData) => ({
        ...prevData,
        ...containerDetails,
        container_purchasedate: formatDatemmddyyyy(containerDetails.container_purchasedate),
        container_hiredate: formatDatemmddyyyy(containerDetails.container_hiredate),
        container_leasepurchsestartdate: formatDatemmddyyyy(containerDetails.container_leasepurchsestartdate),
        container_leasepurchseenddate: formatDatemmddyyyy(containerDetails.container_leasepurchseenddate),
        container_offhirelocsolddate: formatDatemmddyyyy(containerDetails.container_offhirelocsolddate),
        container_locationid: containerDetails.container_locationid || "",
        container_location_text: containerDetails.container_location_text || ""
      }));
      
    }
  }, [location.state]);

   const formatDatemmddyyyy = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };		
 

  const validate = () => {
    let validationErrors = {};

    if (!formData.container_number) {
      validationErrors.container_number = "Container Number is required";
    } else if (!validateContainerNumber(formData.container_number)) {
      validationErrors.container_number = "Invalid Container Number format";
    }
    if (formData.container_sizeid === "") {
      validationErrors.container_sizeid = "Container Size is required";
    }
    if (isNaN(formData.container_amount)) {
      validationErrors.container_amount = "Amount must be a valid number";
    }
    if (isNaN(formData.container_pickupcharge)) {
      validationErrors.container_pickupcharge = "Pick Up Charge must be a valid number";
    }
    if (isNaN(formData.container_pickupcredit)) {
      validationErrors.container_pickupcredit = "Pick Up Credit must be a valid number";
    }
    return validationErrors;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowPopup(false);
      await saveContainerDetails();
    } else {
      setShowPopup(true);
    }

  };

  const saveContainerDetails = async () => {

    try {
      const token = localStorage.getItem("token");
      const userId = getUserIdFromToken();
      const tempData = { ...formData, user_id: userId };
      await axios.post(`${API_URLS.BASE_URL}/blapi/Container/savecontainerdetails`, tempData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const searchParams = location.state?.searchParams || {};
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Container/searchContainerdetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      navigate("/container-details-search", { state: { searchResults: response.data, searchParams } });
    } catch (error) {
      console.error("Error saving container details:", error);
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

  const handleAddSize = () => {
    setSizePopup(true);
  };

  const handleSaveSize = async () => {
    let errors = {};
    if (!formData.containersize_type) {
      errors.containersize_type = "required";
    }
    if (Object.keys(errors).length > 0) {
      setSizeErrors(errors);
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const userId = getUserIdFromToken();
      const sizeData = {
        containersize_type: formData.containersize_type,
        containersize_desc: formData.containersize_desc,
        containersize_code: formData.containersize_code,
        user_id: userId
      };
      await axios.post(`${API_URLS.BASE_URL}/blapi/Container/savecontainersize`, sizeData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
     
      setSizeErrors({});
      setSizePopup(false);
      setFormData((prevData) => ({
        ...prevData,
        containersize_type: "",
        containersize_desc: "",
        containersize_code: ""
      }));
    } catch (error) {
      console.error("Error saving container size:", error);
    }
  };

  const populateContainerSizes = async () => {
    const token = localStorage.getItem("token");
     // Refresh Container Size dropdown
     const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Container/getcontainersize`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setContainerSizes(response.data); // Update container sizes state

  };
  const handleClosePopup = () => {
    setSizePopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "date" && isNaN(Date.parse(value))) {
      return; // Prevent invalid date input
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    const input = document.getElementById(e.target.id);
    const label = document.querySelector(`label[for="${e.target.id}"]`);
    if (input) {
      input.classList.remove("error");
    }
    if (label) {
      label.classList.remove("error");
    }
    if (name === "containersize_type") {
      setSizeErrors((prevErrors) => ({ ...prevErrors, containersize_type: "" }));
    }
  };

  const handleLocationChange = (id, text) => {
    setFormData((prevData) => ({ ...prevData, container_locationid: id, container_location_text: text || "" }));
  };

  const handleCurrencyChange = (e) => {
    const { value } = e.target;
    console.log("Currency value: ", value);
    setFormData((prevData) => ({ ...prevData, container_currency: value }));
  };
  

  return (
    <div className="step-container">
      <h2>Container Details</h2>
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.container_number ? 'error' : ''}`}>
          <label htmlFor="container_number">Container Number</label>
          <input
            type="text"
            id="container_number"
            name="container_number"
            maxLength={11}
            value={formData.container_number}
            onChange={handleInputChange}
          />
        </div>
        <div className={`form-group ${errors.container_sizeid ? 'error' : ''}`}>
          <label htmlFor="container_sizeid">Container Size</label>
          <select
            id="container_sizeid"
            name="container_sizeid"
            value={formData.container_sizeid}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select</option>
            {containerSizes.map((size) => (
              <option key={size.containersize_id} value={size.containersize_id}>
                {size.containersize_type}
              </option>
            ))}
          </select>
          <a href="#" onClick={handleAddSize} className="add-size-link" style={{ display: 'block', marginTop: '10px' }}>+ Add Size</a>
        </div>
        <div className="form-group">
          <label htmlFor="container_typeid">Container Type</label>
          <select
            id="container_typeid"
            name="container_typeid"
            value={formData.container_typeid}
            onChange={handleInputChange}
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
        </div>
        <div className="form-group">
          <label htmlFor="container_agent">Agent / Lease Owner</label>
          <input
            type="text"
            id="container_agent"
            name="container_agent"
            maxLength={100}
            value={formData.container_agent}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="purchaseDate">Purchase Date</label>
          <input
            type="date"
            id="container_purchasedate"
            name="container_purchasedate"
            maxLength={10}
            value={formData.container_purchasedate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="container_makeyear">Year of Making</label>
          <input
            type="text"
            id="container_makeyear"
            name="container_makeyear"
            maxLength={4}
            value={formData.container_makeyear}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="container_hire">Hire</label>
          <select
            id="container_hire"
            name="container_hire"
            value={formData.container_hire}
            maxLength={15}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="On Hire">On Hire</option>
            <option value="Off Hire">Off Hire</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="container_hiredate">ON Hire Date</label>
          <input
            type="date"
            id="container_hiredate"
            name="container_hiredate"
            maxLength={10}  
            value={formData.container_hiredate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="container_inventorytype">Inventory Type</label>
          <select
            id="container_inventorytype"
            name="container_inventorytype"
            value={formData.container_inventorytype}
            onChange={handleInputChange}
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
        <SearchableSelect
          textValue={formData.container_locationid}
          setTextValue={(text) => setFormData((prevData) => ({ ...prevData, container_location_text: text }))}
          setIdValue={handleLocationChange}
          options={countries} 
          label="Country"
          id="Country"
        />
        <div className="form-group">
          <label htmlFor="container_currency">Currency</label>
          <select
            id="container_currency"
            name="container_currency"
            value={formData.container_currency}
            onChange={handleCurrencyChange}
            className="form-control"
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={`form-group ${errors.container_amount ? 'error' : ''}`}>
          <label htmlFor="container_amount">Amount</label>
          <input
            type="text"
            id="container_amount"
            name="container_amount"
            value={formData.container_amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="container_freedays">Free Days</label>
          <input
            type="text"
            id="container_freedays"
            name="container_freedays"
            maxLength={5}
            value={formData.container_freedays}
            onChange={handleInputChange}
          />
        </div>
        <div className={`form-group ${errors.container_pickupcharge ? 'error' : ''}`}>
          <label htmlFor="container_pickupcharge">Pick Up Charge</label>
          <input
            type="text"
            id="container_pickupcharge"
            name="container_pickupcharge"
            value={formData.container_pickupcharge}
            onChange={handleInputChange}
          />
        </div>
        <div className={`form-group ${errors.container_pickupcredit ? 'error' : ''}`}>
          <label htmlFor="container_pickupcredit">Pick Up Credit</label>
          <input
            type="text"
            id="container_pickupcredit"
            name="container_pickupcredit"
            value={formData.container_pickupcredit}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="container_leasepurchsestartdate">Lease Purchase Start Date</label>
          <input
            type="date"
            id="container_leasepurchsestartdate"
            name="container_leasepurchsestartdate"
            value={formData.container_leasepurchsestartdate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="container_leasepurchseenddate">Lease Purchase End Date</label>
          <input
            type="date"
            id="container_leasepurchseenddate"
            name="container_leasepurchseenddate"
            value={formData.container_leasepurchseenddate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="container_offhirelocsold">OFF Hire Location Sold</label>
          <input
            type="text"
            id="container_offhirelocsold"
            name="container_offhirelocsold"
            value={formData.container_offhirelocsold}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="container_offhirelocsolddate">OFF Hire Sold Date</label>
          <input
            type="date"
            id="container_offhirelocsolddate"
            name="container_offhirelocsolddate"
            value={formData.container_offhirelocsolddate}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>

      {showPopup && (
        <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />
      )}

      {showSizePopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add Container Size</h3>
            <div className={`form-group ${sizeErrors.containersize_type ? 'error' : ''}`} style={{ textAlign: "left" }}>
              <label htmlFor="containersize_type" className={sizeErrors.containersize_type ? 'error' : ''}>Container Type</label>
              <input
                type="text"
                id="containersize_type"
                name="containersize_type"
                value={formData.containersize_type}
                onChange={handleInputChange}
                className={sizeErrors.containersize_type ? 'error' : ''}
              />
              {sizeErrors.containersize_type && <span className="error-message">{sizeErrors.containersize_type}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="containersize_desc">Description</label>
              <input
                type="text"
                id="containersize_desc"
                name="containersize_desc"
                value={formData.containersize_desc}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="containersize_code">ISO Code</label>
              <input
                type="text"
                id="containersize_code"
                name="containersize_code"
                value={formData.containersize_code}
                onChange={handleInputChange}
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
