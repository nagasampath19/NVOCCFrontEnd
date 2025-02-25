import React, { useState } from "react";
import "../../css/common.css"; // Assuming common.css contains the desired styles

const BankDetails = () => {
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [branchContactNo, setBranchContactNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("Current");
  const [companyGstTinNumber, setCompanyGstTinNumber] = useState("");
  const [companyPanNumber, setCompanyPanNumber] = useState("");
  const [branchCompanyAddress, setBranchCompanyAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="step-container">
      <h2>Bank Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bankName">Bank Name</label>
          <input
            type="text"
            id="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="branchName">Branch Name</label>
          <input
            type="text"
            id="branchName"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ifscCode">IFSC Code</label>
          <input
            type="text"
            id="ifscCode"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="swiftCode">Swift Code</label>
          <input
            type="text"
            id="swiftCode"
            value={swiftCode}
            onChange={(e) => setSwiftCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="branchAddress">Branch Address</label>
          <textarea
            id="branchAddress"
            value={branchAddress}
            onChange={(e) => setBranchAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="branchContactNo">Branch Contact No</label>
          <input
            type="text"
            id="branchContactNo"
            value={branchContactNo}
            onChange={(e) => setBranchContactNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="beneficiaryName">Beneficiary Name</label>
          <input
            type="text"
            id="beneficiaryName"
            value={beneficiaryName}
            onChange={(e) => setBeneficiaryName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountType">Account Type</label>
          <select
            id="accountType"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="form-control"
          >
            <option value="Current">Current</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="companyGstTinNumber">Company GST TIN Number</label>
          <input
            type="text"
            id="companyGstTinNumber"
            value={companyGstTinNumber}
            onChange={(e) => setCompanyGstTinNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyPanNumber">Company PAN Number</label>
          <input
            type="text"
            id="companyPanNumber"
            value={companyPanNumber}
            onChange={(e) => setCompanyPanNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="branchCompanyAddress">Branch Company Address</label>
          <textarea
            id="branchCompanyAddress"
            value={branchCompanyAddress}
            onChange={(e) => setBranchCompanyAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BankDetails;
