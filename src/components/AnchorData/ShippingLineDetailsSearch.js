import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import Grid from "../Common/Grid";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";


const ShippingLineDetailsSearch = () => {
  const [shippingLineCode, setShippingLineCode] = useState("");
  const [shippingLineName, setShippingLineName] = useState("");
  const [shippingLineType, setShippingLineType] = useState("0");
  const [searchResults, setSearchResults] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [shippingLineToDelete, setShippingLineToDelete] = useState(null);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedShippingLineDetails) {
      const updatedShippingLineDetails = location.state.updatedShippingLineDetails;
      setSearchResults((prevResults) =>
        prevResults.map((result) =>
          result.shippingLineId === updatedShippingLineDetails.shippingLineId ? updatedShippingLineDetails : result
        )
      );
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { shippingLineCode, shippingLineName, shippingLineType } = location.state.searchParams;
      setShippingLineCode(shippingLineCode || "");
      setShippingLineName(shippingLineName || "");
      setShippingLineType(shippingLineType || "0");
      handleSearch(shippingLineCode, shippingLineName, shippingLineType);
    }
  }, [location.state]);

  const handleSearch = async (shippingLineCode, shippingLineName, shippingLineType) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        shippingLineCode: shippingLineCode || "",
        shippingLineName: shippingLineName || "",
        shippingLineType: shippingLineType || "0"
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/searchshippinglinedetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching shipping line details: ", error);
    }
  };

  const handleEdit = async (row) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        shippinglineid: row.shippingLineId
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/getshippinglinedetailsbyid`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const shippingLineDetails = response.data;
      navigate("/shipping-line-details", { state: { shippingLineDetails, searchParams: { shippingLineCode, shippingLineName, shippingLineType } } });
    } catch (error) {
      console.error("Error fetching shipping line details: ", error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        shippinglineid: shippingLineToDelete.shippingLineId
      };
      await axios.post(`${urls.BASE_URL}/blapi/anchordata/deactivateshippinglinedetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.shippingLineId !== shippingLineToDelete.shippingLineId));
      setShowDeletePopup(false);
      setShippingLineToDelete(null);
    } catch (error) {
      console.error("Error deleting shipping line details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setShippingLineToDelete(row);
    setShowDeletePopup(true);
  };

  const columns = [
    { name: "shippingLineCode", label: "Shipping Line Code" },
    { name: "shippingLineName", label: "Shipping Line Name" },
    { name: "shippingLineType", label: "Shipping Line Type" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Search Shipping Line Details</h2>
        <div className="form-group">
          <label htmlFor="shippingLineCode">Line Code</label>
          <input
            type="text"
            id="shippingLineCode"
            value={shippingLineCode}
            onChange={(e) => setShippingLineCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shippingLineName">Line Name</label>
          <input
            type="text"
            id="shippingLineName"
            value={shippingLineName}
            onChange={(e) => setShippingLineName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shippingLineType">Line Type</label>
          <select
            id="shippingLineType"
            value={shippingLineType}
            onChange={(e) => setShippingLineType(e.target.value)}
            className="form-control"
          >
            <option value="0">Select</option>
            <option value="India">India</option>
            <option value="Overseas">Overseas</option>
          </select>
        </div>
        <button onClick={() => handleSearch(shippingLineCode, shippingLineName, shippingLineType)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/shipping-line-details" style={{ textDecoration: "none", color: "blue" }}>+ Add New Shipping Line</Link>
        </div>
        <Grid columns={columns} data={searchResults} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
      {showDeletePopup && (
        <DeleteConfirmationPopup
          itemName={`shipping line: ${shippingLineToDelete.shippingLineName}`}
          onConfirm={handleDelete}
          onCancel={() => setShowDeletePopup(false)}
        />
      )}
    </div>
  );
};

export default ShippingLineDetailsSearch;
