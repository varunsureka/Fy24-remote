import React, { useState } from 'react';
import Form from './Form';
import { inputTypes } from '../../constants/constants';
import MultiSelectDropdown from './MultiSelectDropdown';

import '../../App.css';

const DynamicFormGenerator = () => {
  const [selectedInputTypes, setSelectedInputTypes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleSubmit = () => {
    setShowForm(true);
    setIsDropDownOpen(false);
    // add the logic to render form with selected input types and hide the dropdown panel
  };

  const toggleDropdown = (e) => {
    if (!isDropDownOpen) {
      setShowForm(false)
    }
    setIsDropDownOpen(!isDropDownOpen);
    // add the logic to show dropdown panel and hide the form when dropdown is open
    // add the logic to hide dropdown panel and show the form when dropdown is closed
  };

  const handleOptionChange = (value) => {
    if (selectedInputTypes.includes(value)) {
      setSelectedInputTypes(selectedInputTypes.filter(inputType => inputType !== value))
    } else {
      setSelectedInputTypes([...selectedInputTypes, value]);
    }
    // add the logic to maintain the selected input types from the dropwdown panel
  };

  const handleBtnState = () => {
    return (selectedInputTypes.length === 0 || showForm) ? true: false;
    // add the logic to keep submit button disabled when no input type is selected from the dropdown options or when the form is already rendered
  }

  return (
    <div className='app-container'>
      <h1>Dynamic Form</h1>
      <MultiSelectDropdown
        isOpen={isDropDownOpen}
        options={inputTypes}
        toggleDropdown={toggleDropdown}
        selectedOptions={selectedInputTypes}
        handleOptionChange={handleOptionChange}
      />
      <button className='app-button' disabled={handleBtnState()} onClick={handleSubmit}>Generate Form</button>
      {showForm && !!selectedInputTypes.length && <Form inputTypes={selectedInputTypes} />}
    </div>
  );
};

export default DynamicFormGenerator;