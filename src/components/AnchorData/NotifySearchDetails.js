import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import Grid from "../Common/Grid";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";

const NotifySearchDetails = () => {
  const [notifyPartyName, setNotifyPartyName] = useState("");
  const [notifyPartyEmail, setNotifyPartyEmail] = useState("");
  const [notifyPartyPhone, setNotifyPartyPhone] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [notifyPartyToDelete, setNotifyPartyToDelete] = useState(null);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedNotifyPartyDetails) {
      const updatedNotifyPartyDetails = location.state.updatedNotifyPartyDetails;
      setSearchResults((prevResults) =>
        prevResults.map((result) =>
          result.notify_id === updatedNotifyPartyDetails.notify_id ? updatedNotifyPartyDetails : result
        )
      );
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { notifyPartyName, notifyPartyEmail, notifyPartyPhone } = location.state.searchParams;
      setNotifyPartyName(notifyPartyName || "");
      setNotifyPartyEmail(notifyPartyEmail || "");
      setNotifyPartyPhone(notifyPartyPhone || "");
      handleSearch(notifyPartyName, notifyPartyEmail, notifyPartyPhone);
    }
  }, [location.state]);

  const handleSearch = async (notifyPartyName, notifyPartyEmail, notifyPartyPhone) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        notifyPartyName: notifyPartyName || "",
        notifyPartyEmail: notifyPartyEmail || "",
        notifyPartyPhone: notifyPartyPhone || ""
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/Notify/searchnotifydetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching notify party details: ", error);
    }
  };

  const handleEdit = async (row) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        notify_id: row.notify_id
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/Notify/getnotifydetailsbyid`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const notifyPartyDetails = response.data;
      navigate("/notify-parties", { state: { notifyPartyDetails, searchParams: { notifyPartyName, notifyPartyEmail, notifyPartyPhone } } });
    } catch (error) {
      console.error("Error fetching notify party details: ", error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        notify_id: notifyPartyToDelete.notify_id
      };
      await axios.post(`${urls.BASE_URL}/blapi/Notify/deactivatenotifydetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.notify_id !== notifyPartyToDelete.notify_id));
      setShowDeletePopup(false);
      setNotifyPartyToDelete(null);
    } catch (error) {
      console.error("Error deleting notify party details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setNotifyPartyToDelete(row);
    setShowDeletePopup(true);
  };

  const columns = [
    { name: "notify_name", label: "Name" },
    { name: "notify_address", label: "Address" },
    { name: "notify_email", label: "Email" },
    { name: "notify_phone", label: "Phone" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Search Notify Party</h2>
        <div className="form-group">
          <label htmlFor="notifyPartyName">Name</label>
          <input
            type="text"
            id="notifyPartyName"
            value={notifyPartyName}
            onChange={(e) => setNotifyPartyName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notifyPartyEmail">Email</label>
          <input
            type="text"
            id="notifyPartyEmail"
            value={notifyPartyEmail}
            onChange={(e) => setNotifyPartyEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notifyPartyPhone">Phone</label>
          <input
            type="text"
            id="notifyPartyPhone"
            value={notifyPartyPhone}
            onChange={(e) => setNotifyPartyPhone(e.target.value)}
          />
        </div>
        <button onClick={() => handleSearch(notifyPartyName, notifyPartyEmail, notifyPartyPhone)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/notify-parties" style={{ textDecoration: "none", color: "blue" }}>+ Add New Notify Party</Link>
        </div>
        <Grid columns={columns} data={searchResults.map((result) => ({ ...result, id: result.notify_id }))} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
      {showDeletePopup && (
        <DeleteConfirmationPopup
          itemName={`notify party: ${notifyPartyToDelete.notify_name}`}
          onConfirm={handleDelete}
          onCancel={() => setShowDeletePopup(false)}
        />
      )}
    </div>
  );
};

export default NotifySearchDetails;
