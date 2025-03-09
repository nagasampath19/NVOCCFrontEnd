import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import Grid from "../Common/Grid";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";

const ConsigneeDetailsSearch = () => {
  const [consigneeName, setConsigneeName] = useState("");
  const [consigneePhone, setConsigneePhone] = useState("");
  const [consigneeEmail, setConsigneeEmail] = useState("");
  const [consigneePAN, setConsigneePAN] = useState("");
  const [consigneeIEC, setConsigneeIEC] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [consigneeToDelete, setConsigneeToDelete] = useState(null);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedConsigneeDetails) {
      const updatedConsigneeDetails = location.state.updatedConsigneeDetails;
      setSearchResults((prevResults) =>
        prevResults.map((result) =>
          result.consignee_id === updatedConsigneeDetails.consignee_id ? updatedConsigneeDetails : result
        )
      );
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { consigneeName, consigneePhone, consigneeEmail, consigneePAN, consigneeIEC } = location.state.searchParams;
      setConsigneeName(consigneeName || "");
      setConsigneePhone(consigneePhone || "");
      setConsigneeEmail(consigneeEmail || "");
      setConsigneePAN(consigneePAN || "");
      setConsigneeIEC(consigneeIEC || "");
      handleSearch(consigneeName, consigneePhone, consigneeEmail, consigneePAN, consigneeIEC);
    }
  }, [location.state]);

  const handleSearch = async (consigneeName, consigneePhone, consigneeEmail, consigneePAN, consigneeIEC) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        consigneename: consigneeName || "",
        consigneephone: consigneePhone || "",
        consigneeemail: consigneeEmail || "",
        consigneepan: consigneePAN || "",
        consigneeiec: consigneeIEC || ""
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/Consignee/searchconsigneedetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching consignee details: ", error);
    }
  };

  const handleEdit = async (row) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        consignee_id: row.consignee_Id
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/Consignee/getconsigneedetailsbyid`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const consigneeDetails = response.data;
      navigate("/consignee-details", { state: { consigneeDetails, searchParams: { consigneeName, consigneePhone, consigneeEmail, consigneePAN, consigneeIEC } } });
    } catch (error) {
      console.error("Error fetching consignee details: ", error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        consignee_id: consigneeToDelete.consignee_Id
      };
      await axios.post(`${urls.BASE_URL}/blapi/Consignee/deactivateconsigneedetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.consignee_id !== consigneeToDelete.consignee_id));
      setShowDeletePopup(false);
      setConsigneeToDelete(null);
    } catch (error) {
      console.error("Error deleting consignee details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setConsigneeToDelete(row);
    setShowDeletePopup(true);
  };

  const columns = [
    { name: "consigneeName", label: "Name" },
    { name: "consigneePhone", label: "Phone" },
    { name: "consigneeEmail", label: "Email" },
    { name: "consigneePAN", label: "PAN" },
    { name: "consigneeIEC", label: "IEC" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Search Consignee Details</h2>
        <div className="form-group">
          <label htmlFor="consigneeName">Name</label>
          <input
            type="text"
            id="consigneeName"
            value={consigneeName}
            onChange={(e) => setConsigneeName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consigneePhone">Phone</label>
          <input
            type="text"
            id="consigneePhone"
            value={consigneePhone}
            onChange={(e) => setConsigneePhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consigneeEmail">Email</label>
          <input
            type="text"
            id="consigneeEmail"
            value={consigneeEmail}
            onChange={(e) => setConsigneeEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consigneePAN">PAN</label>
          <input
            type="text"
            id="consigneePAN"
            value={consigneePAN}
            onChange={(e) => setConsigneePAN(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consigneeIEC">IEC</label>
          <input
            type="text"
            id="consigneeIEC"
            value={consigneeIEC}
            onChange={(e) => setConsigneeIEC(e.target.value)}
          />
        </div>
        <button onClick={() => handleSearch(consigneeName, consigneePhone, consigneeEmail, consigneePAN, consigneeIEC)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/consignee-details" style={{ textDecoration: "none", color: "blue" }}>+ Add New Consignee</Link>
        </div>
        <Grid columns={columns} data={searchResults} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
      {showDeletePopup && (
        <DeleteConfirmationPopup
          itemName={`consignee: ${consigneeToDelete.consigneeName}`}
          onConfirm={handleDelete}
          onCancel={() => setShowDeletePopup(false)}
        />
      )}
    </div>
  );
};

export default ConsigneeDetailsSearch;
