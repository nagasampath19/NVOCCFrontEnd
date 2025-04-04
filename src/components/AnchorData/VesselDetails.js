import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ValidationPopup from "../Common/ValidationPopup";
import { API_URLS } from "../../config/urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const VesselDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [vesselDetails, setVesselDetails] = useState({
    vesselid: "",
    vesselname: "",
    vesselimocode: "",
    flag: "",
    vesselcallsign: "",
    countryid: ""
  });
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountryFlag, setSelectedCountryFlag] = useState("");
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const urls = API_URLS;
  const flagInputRef = useRef(null);
  const countryListRef = useRef(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/countries`, {}, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setCountries(response.data);
        if (location.state && location.state.vesselDetails) {
          const vesselDetails = location.state.vesselDetails;
          setVesselDetails(vesselDetails);
          const selectedCountry = response.data.find(country => country.countryid == vesselDetails.vesselflag);
          if (selectedCountry) {
            setSelectedCountryFlag(selectedCountry.countryflag);
            setVesselDetails((prevDetails) => ({
              ...prevDetails,
              flag: selectedCountry.countryname,
              countryid: selectedCountry.countryid
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching countries: ", error);
      }
    };

    fetchCountries();
  }, [location.state]);

  const handleFlagChange = (e) => {
    const value = e.target.value;
    setVesselDetails((prevDetails) => ({
      ...prevDetails,
      flag: value
    }));
    setFilteredCountries(
      countries.filter((country) => {
        return country.countryname && country.countryname.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  const handleCountrySelect = (country) => {
    setVesselDetails((prevDetails) => ({
      ...prevDetails,
      flag: country.countryname,
      countryid: country.countryid
    }));
    setSelectedCountryFlag(country.countryflag);
    setFilteredCountries([]);
  };

  const validate = () => {
    const newErrors = {};
    if (vesselDetails.vesselname.trim() === "") newErrors.vesselname = "Vessel Name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setShowPopup(false);
      const token = localStorage.getItem("token");
      try {
        const params = {
          vesselid: vesselDetails.vesselid,
          vesselname: vesselDetails.vesselname,
          vesselimocode: vesselDetails.vesselimocode,
          vesselflag: vesselDetails.countryid,
          vesselcallsign: vesselDetails.vesselcallsign
        };
        const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/savevesseldetails`, params, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const searchParams = location.state?.searchParams || {};
        navigate("/vessel-details-search", { state: { updatedVesselDetails: response.data, searchParams } });
      } catch (error) {
        console.error("Error submitting vessel details: ", error);
        // Handle error (e.g., show an error message)
      }
    } else {
      setShowPopup(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVesselDetails((prevDetails) => ({
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

  useEffect(() => {
    if (showPopup) {
      Object.keys(errors).forEach((key) => {
        const input = document.getElementById(key);
        const label = document.querySelector(`label[for="${key}"]`);
        if (input) {
          input.classList.add("error");
        }
        if (label) {
          label.classList.add("error");
        }
      });
    }
  }, [showPopup, errors]);

  return (
    <div className="step-container">
      <h2>Vessel Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vesselname">Vessel Name</label>
          <input
            type="text"
            id="vesselname"
            name="vesselname"
            value={vesselDetails.vesselname || ""}
            onChange={handleChange}
            className={errors.vesselname ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vesselimocode">IMO Code</label>
          <input
            type="text"
            id="vesselimocode"
            name="vesselimocode"
            value={vesselDetails.vesselimocode || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vesselflag">
            Flag{selectedCountryFlag && (
              <img src={selectedCountryFlag} alt="Selected Country Flag" className="selected-country-flag" />
            )}
          </label>
          <div className="input-with-icon">
            <input
              type="text"
              id="vesselflag"
              name="vesselflag"
              value={vesselDetails.flag || ""}
              onChange={handleFlagChange}
              ref={flagInputRef}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
          {filteredCountries.length > 0 && (
            <ul className="country-list" ref={countryListRef}>
              {filteredCountries.map((country) => (
                <li
                  key={country.countryid}
                  onClick={() => handleCountrySelect(country)}
                >
                  <img src={country.countryflag} alt={country.countryname} className="country-flag" />
                  {country.countryname}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="vesselcallsign">Vessel Call Sign</label>
          <input
            type="text"
            id="vesselcallsign"
            name="vesselcallsign"
            value={vesselDetails.vesselcallsign || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default VesselDetails;