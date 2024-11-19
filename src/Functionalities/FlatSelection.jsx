import React, { useState } from 'react';
import './FlatSelection.css';

const BHKOptions = [
  '1 BHK',
  '2 BHK',
  '3 BHK',
  '4 BHK',
];

const MultiSelectBHK = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValues , setInputValues] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const handleOptionClick = (option) => {
    setSelectedOptions((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleInputChange = (option, value) => {
    setInputValues((prev) => ({
      ...prev,
      [option]: value,
    }));
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div className="multiselect me-auto">
      <button className="dropdown-toggle  p-2" onClick={toggleDropdown}>
        Flat
      </button>
      {dropdownOpen && ( // Conditional rendering of dropdown
        <div className="options">
          {BHKOptions.map((option) => (
            <button
              key={option}
              className={`option ${selectedOptions.includes(option) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      {/* <div className="inputs">
        {selectedOptions.map((option) => (
          <div key={option} className="input-field">
            <label>{option} Count:</label>
            <input
              type="number"
              value={inputValues[option] || ''}
              onChange={(e) => handleInputChange(option, e.target.value)}
              min="0"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MultiSelectBHK;