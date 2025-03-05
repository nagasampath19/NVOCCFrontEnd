import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import Grid from "../Common/Grid";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";
import "../../css/VesselDetailsSearch.css";

const VesselDetailsSearch = () => {
  const [vesselName, setVesselName] = useState("");
  const [vesselimocode, setVesselImoCode] = useState("");
  const [vesselcallsign, setVesselCallSign] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [vesselToDelete, setVesselToDelete] = useState(null);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedVesselDetails) {
      const updatedVesselDetails = location.state.updatedVesselDetails;
      setSearchResults((prevResults) =>
        prevResults.map((result) =>
          result.vessel_id === updatedVesselDetails.vessel_id ? updatedVesselDetails : result
        )
      );
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { vesselName, vesselimocode, vesselcallsign } = location.state.searchParams;
      setVesselName(vesselName || "");
      setVesselImoCode(vesselimocode || "");
      setVesselCallSign(vesselcallsign || "");
      handleSearch(vesselName, vesselimocode, vesselcallsign);
    }
  }, [location.state]);

  const handleSearch = async (vesselName, vesselimocode, vesselcallsign) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        vesselname: vesselName || "",
        vesselimocode: vesselimocode || "",
        vesselcallsign: vesselcallsign || ""
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/searchvesseldetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching vessel details: ", error);
    }
  };

  const handleEdit = async (row) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        vesselid: row.vesselid
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/getvesseldetailsbyid`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const vesselDetails = response.data;
      navigate("/vessel-details", { state: { vesselDetails, searchParams: { vesselName, vesselimocode, vesselcallsign } } });
    } catch (error) {
      console.error("Error fetching vessel details: ", error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        vesselid: vesselToDelete.vesselid
      };
      await axios.post(`${urls.BASE_URL}/blapi/anchordata/deactivatevesseldetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.vessel_id !== vesselToDelete.vessel_id));
      setShowDeletePopup(false);
      setVesselToDelete(null);
    } catch (error) {
      console.error("Error deleting vessel details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setVesselToDelete(row);
    setShowDeletePopup(true);
  };

  const columns = [
    { name: "vesselname", label: "Vessel Name" },
    { name: "vesselimocode", label: "IMO Code" },
    { name: "vesselcallsign", label: "Vessel Call Sign" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Search Vessel Details</h2>
        <div className="form-group">
          <label htmlFor="vesselName">Vessel Name</label>
          <input
            type="text"
            id="vesselName"
            value={vesselName}
            onChange={(e) => setVesselName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vesselimocode">IMO Code</label>
          <input
            type="text"
            id="vesselimocode"
            value={vesselimocode}
            onChange={(e) => setVesselImoCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vesselcallsign">Vessel Call Sign</label>
          <input
            type="text"
            id="vesselcallsign"
            value={vesselcallsign}
            onChange={(e) => setVesselCallSign(e.target.value)}
          />
        </div>
        <button onClick={() => handleSearch(vesselName, vesselimocode, vesselcallsign)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/vessel-details" style={{ textDecoration: "none", color: "blue" }}>+ Add New Vessel</Link>
        </div>
        <Grid columns={columns} data={searchResults} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
      {showDeletePopup && (
        <DeleteConfirmationPopup
          itemName={`vessel: ${vesselToDelete.vesselname}`}
          onConfirm={handleDelete}
          onCancel={() => setShowDeletePopup(false)}
        />
      )}
    </div>
  );
};

export default VesselDetailsSearch;
