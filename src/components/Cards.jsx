import React, { useState } from 'react';
import Head from './Head';
import PricingCard from './PricingCard';
import Footer from './Footer';

const priceMap = {
  1: 10,
  2: 18,
  3: 24,
};

function Cards() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownData, setDropdownData] = useState({}); 

const handleCardClick = (val) => {
  
  if (!dropdownData[val]) {
    const initialDropdowns = Array.from({ length: val }, () => ({
      size: '',
      color: ''
    }));
    setDropdownData(prev => ({
      ...prev,
      [val]: initialDropdowns
    }));
  }

  setSelectedOption(val);
};


  return (
    <div className="container">
      <Head />
      {[1, 2, 3].map((val) => (
        <PricingCard
          key={val}
          unitCount={val}
          discount={`${val * 10}% Off`}
          isSelected={selectedOption === val}
          onClick={() => handleCardClick(val)}
          price={priceMap[val]}
          dropdowns={dropdownData[val] || []}
          setDropdowns={(newData) =>
            setDropdownData(anay => ({ ...anay, [val]: newData }))
          }
        />
      ))}
      {selectedOption && (
        <Footer total={priceMap[selectedOption]} />
      )}
    </div>
  );
}

export default Cards;
