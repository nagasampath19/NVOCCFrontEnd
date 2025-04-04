import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { API_URLS } from "../../../config/urls";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ValidationPopup from "../../Common/ValidationPopup";
import { allowOnlyNumbers } from "../../../utils/commonUtils";

const BuyingRate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [enquiryID, setEnquiryID] = useState("");
  const [buyingRateID, setBuyingRateID] = useState("");
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
  const queryParams = new URLSearchParams(location.search);
  const sellerRateReferenceID = queryParams.get("sellerRateReferenceID");
  const enquiryReferenceID = queryParams.get("enquiryReferenceID");

  useEffect(() => {
    const userId = getUserIdFromToken();
    fetchContainerSize();
    fetchContainerTypes();
    fetchAllCharges(userId);
    fetchAllCurrencies();

    if (enquiryReferenceID) {
      setEnquiryID(enquiryReferenceID);
    }
    if (enquiryReferenceID) {
      fetchBuyingRateDetails(enquiryReferenceID, userId);
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

  const fetchBuyingRateDetails = async (id, userId) => {
    try {
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Enquiry/getbuyingratedetailsbyid`, { enquiry_id: id, user_id: userId }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = response.data;
      setBuyingRateID(data.buyingrate_id || 0);
      setFromValidDate(data.buyingrate_fromvaliddate || "");
      setToValidDate(data.buyingrate_tovaliddate || "");
      setCustomerName(data.buyingrate_vendorname || "");
      setActivity(data.buyingrate_activity || "Select");
      setContainerSize(data.buyingrate_containersize || "Select");
      setContainerType(data.buyingrate_containertype || "Select");
      setFreeDays(data.buyingrate_freedays || "");
      setMonth(data.buyingrate_month || "Select");
      setYear(data.buyingrate_year || "");
      setChargeName(data.buyingrate_chargename || "Select");
      setGst(data.buyingrate_gst || "");
      setCurrency(data.buyingrate_currency || "Select");
      setPrepColl(data.buyingrate_prepcoll || "Select");
      setRateBasis(data.buyingrate_ratebasis || "Select");
      setGstYN(data.buyingrate_gstyn || "Select");
      setRatePart(data.buyingrate_ratepart || "Select");
      setPerUnit(data.buyingrate_perunit || "");
      setExchangeRate(data.buyingrate_exchangerate || "");
      setRate(data.buyingrate_rate || "");
      setFreight(data.buyingrate_freight || "");
      setAmount(data.buyingrate_amount || "");
      setGstin(data.buyingrate_gstin || "");
      setSacCode(data.buyingrate_saccode || "");
      setCgst(data.buyingrate_cgst || "");
      setSgst(data.buyingrate_sgst || "");
      setIgst(data.buyingrate_igst || "");
      setTotal(data.buyingrate_total || "");
    } catch (error) {
      console.error("Error fetching buying rate details: ", error);
    }
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

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    const currencyOption = currenciesOptions.find(option => option.value == e.target.value);
    const currencyCode = currencyOption ? currencyOption.label : ""; 
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
    navigate(`/selling-rate?enquiryReferenceID=${enquiryID}`);
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
      buyingrate_id: buyingRateID,
      enquiry_id: enquiryID,
      buyingrate_fromvaliddate: fromValidDate,
      buyingrate_tovaliddate: toValidDate,
      buyingrate_vendorname: customerName,
      buyingrate_activity: activity,
      buyingrate_containersize: containerSize,
      buyingrate_containertype: containerType,
      buyingrate_freedays: freeDays,
      buyingrate_month: month,
      buyingrate_year: year,
      buyingrate_chargename: chargeName,
      buyingrate_gst: gst,
      buyingrate_currency: currency,
      buyingrate_prepcoll: prepColl,
      buyingrate_ratebasis: rateBasis,
      buyingrate_gstyn: gstYN,
      buyingrate_ratepart: ratePart,
      buyingrate_perunit: perUnit,
      buyingrate_exchangerate: exchangeRate,
      buyingrate_rate: rate,
      buyingrate_freight: freight,
      buyingrate_amount: amount,
      buyingrate_gstin: gstin,
      buyingrate_saccode: sacCode,
      buyingrate_cgst: cgst,
      buyingrate_sgst: sgst,
      buyingrate_igst: igst,
      buyingrate_total: total,
    };
    try {
      const userId = getUserIdFromToken();
      const buyingRateDetails = { ...formData, user_id: userId };
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Enquiry/savebuyingrate`, buyingRateDetails, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      let buyingRateReferenceID = response.data;
      if (buyingRateReferenceID > 0) {
        navigate(`/estimation?enquiryReferenceID=${enquiryID}&sellerRateReferenceID=${sellerRateReferenceID}&buyingRateReferenceID=${buyingRateReferenceID}`);
      }
    } catch (error) {
      console.error("Error saving buying rate details: ", error);
    }
  };

  const validate = () => {
    // Validation
    const errors = {};
    if (!fromValidDate) errors.fromValidDate = "From Valid Date is required.";
    if (!toValidDate) errors.toValidDate = "To Valid Date is required.";
    if (!customerName) errors.customerName = "Vendor Name is required.";
    if (activity === "Select") errors.activity = "Activity is required.";

    setErrorFields(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="step-container">
      <h2>Buying Rate</h2>
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
              <label htmlFor="customerName">Vendor Name</label>
              <input
                type="text"
                id="customerName"
                value={customerName || ""}
                maxLength={250}
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

export default BuyingRate;
