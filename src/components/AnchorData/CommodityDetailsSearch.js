import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import Grid from "../Common/Grid";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";

const CommodityDetailsSearch = () => {
  const [searchParams, setSearchParams] = useState({
    commodity_name: "",
    commodity_imocode: ""
  });
  const [searchResults, setSearchResults] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [commodityToDelete, setCommodityToDelete] = useState(null);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedCommodityDetails) {
      const updatedCommodityDetails = location.state.updatedCommodityDetails;
      setSearchResults((prevResults) =>
        prevResults.map((result) =>
          result.commodity_id === updatedCommodityDetails.commodity_id ? updatedCommodityDetails : result
        )
      );
    }
    if (location.state && location.state.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { commodity_name, commodity_imocode } = location.state.searchParams;
      setSearchParams({ commodity_name: commodity_name || "", commodity_imocode: commodity_imocode || "" });
      handleSearch({ commodity_name, commodity_name });
    }
  }, [location.state]);

  const handleSearch = async (params) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/searchcommoditydetails`, params, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching commodity details: ", error);
    }
  };

  const handleEdit = async (row) => {
    const token = localStorage.getItem("token");
    const { commodity_name, commodity_imocode } = searchParams;
    try {
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/getcommoditydetailsbyid`, { commodity_id: row.commodityId }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const commodityDetails = response.data;
      navigate("/commodity-details", { state: { commodityDetails, searchParams: { commodity_name, commodity_imocode } } });
    } catch (error) {
      console.error("Error fetching commodity details: ", error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        commodity_id: commodityToDelete.commodityId
      };
      await axios.post(`${urls.BASE_URL}/blapi/anchordata/deactivatecommoditydetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.commodityId !== commodityToDelete.commodityId));
      setShowDeletePopup(false);
      setCommodityToDelete(null);
    } catch (error) {
      console.error("Error deleting commodity details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setCommodityToDelete(row);
    setShowDeletePopup(true);
  };

  const columns = [
    { name: "commodityName", label: "Name" },
    { name: "commodityimocode", label: "IMO Code/Class" },
    { name: "commodityUnoCode", label: "Uno Code" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Search Commodities</h2>
        <div className="form-group">
          <label htmlFor="commodity_name">Name</label>
          <input
            type="text"
            id="commodity_name"
            value={searchParams.commodity_name}
            onChange={(e) => setSearchParams({ ...searchParams, commodity_name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="commodity_imocode">IMO Code/Class</label>
          <input
            type="text"
            id="commodity_imocode"
            value={searchParams.commodity_imocode}
            onChange={(e) => setSearchParams({ ...searchParams, commodity_imocode: e.target.value })}
          />
        </div>
        <button onClick={() => handleSearch(searchParams)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/commodity-details" style={{ textDecoration: "none", color: "blue" }}>+ Add New Commodity</Link>
        </div>
        <Grid columns={columns} data={searchResults} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
       {showDeletePopup && (
              <DeleteConfirmationPopup
                itemName={`Commodity: ${commodityToDelete.commodityName}`}
                onConfirm={handleDelete}
                onCancel={() => setShowDeletePopup(false)}
              />
            )}
    </div>
  );
};

export default CommodityDetailsSearch;
