import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { API_URLS } from "../../../config/urls";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ValidationPopup from "../../Common/ValidationPopup";
import { allowOnlyNumbers } from "../../../utils/commonUtils";

const SellingRate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [enquiryID, setEnquiryID] = useState("");
  const [sellingRateID, setSellingRateID] = useState("");
  const [fromValidDate, setFromValidDate] = useState("");
  const [toValidDate, setToValidDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [activity, setActivity] = useState("Select");
  const [containerSize, setContainerSize] = useState("Select");
  const [containerType, setContainerType] = useState("Select");
  const [freeDays, setFreeDays] = useState("");
  const [month, setMonth] = useState("Select");
  const [year, setYear] = useState("");
  const [chargeName, setChargeName] = useState("Select");
  const [gst, setGst] = useState("");
  const [currency, setCurrency] = useState("Select");
  const [currencyCode, setCurrencyCode] = useState("");
  const [prepColl, setPrepColl] = useState("Select");
  const [rateBasis, setRateBasis] = useState("Select");
  const [gstYN, setGstYN] = useState("Select");
  const [ratePart, setRatePart] = useState("Select");
  const [perUnit, setPerUnit] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [rate, setRate] = useState("");
  const [freight, setFreight] = useState("");
  const [amount, setAmount] = useState("");
  const [gstin, setGstin] = useState("");
  const [sacCode, setSacCode] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [igst, setIgst] = useState("");
  const [total, setTotal] = useState("");
  const [containerSizeOptions, setContainerSizeOptions] = useState([]);
  const [containerTypesOptions, setContainerTypesOptions] = useState([]);
  const [chargesOptions, setChargesOptions] = useState([]);
  const [currenciesOptions, setCurrenciesOptions] = useState([]);
  const token = localStorage.getItem("token");
  const [errorFields, setErrorFields] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const userId = getUserIdFromToken();
    fetchContainerSize();
    fetchContainerTypes();
    fetchAllCharges(userId);
    fetchAllCurrencies();

    const queryParams = new URLSearchParams(location.search);
    const enquiryReferenceID = queryParams.get("enquiryReferenceID");
    if (enquiryReferenceID) {
      setEnquiryID(enquiryReferenceID);
    }
    if (enquiryReferenceID) {
      fetchSellingRateDetails(enquiryReferenceID, userId);
    }
  }, []);

  useEffect(() => {
    if (currenciesOptions.length > 0 && currency) {
      handleCurrencyChange({ target: { value: currency } });
    }
  }, [currenciesOptions, currency]);

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.user_id;
    }
    return null;
  };

  const fetchContainerSize = async () => {
    axios.post(`${API_URLS.BASE_URL}/blapi/Container/getcontainersize`, {},
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const options = response.data.map(container => ({
          value: container.containersize_id,
          label: container.containersize_type
        }));
        setContainerSizeOptions(options);
      })
      .catch(error => {
        console.error("Error fetching container size details:", error);
      });
  };

  const fetchContainerTypes = async () => {
    axios.post(`${API_URLS.BASE_URL}/blapi/anchordata/getallcontainertypes`, {},
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const options = response.data.map(container => ({
          value: container.containertype_id,
          label: container.containertype_desc
        }));
        setContainerTypesOptions(options);
      })
      .catch(error => {
        console.error("Error fetching container size details:", error);
      });
  };

  const fetchAllCharges = async () => {
    const userId = getUserIdFromToken();
    axios.post(`${API_URLS.BASE_URL}/blapi/Anchordata/Charges/getallChargesdetails`, { user_id: userId },
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const options = response.data.map(charge => ({
          value: charge.chargeId,
          label: charge.chargeName
        }));
        setChargesOptions(options);
      })
      .catch(error => {
        console.error("Error fetching container size details:", error);
      });
  };

  const fetchAllCurrencies = async () => {
    axios.post(`${API_URLS.BASE_URL}/blapi/anchordata/currencies`, {},
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const options = response.data.map(charge => ({
          value: charge.currency_id,
          label: charge.currency_code
        }));
        setCurrenciesOptions(options);
      })
      .catch(error => {
        console.error("Error fetching container size details:", error);
      });
  };

  const getChargesDetailsById = async (chargeId) => {
    if (chargeId < 1)
      return;
    axios.post(`${API_URLS.BASE_URL}/blapi/Anchordata/Charges/getChargesdetailsbyid`, { Charges_id: chargeId },
      { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const chargeDetails = response.data;
        setGst(chargeDetails.chargegstpercentage);
        setCurrency(chargeDetails.chargecurrency);
        handleCurrencyChange({ target: { value: chargeDetails.chargecurrency } });
        setSacCode(chargeDetails.chargesaccode);
        setGstYN(chargeDetails.chargegst);
        setPrepColl('P');
        setRateBasis('PC');
        setRatePart('PartA');
      })
      .catch(error => {
        console.error("Error fetching charge details:", error);
      });
  };

  const fetchSellingRateDetails = async (id, userId) => {
    try {
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Enquiry/getsellingratedetailsbyid`, { enquiry_id: id, user_id: userId }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = response.data;
      setSellingRateID(data.sellingrate_id || 0);
      setFromValidDate(data.sellingrate_fromvaliddate || "");
      setToValidDate(data.sellingrate_tovaliddate || "");
      setCustomerName(data.sellingrate_customername || "");
      setActivity(data.sellingrate_activity || "Select");
      setContainerSize(data.sellingrate_containersize || "Select");
      setContainerType(data.sellingrate_containertype || "Select");
      setFreeDays(data.sellingrate_freedays || "");
      setMonth(data.sellingrate_month || "Select");
      setYear(data.sellingrate_year || "");
      setChargeName(data.sellingrate_chargename || "Select");
      setGst(data.sellingrate_gst || "");
      setCurrency(data.sellingrate_currency || "Select");
      setPrepColl(data.sellingrate_prepcoll || "Select");
      setRateBasis(data.sellingrate_ratebasis || "Select");
      setGstYN(data.sellingrate_gstyn || "Select");
      setRatePart(data.sellingrate_ratepart || "Select");
      setPerUnit(data.sellingrate_perunit || "");
      setExchangeRate(data.sellingrate_exchangerate || "");
      setRate(data.sellingrate_rate || "");
      setFreight(data.sellingrate_freight || "");
      setAmount(data.sellingrate_amount || "");
      setGstin(data.sellingrate_gstin || "");
      setSacCode(data.sellingrate_saccode || "");
      setCgst(data.sellingrate_cgst || "");
      setSgst(data.sellingrate_sgst || "");
      setIgst(data.sellingrate_igst || "");
      setTotal(data.sellingrate_total || "");
    } catch (error) {
      console.error("Error fetching selling rate details: ", error);
    }
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    const currencyOption = currenciesOptions.find(option => option.value == e.target.value);
    const currencyCode = currencyOption ? currencyOption.label : ""; // Safely access label
    setCurrencyCode(currencyCode);
    setExchangeRate("");
    if (rate > 0) {
      let { amount, freight, calcGST, total } = CalculateAmount(perUnit, exchangeRate, rate, gst, currencyCode);
      setAmount(amount);
      setFreight(freight);
      setIgst(calcGST);
      setTotal(total);
    }
  };
  
  const handleRateChange = (e) => {
    let rate = e.target.value;
    if (rate > 0) {
      let { amount, freight, calcGST, total } = CalculateAmount(perUnit, exchangeRate, rate, gst, currencyCode);
      setAmount(amount);
      setFreight(freight);
      setIgst(calcGST);
      setTotal(total);
    }
    setRate(rate);
  };

  const handleExchangeRateChange = (e) => {
    const sanitizedValue = allowOnlyNumbers(e.target.value); 
    setExchangeRate(sanitizedValue);

    if (sanitizedValue > 0 && rate > 0) {
      let { amount, freight, calcGST, total } = CalculateAmount(perUnit, sanitizedValue, rate, gst, currencyCode);
      setAmount(amount);
      setFreight(freight);
      setIgst(calcGST);
      setTotal(total);
    }
  };

  const handleBackClick = () => {
    navigate(`/enquiry-details?enquiryReferenceID=${enquiryID}`);
  };

  const handleGSTYNChange = (e) => {

    setGstYN(e.target.value);
    if (rate > 0 && e.target.value === "Y") {
      let { amount, freight, calcGST, total } = CalculateAmount(perUnit, exchangeRate, rate, gst, currencyCode);
      setAmount(amount);
      setFreight(freight);
      setIgst(calcGST);
      setTotal(total);
      setCgst(gst / 2);
      setSgst(gst / 2);
    } else {
      let { amount, freight, calcGST, total } = CalculateAmount(perUnit, exchangeRate, rate, 0, currencyCode);
      setGstin("");
      setCgst("");
      setSgst("");
      setIgst("");
      setAmount(amount);
      setFreight(freight);
      setIgst(calcGST);
      setTotal(total);
    }
  };

  const handleFreeDaysChange = (e) => {
    setFreeDays(allowOnlyNumbers(e.target.value));
  };

  const handleYearChange = (e) => {
    setYear(allowOnlyNumbers(e.target.value));
  };

  const handlePerUnitChange = (e) => {
    setPerUnit(allowOnlyNumbers(e.target.value));
  }

  
  const handleFrieghtChange = (e) => {
    setFreight(allowOnlyNumbers(e.target.value));
  };

  const handleAmountChange = (e) => {
    setAmount(allowOnlyNumbers(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setShowPopup(true);
      return;
    }

    setErrorFields({});
    setShowPopup(false);

    const formData = {
      sellingrate_id: sellingRateID,
      enquiry_id: enquiryID,
      sellingrate_fromvaliddate: fromValidDate,
      sellingrate_tovaliddate: toValidDate,
      sellingrate_customername: customerName,
      sellingrate_activity: activity,
      sellingrate_containersize: containerSize,
      sellingrate_containertype: containerType,
      sellingrate_freedays: freeDays,
      sellingrate_month: month,
      sellingrate_year: year,
      sellingrate_chargename: chargeName,
      sellingrate_gst: gst,
      sellingrate_currency: currency,
      sellingrate_prepcoll: prepColl,
      sellingrate_ratebasis: rateBasis,
      sellingrate_gstyn: gstYN,
      sellingrate_ratepart: ratePart,
      sellingrate_perunit: perUnit,
      sellingrate_exchangerate: exchangeRate,
      sellingrate_rate: rate,
      sellingrate_freight: freight,
      sellingrate_amount: amount,
      sellingrate_gstin: gstin,
      sellingrate_saccode: sacCode,
      sellingrate_cgst: cgst,
      sellingrate_sgst: sgst,
      sellingrate_igst: igst,
      sellingrate_total: total,
    };
    try {
      const userId = getUserIdFromToken();
      const sellingRateDetails = { ...formData, user_id: userId };
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Enquiry/savesellingrate`, sellingRateDetails, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      let sellerRateReferenceID = response.data;
      if (sellerRateReferenceID > 0) {
        navigate(`/buying-rate?enquiryReferenceID=${enquiryID}&sellerRateReferenceID=${sellerRateReferenceID}`);
      }
    } catch (error) {
      console.error("Error saving Selling rate details: ", error);
    }


  };

  const validate = () => {
    // Validation
    const errors = {};
    if (!fromValidDate) errors.fromValidDate = "From Valid Date is required.";
    if (!toValidDate) errors.toValidDate = "To Valid Date is required.";
    if (!customerName) errors.customerName = "Customer Name is required.";
    if (activity === "Select") errors.activity = "Activity is required.";

    setErrorFields(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="step-container">
      <h2>Selling Rate</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <div className={`form-group ${errorFields.fromValidDate ? "error" : ""}`}>
              <label htmlFor="fromValidDate">From Valid Date</label>
              <input
                type="date"
                id="fromValidDate"
                value={fromValidDate || ""}
                onChange={(e) => setFromValidDate(e.target.value)}
              />
            </div>
            <div className={`form-group ${errorFields.toValidDate ? "error" : ""}`}>
              <label htmlFor="toValidDate">To Valid Date</label>
              <input
                type="date"
                id="toValidDate"
                value={toValidDate || ""}
                onChange={(e) => setToValidDate(e.target.value)}
              />
            </div>
            <div className={`form-group ${errorFields.customerName ? "error" : ""}`}>
              <label htmlFor="customerName">Customer Name</label>
              <input
                type="text"
                id="customerName"
                value={customerName || ""}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className={`form-group ${errorFields.activity ? "error" : ""}`}>
              <label htmlFor="activity">Activity</label>
              <select
                id="activity"
                value={activity || "Select"}
                onChange={(e) => setActivity(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Forwarding">Forwarding</option>
                <option value="Custom">Custom Clearance</option>
                <option value="Transportation">Transportation</option>
              </select>
            </div>
            <h3>Container Details</h3>
            <div className="form-group">
              <label htmlFor="containerSize">Container Size</label>
              <select
                id="containerSize"
                value={containerSize || "Select"}
                onChange={(e) => setContainerSize(e.target.value)}
                className="form-control"
              >
                <option value="0">Select</option>
                {containerSizeOptions.map((container) => (
                  <option key={container.value} value={container.value}>
                    {container.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="containerType">Container Type</label>
              <select
                id="containerType"
                value={containerType || "Select"}
                onChange={(e) => setContainerType(e.target.value)}
                className="form-control"
              >
                <option value="0">Select</option>
                {containerTypesOptions.map((containertype) => (
                  <option key={containertype.value} value={containertype.value}>
                    {containertype.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="freeDays">Free Days</label>
              <input
                type="text"
                id="freeDays"
                value={freeDays || ""}
                onChange={handleFreeDaysChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="month">Month</label>
              <select
                id="month"
                value={month || "Select"}
                onChange={(e) => setMonth(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                {[...Array(12).keys()].map((m) => (
                  <option key={m + 1} value={m + 1}>
                    {m + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                value={year || ""}
                onChange={handleYearChange}
              />
            </div>
            <h3>Charges</h3>
            <div className="form-group">
              <label htmlFor="chargeName">Charge Name</label>
              <select
                id="chargeName"
                value={chargeName || "Select"}
                onChange={(e) => {
                  setChargeName(e.target.value);
                  getChargesDetailsById(e.target.value);
                }}
                className="form-control"
              >
                <option value="0">Select</option>
                {chargesOptions.map((charge) => (
                  <option key={charge.value} value={charge.value}>
                    {charge.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gst">GST</label>
              <input
                type="text"
                id="gst"
                value={gst || ""}
                disabled={true}
                onChange={(e) => setGst(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="currency">Currency</label>
              <select
                id="currency"
                value={currency || "Select"}
                onChange={handleCurrencyChange}
                className="form-control"
              >
                <option value="0">Select</option>
                {currenciesOptions.map((curr) => (
                  <option key={curr.value} value={curr.value}>
                    {curr.label}
                  </option>
                ))}
              </select>
            </div>
            {currencyCode !== "INR" && (
              <div className="form-group">
                <label htmlFor="exchangeRate">Exchange Rate</label>
                <input
                  type="text"
                  id="exchangeRate"
                  value={exchangeRate || ""}
                  onChange={handleExchangeRateChange}
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="prepColl">Prep/Coll</label>
              <select
                id="prepColl"
                value={prepColl || "Select"}
                onChange={(e) => setPrepColl(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="C">C</option>
                <option value="P">P</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rateBasis">Rate Basis</label>
              <select
                id="rateBasis"
                value={rateBasis || "Select"}
                onChange={(e) => setRateBasis(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="PC">Per Count</option>
                <option value="PU">Per Unit</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gstYN">GST (Y/N)</label>
              <select
                id="gstYN"
                value={gstYN || "Select"}
                onChange={handleGSTYNChange}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gstin">GSTIN</label>
              <input
                type="text"
                id="gstin"
                value={gstin || ""}
                disabled={true}
                onChange={(e) => setGstin(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ratePart">Rate Part</label>
              <select
                id="ratePart"
                value={ratePart || "Select"}
                onChange={(e) => setRatePart(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="PartA">Part A</option>
                <option value="PartB">Part B</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="perUnit">Per Unit</label>
              <input
                type="text"
                id="perUnit"
                value={perUnit || ""}
                onChange={handlePerUnitChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="rate">Rate</label>
              <input
                type="text"
                id="rate"
                value={rate || ""}
                onChange={handleRateChange}
              />
            </div>
            {currencyCode !== "INR" && (
              <div className="form-group">
                <label htmlFor="freight">Freight</label>
                <input
                  type="text"
                  id="freight"
                  value={freight || ""}
                  onChange={handleFrieghtChange}
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                value={amount || ""}
                onChange={handleAmountChange}
              />
              <div className="form-group">
                <label htmlFor="sacCode">SAC Code</label>
                <input
                  type="text"
                  id="sacCode"
                  value={sacCode || ""}
                  disabled={true}
                  onChange={(e) => setSacCode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cgst">CGST</label>
                <input
                  type="text"
                  id="cgst"
                  value={cgst || ""}
                  disabled={true}
                  onChange={(e) => setCgst(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sgst">SGST</label>
                <input
                  type="text"
                  id="sgst"
                  value={sgst || ""}
                  disabled={true}
                  onChange={(e) => setSgst(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="igst">IGST</label>
                <input
                  type="text"
                  id="igst"
                  value={igst || ""}
                  disabled={true}
                  onChange={(e) => setIgst(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="total">Total</label>
                <input
                  type="text"
                  id="total"
                  value={total || ""}
                  disabled={true}
                  onChange={(e) => setTotal(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="navigation">
          <button type="button" className="previous" onClick={handleBackClick}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
      {showPopup && (
        <ValidationPopup
          errors={errorFields}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

function CalculateAmount(perUnit, exchangeRate, rate, gst, currencyCode) {
  let amount = 0;
  let freight = 0;
  let calcGST = 0;
  if (currencyCode !== "INR" && exchangeRate) {
    amount = rate * exchangeRate * perUnit;
    freight = rate * perUnit;
  }
  else {
    amount = rate * perUnit;
  }
  if (gst > 0) {
    calcGST = gst / 100 * amount;
  }
  let total = 0;
  total = amount + calcGST;
  return { amount, freight, calcGST, total };
}

export default SellingRate;
