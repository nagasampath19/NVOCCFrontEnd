import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import "../../css/Popup.css";

const DeleteConfirmationPopup = ({ itemName, onConfirm, onCancel }) => {
  return (
    <div className="delete-popup">
      <div className="delete-popup-content" style={{ textAlign: "left" }}>
        <h3 style={{ textAlign: "left" }}>
          <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: "10px", color: "red" }} />
          Confirm Delete
        </h3>
        <p>Are you sure you want to delete the {itemName}?</p>
        <div style={{ textAlign: "center" }}>
          <button onClick={onCancel} style={{ backgroundColor: "grey", color: "white" }}>No</button>
          <button onClick={onConfirm}>Yes</button>
        </div>
      </div>
    </div>
  );
};

DeleteConfirmationPopup.propTypes = {
  itemName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DeleteConfirmationPopup;
