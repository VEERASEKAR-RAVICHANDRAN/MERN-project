import React, { useState } from 'react';
import Select from 'react-select';
import './PriceMulti.css'; // Import your CSS file

// Sample price options
const priceOptions = [
  { value: '0', label: '$0' },
  { value: '50', label: '$50' },
  { value: '100', label: '$100' },
  { value: '200', label: '$200' },
  { value: '500', label: '$500' },
  { value: '1000', label: '$1000' },
];

const PriceRangeSelector = () => {
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const handleMinChange = (selectedOption) => {
    setMinPrice(selectedOption);
  };

  const handleMaxChange = (selectedOption) => {
    setMaxPrice(selectedOption);
  };

  return (
    <div style={{ padding: '0px' , marginRight: '5px' }}>
      <h2>budget</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1 }}>
          <h4>Min Price</h4>
          <Select
            options={priceOptions}
            value={minPrice}
            onChange={handleMinChange}
            placeholder="Select min price..."
            classNamePrefix="select"
          />
        </div>
        <div style={{ flex: 1 }}>
          <h4>Max Price</h4>
          <Select
            options={priceOptions}
            value={maxPrice}
            onChange={handleMaxChange}
            placeholder="Select max price..."
            classNamePrefix="select"
          />
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <h3>Selected Range:</h3>
        <p>
          {minPrice ? minPrice.label : 'Min not selected'} - {maxPrice ? maxPrice.label : 'Max not selected'}
        </p>
      </div>
    </div>
  );
};

export default PriceRangeSelector;