import React, { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { API_URLS } from "../../../config/urls";
import ValidationPopup from "../../Common/ValidationPopup";

const Estimation = () => {
  const location = useLocation(); // Use useLocation hook
  const navigate = useNavigate();
  
  const [totalSellingRate, setTotalSellingRate] = useState("");
  const [totalBuyRate, setTotalBuyRate] = useState("");
  const [estimatedProfit, setEstimatedProfit] = useState("");
  const [approved, setApproved] = useState("Select");
  const [approvalDate, setApprovalDate] = useState("");
  const [approvedBy, setApprovedBy] = useState("");
  const [errorFields, setErrorFields] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [enquiryestimation_id, setEnquiryEstimationId] = useState("");
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const enquiryReferenceID = queryParams.get("enquiryReferenceID");
    const sellerRateReferenceID = queryParams.get("sellerRateReferenceID");
    const buyingRateReferenceID = queryParams.get("buyingRateReferenceID");

    if (enquiryReferenceID && sellerRateReferenceID && buyingRateReferenceID) {
      fetchEstimationDetails(enquiryReferenceID, sellerRateReferenceID, buyingRateReferenceID);
    }
  }, []);

  const fetchEstimationDetails = async (enquiryID, sellerRateID, buyingRateID) => {
    try {
      const token = localStorage.getItem("token");
      const userId = getUserIdFromToken(); // Get user_id from token
      const response = await axios.post(
        `${API_URLS.BASE_URL}/blapi/Enquiry/getestimation`,
        {
          enquiry_id: enquiryID,
          sellingrate_id: sellerRateID,
          buyingrate_id: buyingRateID,
          user_id: userId, // Pass user_id
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = response.data;
      setEnquiryEstimationId(data.enquiryestimation_id || 0); 
      setTotalSellingRate(data.totalsellingrate || "");
      setTotalBuyRate(data.totalbuyingrate || "");
      setEstimatedProfit(data.estimatedprofit || "");
      setApproved(data.approved || "Select");
      setApprovalDate(data.approvaldate || "");
      setApprovedBy(data.approvedby || "");
    } catch (error) {
      console.error("Error fetching estimation details: ", error);
    }
  };

  const validate = () => {
    const errors = {};
    if (approved === "Select") errors.approved = "Approval status is required.";
    if (!approvalDate) errors.approvalDate = "Approval date is required.";
    if (!approvedBy) errors.approvedBy = "Approved by is required.";
    setErrorFields(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setShowPopup(true);
      return;
    }
    setShowPopup(false);

    try {
      const token = localStorage.getItem("token");
      const userId = getUserIdFromToken(); // Get user_id from token
      const queryParams = new URLSearchParams(location.search);
      const enquiryReferenceID = queryParams.get("enquiryReferenceID");
      const sellerRateReferenceID = queryParams.get("sellerRateReferenceID");
      const buyingRateReferenceID = queryParams.get("buyingRateReferenceID");

      const payload = {
        enquiryestimation_id: enquiryestimation_id,
        enquiry_id: enquiryReferenceID,
        buyingrate_id: buyingRateReferenceID,
        sellingrate_id: sellerRateReferenceID,
        totalsellingrate: totalSellingRate,
        totalbuyingrate: totalBuyRate,
        estimatedprofit: estimatedProfit,
        approved: approved,
        approvaldate: approvalDate,
        approvedby: approvedBy,
        user_id: userId, 
      };

      const response = await axios.post(
        `${API_URLS.BASE_URL}/blapi/Enquiry/approveestimation`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data == '') {
        navigate("/enquiry-search");
      } else {
        console.error("Failed to approve estimation:", response.data.message);
      }
    } catch (error) {
      console.error("Error approving estimation:", error);
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

  return (
    <div className="step-container">
      <h2>Estimation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="totalSellingRate">Total Selling Rate</label>
              <input
                type="text"
                id="totalSellingRate"
                value={totalSellingRate}
                onChange={(e) => setTotalSellingRate(e.target.value)}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalBuyRate">Total Buy Rate</label>
              <input
                type="text"
                id="totalBuyRate"
                value={totalBuyRate}
                onChange={(e) => setTotalBuyRate(e.target.value)}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="estimatedProfit">Estimated Profit</label>
              <input
                type="text"
                id="estimatedProfit"
                value={estimatedProfit}
                onChange={(e) => setEstimatedProfit(e.target.value)}
                readOnly
              />
            </div>
            <div className={`form-group ${errorFields.approved ? "error" : ""}`}>
              <label htmlFor="approved">Approved</label>
              <select
                id="approved"
                value={approved}
                onChange={(e) => setApproved(e.target.value)}
                className="form-control"
              >
                <option value="Select">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className={`form-group ${errorFields.approvalDate ? "error" : ""}`}>
              <label htmlFor="approvalDate">Approval Date</label>
              <input
                type="date"
                id="approvalDate"
                value={approvalDate}
                onChange={(e) => setApprovalDate(e.target.value)}
              />
            </div>
            <div className={`form-group ${errorFields.approvedBy ? "error" : ""}`}>
              <label htmlFor="approvedBy">Approved By</label>
              <input
                type="text"
                id="approvedBy"
                value={approvedBy}
                onChange={(e) => setApprovedBy(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
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

export default Estimation;
