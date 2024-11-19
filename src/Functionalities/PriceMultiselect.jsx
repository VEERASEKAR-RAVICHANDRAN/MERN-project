import React, { useState } from 'react';
import Select from 'react-select';
import './PriceMultiselect.css'; // Import your CSS file

// Sample price options
const priceOptions = [
  { value: 10, label: '$10' },
  { value: 20, label: '$20' },
  { value: 30, label: '$30' },
  { value: 40, label: '$40' },
  { value: 50, label: '$50' },
];

const PriceRangeSelection = () => {
  const [minPrice, setMinPrice] = useState([]);
  const [maxPrice, setMaxPrice] = useState([]);
  const [showSelects, setShowSelects] = useState(false); // State to control visibility

  const handleMinPriceChange = (selectedOptions) => {
    setMinPrice(selectedOptions);
  };

  const handleMaxPriceChange = (selectedOptions) => {
    setMaxPrice(selectedOptions);
  };

  const handleBudgetClick = () => {
    setShowSelects((prev) => !prev); // Toggle the visibility of the select components
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3 onClick={handleBudgetClick} style={{ cursor: 'pointer', color: '#000000' , fontSize:'25px', marginTop:'5px'}}>
        Budget
      </h3>
      {showSelects && ( // Conditionally render the select components
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px', height: '40px' }}>
          <div style={{ width: '20%' }}>
            <Select
              isMulti
              options={priceOptions}
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder="from..."
            />
          </div>
          <div style={{ width: '20%', height: '40px' }}>
            <Select
              isMulti
              options={priceOptions}
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder="upto..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRangeSelection;