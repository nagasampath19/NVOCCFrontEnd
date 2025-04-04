import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { API_URLS } from "../../config/urls";
import Grid from "../Common/Grid";
import DeleteConfirmationPopup from "../Common/DeleteConfirmationPopup";


const PortDetailsSearch = () => {
  const [porttype, setPortType] = useState("0");
  const [portcode, setPortCode] = useState("");
  const [portname, setPortName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [portToDelete, setPortToDelete] = useState(null);
  const urls = API_URLS;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedPortDetails) {
      const updatedPortDetails = location.state.updatedPortDetails;
      setSearchResults((prevResults) =>
        prevResults.map((result) =>
          result.port_id === updatedPortDetails.port_id ? updatedPortDetails : result
        )
      );
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { porttype, portcode, portname } = location.state.searchParams;
      setPortType(porttype);
      setPortCode(portcode);
      setPortName(portname);
      handleSearch(porttype, portcode, portname);
    }
  }, [location.state]);

  const handleSearch = async (porttype, portcode, portname) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        porttype: porttype || porttype,
        portcode: portcode || portcode,
        portname: portname || portname
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/searchportdetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching port details: ", error);
    }
  };

  const handleEdit = async (row) => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        port_id: row.port_id
      };
      const response = await axios.post(`${urls.BASE_URL}/blapi/anchordata/getportdetailsbyid`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const portDetails = response.data;
      navigate("/port-details", { state: { portDetails, searchParams: { porttype, portcode, portname } } });
    } catch (error) {
      console.error("Error fetching port details: ", error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      const searchParams = {
        port_id: portToDelete.port_id
      };
      await axios.post(`${urls.BASE_URL}/blapi/anchordata/deactivateportdetails`, searchParams, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSearchResults(searchResults.filter((result) => result.port_id !== portToDelete.port_id));
      setShowDeletePopup(false);
      setPortToDelete(null);
    } catch (error) {
      console.error("Error deleting port details: ", error);
    }
  };

  const confirmDelete = (row) => {
    setPortToDelete(row);
    setShowDeletePopup(true);
  };

  const columns = [
    { name: "portcode", label: "Port Code" },
    { name: "portname", label: "Port Name" },
    { name: "edicode", label: "EDI Code" },
    { name: "jnptcode", label: "JNPT Code" },
    { name: "nsictgroupcode", label: "NSICT Group Code" },
    { name: "gticode", label: "GTI Code" },
    { name: "gtigroupname", label: "GTI Group Name" },
    { name: "bmctcode", label: "BMCT Code" },
    { name: "nsigtcode", label: "NSI GT Code" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0.2", backgroundColor: "#f5f5f5", padding: "20px", flexDirection: "column", height: "100vh" }}>
        <h2>Search Port Details</h2>
        <div className="form-group">
          <label htmlFor="porttype">Port Type</label>
          <select
            id="porttype"
            value={porttype}
            onChange={(e) => setPortType(e.target.value)}
            className="form-control"
          >
            <option value="0">Select</option>
            <option value="1">Port</option>
            <option value="2">DPD</option>
            <option value="3">CFS</option>
            <option value="4">Carrier</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="portcode">Port Code</label>
          <input
            type="text"
            id="portcode"
            value={portcode}
            onChange={(e) => setPortCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="portname">Port Name</label>
          <input
            type="text"
            id="portname"
            value={portname}
            onChange={(e) => setPortName(e.target.value)}
          />
        </div>
        <button onClick={() => handleSearch(porttype, portcode, portname)}>Search</button>
      </div>
      <div className="search-results" style={{ flex: "1", overflowY: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Link to="/port-details" style={{ textDecoration: "none", color: "blue" }}>+ Add New Port</Link>
        </div>
        <Grid columns={columns} data={searchResults} onEdit={handleEdit} onDelete={confirmDelete} />
      </div>
      {showDeletePopup && (
        <DeleteConfirmationPopup
          itemName={`port: ${portToDelete.portname}`}
          onConfirm={handleDelete}
          onCancel={() => setShowDeletePopup(false)}
        />
      )}
    </div>
  );
};

export default PortDetailsSearch;
