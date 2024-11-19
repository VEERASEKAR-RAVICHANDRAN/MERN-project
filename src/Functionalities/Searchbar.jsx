// import React, { useState, useEffect } from 'react';
// import './SearchBar.css'; // Import your CSS file for styling

// const SearchBar = () => {
//     const [searchInput, setSearchInput] = useState('');
//     const [locations, setLocations] = useState([]);
//     const [prices, setPrices] = useState([]);
//     const [dropdownVisible, setDropdownVisible] = useState(false);
    
//     const allLocations = ['New York', 'Los Angeles', 'Chicago'];
//     const allPrices = ['Under $100', '$100 - $200', 'Over $200'];

//     const handleCheckboxChange = (type, value) => {
//         if (type === 'location') {
//             setLocations((prev) => 
//                 prev.includes(value) ? prev.filter(loc => loc !== value) : [...prev, value]
//             );
//         } else {
//             setPrices((prev) => 
//                 prev.includes(value) ? prev.filter(price => price !== value) : [...prev, value]
//             );
//         }
//     };

//     const updateSearchInput = () => {
//         const combined = [...locations, ...prices];
//         setSearchInput(combined.join(', ') || 'Search locations or price...');
//     };

//     useEffect(() => {
//         updateSearchInput();
//     }, [locations, prices]);

//     return (
//         <div className="search-container">
//             <input
//                 type="text"
//                 value={searchInput}
//                 onFocus={() => setDropdownVisible(true)}
//                 onBlur={() => setDropdownVisible(false)}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 placeholder="Search locations or price..."
//             />
//             {dropdownVisible && (
//                 <div className="dropdown">
//                     <div className="dropdown-header">Locations</div>
//                     <div className="dropdown-list">
//                         {allLocations.map((location) => (
//                             <label key={location}>
//                                 <input
//                                     type="checkbox"
//                                     checked={locations.includes(location)}
//                                     onChange={() => handleCheckboxChange('location', location)}
//                                 /> {location}
//                             </label>
//                         ))}
//                     </div>
//                     <div className="dropdown-header">Price Range</div>
//                     <div className="dropdown-list">
//                         {allPrices.map((price) => (
//                             <label key={price}>
//                                 <input
//                                     type="checkbox"
//                                     checked={prices.includes(price)}
//                                     onChange={() => handleCheckboxChange('price', price)}
//                                 /> {price}
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SearchBar;


import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Honeydew'];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style={{ padding: '10px', width: '200px', marginBottom: '20px' }}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
