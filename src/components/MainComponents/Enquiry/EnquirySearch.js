import React, { useState, useEffect } from "react";
import Grid from "../../Common/Grid";
import axios from "axios";
import { API_URLS } from "../../../config/urls";
import jwtDecode from "jwt-decode";
import { Link, useNavigate, useLocation } from "react-router-dom";

const EnquirySearch = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [enquiryToDelete, setEnquiryToDelete] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const token = localStorage.getItem("token");
            const userId = getUserIdFromToken();
            const response = await axios.post(
                `${API_URLS.BASE_URL}/blapi/Enquiry/getenqurysearch`,
                { user_id: userId },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setEnquiries(response.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching enquiries:", err);
            setError("Failed to load enquiries.");
            setLoading(false);
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
    const handleEdit = (row) => {
        navigate(`/enquiry-details?enquiryReferenceID=${row.enquiry_id}`);
    };
    const handleDelete = async (row) => {
        const token = localStorage.getItem("token");
    try {
      const searchParams = {
        commodity_id: enquiryToDelete.commodityId
      };
      await axios.post(`${API_URLS.BASE_URL}/blapi/anchordata/deactivatecommoditydetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setShowDeletePopup(false);
      setEnquiryToDelete(null);
    } catch (error) {
      console.error("Error deleting Enquiry details: ", error);
    }
     };

    const confirmDelete = (row) => {
        setEnquiryToDelete(row);
        setShowDeletePopup(true);
    };

    const columns = [
        { name: "enquiry_date", label: "Date" },
        { name: "enquiry_shipper", label: "Shipper" },
        { name: "enquiry_portofloding", label: "Port of Loading" },
        { name: "enquiry_portofdischarge", label: "Port of Discharge" },
        { name: "totalbuyingrate", label: "Buying Rate" },
        { name: "totalsellingrate", label: "Selling Rate" },
        { name: "estimatedprofit", label: "Profit" },
        { name: "enquiry_enquiryStatus", label: "Status" }
    ];

    return (
        <div className="enquiry-search-container">
            <h2>Enquiries</h2>
            {loading ? (
                <p>Loading enquiries...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <Grid data={enquiries} columns={columns} onEdit={handleEdit} onDelete={confirmDelete} />
            )}
        </div>
    );
};

export default EnquirySearch;
