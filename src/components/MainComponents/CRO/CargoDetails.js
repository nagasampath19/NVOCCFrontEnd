import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { format, parseISO, addDays, parse } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ValidationPopup from "../../Common/ValidationPopup";
import SearchableSelect from "../../Common/SearchableSelect";
import CommodityDetails from "../../AnchorData/CommodityDetails"; 
import Popup from "../../Common/Popup"; 
import axios from "axios";
import { API_URLS } from "../../../config/urls";
import jwtDecode from "jwt-decode";

const CargoDetails = () => {
  const [crocargoId, setCrocargoId] = useState(0);
  const [deliveryOrderNumber, setDeliveryOrderNumber] = useState("");
  const [estimatedTimeOfDeparture, setEstimatedTimeOfDeparture] = useState(""); 
  const [estimatedTimeOfArrival, setEstimatedTimeOfArrival] = useState("");
  const [daysValid, setDaysValid] = useState("");
  const [cargoType, setCargoType] = useState("Select");
  const [containerVolume, setContainerVolume] = useState("");
  const [gateOpen, setGateOpen] = useState("");
  const [cargoWeight, setCargoWeight] = useState("");
  const [cutOff, setCutOff] = useState("");
  const [deliveryOrderCancel, setDeliveryOrderCancel] = useState("Select");
  const [ventilation, setVentilation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [commodity, setCommodity] = useState("");
  const [humidity, setHumidity] = useState("");
  const [unNo, setUnNo] = useState("");
  const [hazClass, setHazClass] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [freight, setFreight] = useState("");
  const [packagingGroup, setPackagingGroup] = useState("");
  const [specialEqRemarks, setSpecialEqRemarks] = useState("");
  const [validityDate, setValidityDate] = useState("");
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [commodityOptions, setCommodityOptions] = useState([]);
  const [showCommodityPopup, setShowCommodityPopup] = useState(false); 

  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  useEffect(() => {
    const userId = getUserIdFromToken(); 
    const queryParams = new URLSearchParams(location.search);
    const cro_id = queryParams.get("cro_id");
    setDeliveryOrderNumber(cro_id !== 'null' ? cro_id : 0);
    const crocargo_id = queryParams.get("crocargo_id");
    setCrocargoId(crocargo_id !== 'null' ? crocargo_id : 0);
    fetchCommodities();
    if(cro_id > 0) {
      fetchCROcargoDetails(cro_id,userId);
    }
  }, []);

  const fetchCROcargoDetails = async (cro_id,user_id) => {
    try {
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/cro/getcrocargodetailsbyid`, { cro_id: cro_id,user_id: user_id }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = response.data;
      setEstimatedTimeOfDeparture(data.crocargoEtd || "");
      setEstimatedTimeOfArrival(data.crocargoEta || "");
      setDaysValid(data.crocargoDaysvalid || "");
      setCargoType(data.crocargoType || "Select");
      setContainerVolume(data.crocargoContainervolume || "");
      setGateOpen(data.crocargoGateopen || "");
      setCargoWeight(data.crocargoCargoweight || "");
      setCutOff(data.crocargoCutoff || "");
      setDeliveryOrderCancel(data.crocargoDeliveryordercancel || "Select");
      setVentilation(data.crocargoVentilation || "");
      setTemperature(data.crocargoTemperature || "");
      setCommodity(data.crocargoCommodity || "");
      setHumidity(data.crocargoHumidity || "");
      setUnNo(data.crocargoUnno || "");
      setHazClass(data.crocargoHazclass || "");
      setReferenceNo(data.crocargoReferenceno || "");
      setFreight(data.crocargoFreight || "");
      setPackagingGroup(data.crocargoPackaginggroup || "");
      setSpecialEqRemarks(data.crocargoRemarks || "");
      setValidityDate(data.crocargoValiditydate || "");
    } catch (error) {
      console.error("Error fetching enquiry details: ", error);
    }
  }

  const handleBackClick = () => {
    navigate(`/container-release-order?cro_id=${deliveryOrderNumber}`);
  };

  const validate = () => {
    const newErrors = {};
    if (!estimatedTimeOfDeparture) {
      newErrors.estimatedTimeOfDeparture = "Estimated Time of Departure is required";
    }
    if (!estimatedTimeOfArrival) {
      newErrors.estimatedTimeOfArrival = "Estimated Time of Arrival is required";
    }
    if (!daysValid || isNaN(parseInt(daysValid, 10))) {
      newErrors.daysValid = "Days Valid is required and must be a number";
    }
    if (cargoType === "Select") {
      newErrors.cargoType = "Cargo Type is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setShowPopup(true);
      return;
    }
    setShowPopup(false);

    const userId = getUserIdFromToken(); // Extract user_id from token

    const formObject = {
      crocargoId: crocargoId,
      user_id: userId,
      croId: deliveryOrderNumber,
      crocargoEtd : estimatedTimeOfDeparture,
      crocargoEta: estimatedTimeOfArrival,
      crocargoDaysvalid: daysValid,
      crocargoValiditydate: validityDate,
      crocargoType: cargoType,
      crocargoContainervolume: containerVolume,
      crocargoGateopen: gateOpen,
      crocargoCargoweight: cargoWeight,
      crocargoCutoff: cutOff,
      crocargoDeliveryordercancel: deliveryOrderCancel,
      crocargoVentilation: ventilation,
      crocargoTemperature: temperature,
      crocargoCommodity: commodity,
      crocargoHumidity: humidity,
      crocargoUnno: unNo,
      crocargoHazclass: hazClass,
      crocargoReferenceno: referenceNo,
      crocargoFreight: freight,
      crocargoPackaginggroup: packagingGroup,
      crocargoRemarks: specialEqRemarks
    };

    const token = localStorage.getItem("token");
    axios
      .post(`${API_URLS.BASE_URL}/blapi/cro/savecrocargodetails`, formObject, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data > 0) {
          navigate(`/party?cro_id=${deliveryOrderNumber}&crocargo_id=${response.data}&party_id=0`);
        } else {
          console.error("Failed to save CRO details:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handleDateChange = (setter) => (date) => {
    if (date instanceof Date && !isNaN(date)) {
      const formattedDate = format(date, "dd/MM/yyyy");
      setter(formattedDate);
    } else {
      setter(""); // Handle invalid or empty date
    }
  };

  const fetchCommodities = async () => {
    const token = localStorage.getItem("token");
    const searchParams = {
      commodity_id: 0,
    };
    axios
      .post(
        `${API_URLS.BASE_URL}/blapi/anchordata/getcommoditydetailsbyid`,
        searchParams,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        const options = response.data.map((commodity) => ({
          value: commodity.commodityId,
          label: commodity.commodityName,
          commodityUnoCode: commodity.commodityUnoCode
        }));
        setCommodityOptions(options);
      })
      .catch((error) => {
        console.error("Error fetching commodity details:", error);
      });
  };

  const handleDaysValidChange = (e) => {
    const days = parseInt(e.target.value, 10);
    setDaysValid(e.target.value);

    const baseDate = validityDate
      ? parse(validityDate, "dd/MM/yyyy", new Date())
      : new Date(); // Use today's date if no validityDate is selected

    if (!isNaN(days) && baseDate instanceof Date && !isNaN(baseDate)) {
      const newDate = addDays(baseDate, days);
      setValidityDate(format(newDate, "dd/MM/yyyy"));
    }
  };

  const handleCommodityChange = (value) => {
    setCommodity(value);
    const selectedOption = commodityOptions.find((option) => option.value === value);
    if (selectedOption) {
      setCommodity(selectedOption.value);
      setUnNo(selectedOption.commodityUnoCode);
    } else {
      setCommodity("");
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
      <h2>Cargo Details</h2>
      <form onSubmit={handleSubmit} className="cargo-details-form">
        <div className="form-group">
          <label htmlFor="estimatedTimeOfDeparture" className={errors.estimatedTimeOfDeparture ? "error" : ""}>
            Estimated Time of Departure
          </label>
          <DatePicker
            selected={
              estimatedTimeOfDeparture
                ? new Date(estimatedTimeOfDeparture.split("/").reverse().join("-"))
                : null
            }
            onChange={handleDateChange(setEstimatedTimeOfDeparture)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            className="inline-datepicker" 
            showMonthDropdown 
            showYearDropdown 
            dropdownMode="select"
          />
        </div>
        <div className="form-group">
          <label htmlFor="estimatedTimeOfArrival" className={errors.estimatedTimeOfArrival ? "error" : ""}>
            Estimated Time of Arrival
          </label>
          <DatePicker
            selected={
              estimatedTimeOfArrival
                ? new Date(estimatedTimeOfArrival.split("/").reverse().join("-"))
                : null
            }
            onChange={handleDateChange(setEstimatedTimeOfArrival)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            className="inline-datepicker" 
            showMonthDropdown 
            showYearDropdown 
            dropdownMode="select"
          />
        </div>
        <div className="form-group">
          <label htmlFor="daysValid" className={errors.daysValid ? "error" : ""}>
            Days Valid
          </label>
          <input
            type="text"
            id="daysValid"
            value={daysValid || ""}
            onChange={handleDaysValidChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="validityDate">Validity Date</label>
          <DatePicker
            selected={
              validityDate
                ? new Date(validityDate.split("/").reverse().join("-"))
                : null
            }
            onChange={handleDateChange(setValidityDate)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            className="inline-datepicker" 
            dropdownMode="select"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="cargoType" className={errors.cargoType ? "error" : ""}>
            Cargo Type
          </label>
          <select
            id="cargoType"
            value={cargoType}
            onChange={(e) => setCargoType(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            <option value="Non-Haz">Non-Haz</option>
            <option value="Haz">Haz</option>
            <option value="Refeer">Refeer</option>
            <option value="Special Equipments">Special Equipments</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="containerVolume">Container Volume</label>
          <input
            type="text"
            id="containerVolume"
            value={containerVolume}
            onChange={(e) => setContainerVolume(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gateOpen">Gate Open</label>
          <input
            type="text"
            id="gateOpen"
            value={gateOpen}
            onChange={(e) => setGateOpen(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cargoWeight">Cargo Weight</label>
          <input
            type="text"
            id="cargoWeight"
            value={cargoWeight}
            onChange={(e) => setCargoWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cutOff">Cut Off</label>
          <input
            type="text"
            id="cutOff"
            value={cutOff}
            onChange={(e) => setCutOff(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryOrderCancel">Delivery Order Cancel</label>
          <select
            id="deliveryOrderCancel"
            value={deliveryOrderCancel}
            onChange={(e) => setDeliveryOrderCancel(e.target.value)}
            className="form-control"
          >
            <option value="Select">Select</option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
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
          <label htmlFor="commodity">
            Commodity
            <span
              style={{ textAlign: "right", marginLeft: "25px", cursor: "pointer", color: "blue" }}
              onClick={() => setShowCommodityPopup(true)} 
            >
              + Add New Commodity
            </span>
          </label>
          <SearchableSelect
            id="commodity"
            textValue={commodity || ""}
            setTextValue={(text) => setCommodity(text)}
            setIdValue={handleCommodityChange}
            options={commodityOptions}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="unNo">UN NO</label>
          <input
            type="text"
            id="unNo"
            value={unNo}
            onChange={(e) => setUnNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hazClass">HAZ CLASS</label>
          <input
            type="text"
            id="hazClass"
            value={hazClass}
            onChange={(e) => setHazClass(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="referenceNo">Reference No</label>
          <input
            type="text"
            id="referenceNo"
            value={referenceNo}
            onChange={(e) => setReferenceNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="freight">Freight</label>
          <input
            type="text"
            id="freight"
            value={freight}
            onChange={(e) => setFreight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="packagingGroup">Packaging Group</label>
          <input
            type="text"
            id="packagingGroup"
            value={packagingGroup}
            onChange={(e) => setPackagingGroup(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialEqRemarks">Special Eq. Remarks / Haz Clause</label>
          <textarea
            id="specialEqRemarks"
            value={specialEqRemarks}
            onChange={(e) => setSpecialEqRemarks(e.target.value)}
          ></textarea>
        </div>
        <div className="navigation">
          <button type="button" className="previous" onClick={handleBackClick}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
      {showPopup && <ValidationPopup errors={errors} onClose={() => setShowPopup(false)} />}
      {showCommodityPopup && (
        <Popup
          onClose={() => setShowCommodityPopup(false)}
          width="550px"
          height="500px"
        >
          <CommodityDetails
            onClose={() => setShowCommodityPopup(false)} // Pass the onClose function
            onSave={fetchCommodities} // Pass the fetchCommodities function as onSave
          />
        </Popup>
      )}
    </div>
  );
};

export default CargoDetails;
