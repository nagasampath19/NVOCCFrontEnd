import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import Grid from "../Common/Grid";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";


const ShipperDetailsSearch = () => {
  const [shipperName, setShipperName] = useState("");
  const [shipperPhone, setShipperPhone] = useState("");
  const [shipperEmail, setShipperEmail] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [shipperToDelete, setShipperToDelete] = useState(null);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedShipperDetails) {
      const updatedShipperDetails = location.state.updatedShipperDetails;
      setSearchResults((prevResults) =>
        prevResults.map((result) =>
          result.shipper_id === updatedShipperDetails.shipper_id ? updatedShipperDetails : result
        )
      );
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { shipperName, shipperPhone, shipperEmail } = location.state.searchParams;
      setShipperName(shipperName || "");
      setShipperPhone(shipperPhone || "");
      setShipperEmail(shipperEmail || "");
      handleSearch(shipperName, shipperPhone, shipperEmail);
    }
  }, [location.state]);

  const handleSearch = async (shipperName, shipperPhone, shipperEmail) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        shippername: shipperName || "",
        shipperphone: shipperPhone || "",
        shipperemail: shipperEmail || ""
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/Shipper/searchshipperdetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching shipper details: ", error);
    }
  };

  const handleEdit = async (row) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        shipper_id: row.shipperid
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/Shipper/getshipperdetailsbyid`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const shipperDetails = response.data;
      navigate("/shipper-details", { state: { shipperDetails, searchParams: { shipperName, shipperPhone, shipperEmail } } });
    } catch (error) {
      console.error("Error fetching shipper details: ", error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        shipper_id: shipperToDelete.shipperid
      };
      await axios.post(`${urls.BASE_URL}/blapi/Shipper/deactivateshipperdetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.shipper_id !== shipperToDelete.shipper_id));
      setShowDeletePopup(false);
      setShipperToDelete(null);
    } catch (error) {
      console.error("Error deleting shipper details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setShipperToDelete(row);
    setShowDeletePopup(true);
  };

  const columns = [
    { name: "shipperName", label: "Name" },
    { name: "shipper_fulladdress", label: "Address" },
    { name: "shipperPhone", label: "Phone" },
    { name: "shipperCIN", label: "CIN" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Search Shipper Details</h2>
        <div className="form-group">
          <label htmlFor="shipperName">Name</label>
          <input
            type="text"
            id="shipperName"
            value={shipperName}
            onChange={(e) => setShipperName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shipperPhone">Phone</label>
          <input
            type="text"
            id="shipperPhone"
            value={shipperPhone}
            onChange={(e) => setShipperPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shipperEmail">Email</label>
          <input
            type="text"
            id="shipperEmail"
            value={shipperEmail}
            onChange={(e) => setShipperEmail(e.target.value)}
          />
        </div>
        <button onClick={() => handleSearch(shipperName, shipperPhone, shipperEmail)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/shipper-details" style={{ textDecoration: "none", color: "blue" }}>+ Add New Shipper</Link>
        </div>
        <Grid columns={columns} data={searchResults} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
      {showDeletePopup && (
        <DeleteConfirmationPopup
          itemName={`shipper: ${shipperToDelete.shipperName}`}
          onConfirm={handleDelete}
          onCancel={() => setShowDeletePopup(false)}
        />
      )}
    </div>
  );
};

export default ShipperDetailsSearch;
