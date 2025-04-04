import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import Grid from "../Common/Grid";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";

const RateSearchDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams, setSearchParams] = useState({
    charge_code: "",
    charge_name: "",
    charge_currency: 0,
    charge_type: ""
  });
  const [errors, setErrors] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [chargesToDelete, setChargesToDelete] = useState({});
  const [currenciesOptions, setCurrenciesOptions] = useState([]);

  const columns = [
    { name: "chargeCode", label: "Code" },
    { name: "chargeName", label: "Name" },
    { name: "currency_code", label: "Currency" },
    { name: "chargetype", label: "Type" },
    { name: "chargegstpercentage", label: "GST %" },
    { name: "chargeformula", label: "Formula" },
    { name: "chargepercentage", label: "Percentage" }
  ];
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (location.state) {
      if (location.state.updatedChargeDetails) {
        const updatedChargeDetails = location.state.updatedChargeDetails;
        setSearchResults((prevResults) =>
          prevResults.map((result) =>
            result.chargeId === updatedChargeDetails.chargeId ? updatedChargeDetails : result
          )
        );
      }
      if (location.state.searchResults) {
        setSearchResults(location.state.searchResults);
      }
    }
    if (location.state && location.state.searchParams) {
        const { charge_code, charge_name, charge_currency, charge_type } = location.state.searchParams;
        setSearchParams({ charge_code: charge_code || "", charge_name: charge_name || "" , charge_currency: charge_currency || 0, charge_type: charge_type || "" });
        handleSearch({ charge_code, charge_name, charge_currency, charge_type });
      }
      fetchAllCurrencies();

  }, [location.state]);

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

  const handleEdit = async (row) => {
    const { charge_code, charge_name, charge_currency, charge_type } = searchParams;
    try {
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Anchordata/Charges/getChargesdetailsbyid`, { Charges_id: row.chargeId }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const chargeDetails = response.data;
      navigate("/rate-details", { state: { chargeDetails, searchParams: { charge_code, charge_name, charge_currency, charge_type } } });
    } catch (error) {
      console.error("Error fetching charge details: ", error);
    }
  };

  const handleDelete = async () => {
    try {
      const searchParams = {
        commodity_id: chargesToDelete.chargeId
      };
      await axios.post(`${API_URLS.BASE_URL}/blapi/anchordata/deactivateChargesdetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.chargeId !== chargesToDelete.chargeId));
      setShowDeletePopup(false);
      setChargesToDelete(null);
    } catch (error) {
      console.error("Error deleting commodity details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setChargesToDelete(row);
    setShowDeletePopup(true);
  };


  const handleSearch = async (params) => {
    try {
      const response = await axios.post(`${API_URLS.BASE_URL}/blapi/Anchordata/Charges/searchChargesdetails`, params, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching charge details: ", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Charge Details</h2>
        <div className="form-group">
          <label htmlFor="charge_code">Charge Code</label>
          <input
            type="text"
            id="charge_code"
            value={searchParams.charge_code || ""}
            onChange={(e) => setSearchParams({ ...searchParams, charge_code: e.target.value })}
            className={errors.charge_code ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="charge_name">Charge Name</label>
          <input
            type="text"
            id="charge_name"
            value={searchParams.charge_name || ""}
            onChange={(e) => setSearchParams({ ...searchParams, charge_name: e.target.value })}
            className={errors.charge_name ? "error" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="charge_currency">Charge Currency</label>
          <select
            id="charge_currency"
            value={searchParams.charge_currency || 0}
            onChange={(e) => setSearchParams({ ...searchParams, charge_currency: e.target.value })}
          >
            <option value="">Select Currency</option>
            {currenciesOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="charge_type">Charge Type</label>
          <select
            id="charge_type"
            value={searchParams.charge_type || ""}
            onChange={(e) => setSearchParams({ ...searchParams, charge_type: e.target.value })}
          >
            <option value="0">Select</option>
            <option value="Freight">Freight</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        <button onClick={() => handleSearch(searchParams)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/rate-details" style={{ textDecoration: "none", color: "blue" }}>+ Add New Charge</Link>
        </div>
        <Grid columns={columns} data={searchResults} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
      {showDeletePopup && (
        <DeleteConfirmationPopup
          itemName={`Charge: ${chargesToDelete.chargeName}`}
          onConfirm={handleDelete}
          onCancel={() => setShowDeletePopup(false)}
        />
      )}
    </div>
  );
};

export default RateSearchDetails;
