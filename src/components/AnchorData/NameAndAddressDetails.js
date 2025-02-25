import React from "react";
import "../../css/common.css";

const NameAndAddress = ({
  prefix,
  onNameChange,
  onAddress1Change,
  onAddress2Change,
  onCityChange,
  onStateChange,
  onCountryChange,
  onEmailChange,
  onPhoneChange,
  onPinCodeChange,
  name,
  address1,
  address2,
  city,
  state,
  country,
  email,
  phone,
  pinCode
}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={`${prefix}Name`}>Name</label>
        <input
          type="text"
          id={`${prefix}Name`}
          name={`${prefix}Name`}
          value={name}
          onChange={(e) => onNameChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}Address1`}>Address 1</label>
        <input
          type="text"
          id={`${prefix}Address1`}
          name={`${prefix}Address1`}
          value={address1}
          onChange={(e) => onAddress1Change(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}Address2`}>Address 2</label>
        <input
          type="text"
          id={`${prefix}Address2`}
          name={`${prefix}Address2`}
          value={address2}
          onChange={(e) => onAddress2Change(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}City`}>City</label>
        <input
          type="text"
          id={`${prefix}City`}
          name={`${prefix}City`}
          value={city}
          onChange={(e) => onCityChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}State`}>State</label>
        <input
          type="text"
          id={`${prefix}State`}
          name={`${prefix}State`}
          value={state}
          onChange={(e) => onStateChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}Country`}>Country</label>
        <input
          type="text"
          id={`${prefix}Country`}
          name={`${prefix}Country`}
          value={country}
          onChange={(e) => onCountryChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}Email`}>Email</label>
        <input
          type="email"
          id={`${prefix}Email`}
          name={`${prefix}Email`}
          value={email}
          onChange={(e) => onEmailChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}Phone`}>Phone</label>
        <input
          type="text"
          id={`${prefix}Phone`}
          name={`${prefix}Phone`}
          value={phone}
          onChange={(e) => onPhoneChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}PinCode`}>Pin Code</label>
        <input
          type="text"
          id={`${prefix}PinCode`}
          name={`${prefix}PinCode`}
          value={pinCode}
          onChange={(e) => onPinCodeChange(e)}
          required
        />
      </div>
    </div>
  );
};

export default NameAndAddress;


