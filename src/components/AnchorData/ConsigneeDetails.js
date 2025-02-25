import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import NameAndAddress from "./NameAndAddressDetails";
import { useSearchParams, useNavigate } from "react-router-dom";
import { updateConsigneeDetails } from "../../redux/actions/consigneeActions";
import { API_URLS } from "../../config/urls";

const ConsigneeDetails = () => {
  const dispatch = useDispatch();
  const ConsigneeDetails = useSelector((state) => state.consignee);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const urls = API_URLS;
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
  }, [navigate]);

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.user_id;
    }
    return null;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateConsigneeDetails({ [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!ConsigneeDetails.consigneeName) newErrors.consigneeName = "Name is required";
    if (!ConsigneeDetails.consigneeAddress1) newErrors.consigneeAddress1 = "Address 1 is required";
    if (!ConsigneeDetails.consigneeCity) newErrors.consigneeCity = "City is required";
    if (!ConsigneeDetails.consigneeState) newErrors.consigneeState = "State is required";
    if (!ConsigneeDetails.consigneeCountry) newErrors.consigneeCountry = "Country is required";
    if (!ConsigneeDetails.consigneeEmail) {
      newErrors.consigneeEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(ConsigneeDetails.consigneeEmail)) {
      newErrors.consigneeEmail = "Email address is invalid";
    }
    if (!ConsigneeDetails.consigneePinCode) newErrors.consigneePinCode = "Pin Code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createConsignee = () => {
    const token = localStorage.getItem("token");
    const userId = getUserIdFromToken();
    let bl_id = searchParams.get("bl_id");
    const consigneeData = { ...ConsigneeDetails, user_id: userId, bl_id: bl_id };
    

    axios.post(urls.CREATE_CONSIGNEE, consigneeData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Consignee created successfully', response.data);
      navigate("/notify-parties");
    })
    .catch(error => {
      if(error.response && error.response.status === 403) {
        navigate("/");
      }
      if(error.response && error.response.status === 401) {
        navigate("/");
      }
    });
  };

  const nextStep = () => {
    if (validate()) {
      createConsignee();
    } else {
      setShowModal(true);
    }
  };

  const prevStep = () => {
    navigate("/shipper-details");
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

  return (
    <div className="step-container">
      <h2>Consignee Details</h2>
      <NameAndAddress
        prefix="consignee"
        onNameChange={onChange}
        onAddress1Change={onChange}
        onAddress2Change={onChange}
        onCityChange={onChange}
        onStateChange={onChange}
        onCountryChange={onChange}
        onEmailChange={onChange}
        onPhoneChange={onChange}
        onPinCodeChange={onChange}
        name={ConsigneeDetails.consigneeName}
        address1={ConsigneeDetails.consigneeAddress1}
        address2={ConsigneeDetails.consigneeAddress2}
        city={ConsigneeDetails.consigneeCity}
        state={ConsigneeDetails.consigneeState}
        country={ConsigneeDetails.consigneeCountry}
        email={ConsigneeDetails.consigneeEmail}
        phone={ConsigneeDetails.consigneePhone}
        pinCode={ConsigneeDetails.consigneePinCode}
      />
      <label htmlFor="consigneeRegNo">GSTIN Number</label>
      <input type="text" id="consigneeRegNo" name="consigneeRegNo" value={ConsigneeDetails.consigneeRegNo || ''} onChange={onChange} required />
      <label htmlFor="consigneePANNo">PAN Number</label>
      <input type="text" id="consigneePANNo" name="consigneePANNo" value={ConsigneeDetails.consigneePANNo || ''} onChange={onChange} required />
      <label htmlFor="consigneeIECCode">IEC Code</label>
      <input type="text" id="consigneeIECCode" name="consigneeIECCode" value={ConsigneeDetails.consigneeIECCode || ''} onChange={onChange} required />
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

export default ConsigneeDetails;