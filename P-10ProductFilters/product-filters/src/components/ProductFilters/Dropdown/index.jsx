import React from "react";

const Dropdown = ({ label, id, options, selectedValue, handleOptionChange }) => {
  return (
    <label data-testid={`${id}-label`}>
      {`${label}:`}
      <select
        value={selectedValue}
        onChange={handleOptionChange}
        data-testid={`${id}-select`}
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
