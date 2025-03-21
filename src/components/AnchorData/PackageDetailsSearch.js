import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";
import Grid from "../Common/Grid";

const PackageDetailsSearch = () => {
  const [searchParams, setSearchParams] = useState({
    packageCode: "",
    packageDescription: ""
  });
  const [searchResults, setSearchResults] = useState([]);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();
  const [packageToDelete, setPackageToDelete] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  useEffect(() => {
    if (location.state && location.state.updatedPackageDetails) {
      const updatedPackageDetails = location.state.updatedPackageDetails;
      setSearchResults((prevResults) =>
        prevResults.map((result) =>
          result.packageId === updatedPackageDetails.packageId ? updatedPackageDetails : result
        )
      );
    }
    if (location.state && location.state.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { packageCode, packageDescription } = location.state.searchParams;
      setSearchParams({ packageCode: packageCode || "", packageDescription: packageDescription || "" });
      handleSearch({ packageCode, packageDescription });
    }
  }, [location.state]);

  const handleSearch = async (params) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/searchpackagedetails`, params, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching package details: ", error);
    }
  };

  const handleEdit = async (row) => {
    const token = localStorage.getItem("token");
    const { packageCode, packageDescription } = searchParams;
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/getpackagedetailsbyid`, { packageid: row.packageId }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const packageDetails = response.data;
      navigate("/package-details", { state: { packageDetails, searchParams: { packageCode, packageDescription } } });
    } catch (error) {
      console.error("Error fetching package details: ", error);
    }
  };

  const handleDelete = async (row) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        packageid: packageToDelete.packageId
      };
      await axios.post(`${urls.BASE_URL}/blapi/anchordata/deactivatepackagedetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.packageId !== packageToDelete.packageId));
      setShowDeletePopup(false);
      setPackageToDelete(null);
    } catch (error) {
      console.error("Error deleting package details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setPackageToDelete(row);
    setShowDeletePopup(true);
  };

  const columns = [
    { name: "packageCode", label: "Package Code" },
    { name: "description", label: "Description" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Search Package Details</h2>
        <div className="form-group">
          <label htmlFor="packageCode">Package Code</label>
          <input
            type="text"
            id="packageCode"
            value={searchParams.packageCode}
            onChange={(e) => setSearchParams({ ...searchParams, packageCode: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="packageDescription">Package Description</label>
          <input
            type="text"
            id="packageDescription"
            value={searchParams.packageDescription}
            onChange={(e) => setSearchParams({ ...searchParams, packageDescription: e.target.value })}
          />
        </div>
        <button onClick={() => handleSearch(searchParams)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/package-details" style={{ textDecoration: "none", color: "blue" }}>+ Add New Package</Link>
        </div>
        <Grid columns={columns} data={searchResults} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
       {showDeletePopup && (
              <DeleteConfirmationPopup
                itemName={`Package: ${packageToDelete.packageCode}`}
                onConfirm={handleDelete}
                onCancel={() => setShowDeletePopup(false)}
              />
            )}
    </div>
  );
};

export default PackageDetailsSearch;
