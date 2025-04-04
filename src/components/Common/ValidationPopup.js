import React from "react";
import PropTypes from "prop-types";

const ValidationPopup = ({ errors, onClose }) => {
  const closePopup = () => {
    onClose();
    // Add error class to the input fields and labels with errors
    Object.keys(errors).forEach((key) => {
      const input = document.getElementById(`${key}`);
      const label = document.querySelector(`label[for="${key}"]`);
      if (input) {
        input.classList.add("error");
      }
      if (label) {
        label.classList.add("error");
      }
    });
  };

  return (
    <div className="popup">
      <div className="popup-content" style={{ textAlign: "left" }}>
        <h3>Missing Fields</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Object.keys(errors).map((key) => (
            <li key={key} style={{ marginBottom: "10px" }}>{errors[key]}</li>
          ))}
        </ul>
        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    </div>
  );
};

ValidationPopup.propTypes = {
  errors: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ValidationPopup;
