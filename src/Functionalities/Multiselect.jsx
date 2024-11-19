import React, { useState } from 'react';
import Select from 'react-select';
import './Multiselect.css';

// Sample location options
const locationOptions = [
  { value: 'new-york', label: 'Bengalore' },
  { value: 'los-angeles', label: 'chennai' },
  { value: 'chicago', label: 'covai' },
  { value: 'houston', label: 'delhi' },
  { value: 'miami', label: 'pune' },
];

const MultiSelectLocation = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedLocations(selectedOptions);
  };

  return (
    <div style={{ padding: '5px' }}>
      {/* <h2>Select Locations</h2> */}
      <Select
        isMulti
        options={locationOptions}
        value={selectedLocations}
        onChange={handleChange}
        placeholder="Select locations..."
        classNamePrefix="select-control"
        styles={{
          control: (base) => ({
            ...base,
            width: 220,
            height: 35,
            borderRadius:20,
            border: 'none', // Remove border
            boxShadow: 'none', // Remove shadow
            marginLeft:10,
            '&:hover': {
              border: 'none', // Ensure no border on hover
            },
          }),
          menu: (base) => ({
            ...base,
            innerHeight: 150,
            width: 250,
            overflowY: 'auto', // Enable scrolling if content exceeds max height
          }),
          indicatorSeparator: (base) => ({
            display: 'none', // Hide the indicator separator
          }),
          dropdownIndicator: (base) => ({
            display: 'none', // Hide the dropdown indicator
          }),
          multiValue: (base) => ({
            ...base,
            // Customize multi-value styles if needed
          }),
        }}
      />
    </div>
  );
};

export default MultiSelectLocation;