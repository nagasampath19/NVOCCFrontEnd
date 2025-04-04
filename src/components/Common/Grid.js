import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../css/Grid.css";

const Grid = ({ columns, data, onEdit, onDelete }) => {
  return (
    <table className="custom-grid">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.name}>{column.label}</th>
          ))}
          {data.length > 0 && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="grid-row">
            {columns.map((column) => (
              <td key={column.name}>{row[column.name]}</td>
            ))}
            <td className="actions">
              <FontAwesomeIcon icon={faEdit} onClick={() => onEdit(row)} className="action-icon" />
              <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(row)} className="action-icon" />
            </td>
          </tr>
        ))}
        {data.length === 0 && (
          <tr>
            <td colSpan={columns.length} className="no-data">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

Grid.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Grid;
