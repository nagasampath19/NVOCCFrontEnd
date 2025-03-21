import React, { useEffect, useState } from "react";
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2C5.13 2 2 5.13 2 9C2 12.87 5.13 16 9 16C10.66 16 12.14 15.41 13.29 14.41L17.29 18.41C17.68 18.8 18.31 18.8 18.7 18.41C19.09 18.02 19.09 17.39 18.7 17L14.7 13C15.7 11.86 16.29 10.38 16.29 8.71C16.29 4.84 13.16 2 9 2ZM9 4C11.76 4 14 6.24 14 9C14 11.76 11.76 14 9 14C6.24 14 4 11.76 4 9C4 6.24 6.24 4 9 4Z" fill="#555" />
      </svg>
    </components.DropdownIndicator>
  );
};

const SearchableSelect = ({ options, className, textValue, setTextValue, setIdValue }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const loadOptions = (inputValue, callback) => {
    const filteredOptions = options.filter((location) =>
      location.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    callback(filteredOptions);
  };

  useEffect(() => {
    const option = options.find(option => option.value === textValue);
    if (option) {
      setSelectedOption(option);
    }
  }, [options, textValue]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setTextValue(selectedOption.label);
    setIdValue(selectedOption.value);
  };

  return (
    <>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions={options}
        className={className}
        components={{ DropdownIndicator }}
        getOptionLabel={(option) => option.label} // Set text for the options
        getOptionValue={(option) => option.value} // Set value for the options
        value={selectedOption} // Set the selected value
        onChange={handleChange} // Ensure onChange is set
        styles={{
          control: (provided) => ({
            ...provided,
            width: "100%",
            boxShadow: 'none', 
            border: "1px solid #ddd",
            borderRadius: "4px",
            textAlign: "left",
            boxSizing: "border-box"
          }),
          singleValue: (provided) => ({
            ...provided,
            textAlign: "left"
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? '#e9ecef' : null,
            color: state.isSelected ? 'white' : 'black',
            textAlign: 'left'
          }),
          indicatorSeparator: () => ({ // Remove the indicator separator
            display: 'none'
          })
        }}
      />
    </>
  );
};

export default SearchableSelect;
