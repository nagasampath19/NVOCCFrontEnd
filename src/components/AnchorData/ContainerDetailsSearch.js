import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import Grid from "../Common/Grid";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";

const ContainerDetailsSearch = () => {
  const [searchParams, setSearchParams] = useState({
    container_number: "",
    container_sizeid: "",
    container_typeid: "0"
  });
  const [searchResults, setSearchResults] = useState([]);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();
  const [containerToDelete, setContainerToDelete] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleSearch = useCallback(async (params) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/Container/searchContainerdetails`, params, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching container details: ", error);
    }
  }, [urls.BASE_URL]);

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { container_number, container_sizeid, container_typeid } = location.state.searchParams;
      setSearchParams({ container_number: container_number || "", container_sizeid: container_sizeid || "", container_typeid: container_typeid || "" });
      handleSearch({ container_number, container_sizeid, container_typeid });
    }
  }, [location.state, handleSearch]);

  const handleEdit = async (row) => {
    const token = localStorage.getItem("token");
    const { container_number, container_sizeid, container_typeid } = searchParams;
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/Container/getContainerdetailsbyid`, { Container_id: row.container_id }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const containerDetails = response.data;
      navigate("/container-details", { state: { containerDetails, searchParams: { container_number, container_sizeid, container_typeid } } });
    } catch (error) {
      console.error("Error fetching container details: ", error);
    }
  };

  const handleDelete = async (row) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        container_id: containerToDelete.container_id
      };
      await axios.post(`${urls.BASE_URL}/blapi/Container/deactivatecontainerdetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.container_id !== containerToDelete.container_id));
      setShowDeletePopup(false);
      setContainerToDelete(null);
    } catch (error) {
      console.error("Error deleting Container details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setContainerToDelete(row);
    setShowDeletePopup(true);
  };

  const columns = [
    { name: "container_number", label: "Container Number" },
    { name: "container_size", label: "Container Size" },
    { name: "container_type", label: "Container Type" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Search Container Details</h2>
        <div className="form-group">
          <label htmlFor="container_number">Container Number</label>
          <input
            type="text"
            id="container_number"
            name="container_number"
            maxLength={11}
            value={searchParams.container_number}
            onChange={(e) => setSearchParams({ ...searchParams, container_number: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="container_sizeid">Container Size</label>
          <select
            id="container_sizeid"
            name="container_sizeid"
            value={searchParams.container_sizeid}
            onChange={(e) => setSearchParams({ ...searchParams, container_sizeid: e.target.value })}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="45">45</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="container_typeid">Container Type</label>
          <select
            id="container_typeid"
            name="container_typeid"
            value={searchParams.container_typeid}
            onChange={(e) => setSearchParams({ ...searchParams, container_typeid: e.target.value })}
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
        <button onClick={() => handleSearch(searchParams)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/container-details" style={{ textDecoration: "none", color: "blue" }}>+ Add New Container</Link>
        </div>
        <Grid columns={columns} data={searchResults} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
       {showDeletePopup && (
                    <DeleteConfirmationPopup
                      itemName={`Container: ${containerToDelete.container_number}`}
                      onConfirm={handleDelete}
                      onCancel={() => setShowDeletePopup(false)}
                    />
                  )}
    </div>
  );
};

export default ContainerDetailsSearch;
