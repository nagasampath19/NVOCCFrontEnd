import React from "react";
import { useNavigate } from "react-router-dom";

const VesselDetails = () => {
     const navigate = useNavigate();
    
        const nextStep = () => {
            navigate("/vessel-details");
          };
        
          const prevStep = () => {
            navigate("/shipment-details");
          };
    return (
        <div className="step">
            <div className="VesselDetails">
                <label htmlFor="VesselName">Vessel Name</label>
                <input type="text" id="VesselName" name="VesselName" required />
                <label htmlFor="IMOCode">IMO Code</label>
                <input type="text" id="IMOCode" name="IMOCode" required />
                <label htmlFor="Flag">Flag</label>
                <input type="text" id="Flag" name="Flag"  />
            </div>
            <div className="navigation">
                <button type="button" className="previous" onClick={prevStep}>Previous</button>
                <button type="button" className="next" onClick={nextStep}>Generate BL</button>
            </div>
        </div>
    );
};

export default VesselDetails;