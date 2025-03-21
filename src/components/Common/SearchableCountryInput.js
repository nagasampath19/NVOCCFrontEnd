import React, { useState, useRef, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../css/common.css"; // Assuming common.css contains the desired styles

const SearchableCountryInput = ({ textValue, setTextValue, data, label, id, keyProp, display, setIdValue }) => {
  const flagInputRef = useRef(null);
  const listRef = useRef(null);
  const [filtereddata, setFiltereddata] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    setFiltereddata(data);
    if (flagInputRef.current) {
      flagInputRef.current.addEventListener('focus', handleFocus);
    }
    return () => {
      if (flagInputRef.current) {
        flagInputRef.current.removeEventListener('focus', handleFocus);
      }
    };
  }, [data]);

  const handleTextChange = (inputValue) => {
    const filtered = data.filter((item) =>
      item[display].toLowerCase().includes(inputValue.toLowerCase())
    );
    setFiltereddata(filtered);
    setTextValue(inputValue);
    setIsListVisible(true);
  };

  const handleSelect = (selectedOption) => {
    setTextValue(selectedOption.label);
    setFiltereddata([]);
    setIsListVisible(false);
    // Pass the selected country's ID and text to the parent component
    setIdValue(selectedOption.value, selectedOption.label);
  };

  const handleFocus = () => {
    setIsListVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsListVisible(false), 100); // Delay to allow click event to register
  };

  const loadOptions = (inputValue, callback) => {
    const filtered = data.filter((item) =>
      item[display].toLowerCase().includes(inputValue.toLowerCase())
    );
    const options = filtered.map((item) => ({
      value: item[keyProp],
      label: item[display]
    }));
    callback(options);
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className="input-with-icon">
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleTextChange}
          onChange={handleSelect}
          value={{ label: textValue, value: textValue }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={flagInputRef}
          className="form-control"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </div>
  );
};

export default SearchableCountryInput;
