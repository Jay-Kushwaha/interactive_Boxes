import React from 'react';
import DropdownOptions from './DropdownOptions';

function PricingCard({ unitCount, discount, isSelected, onClick, price, dropdowns, setDropdowns }) {
  return (
    <label
      className={`card ${isSelected ? 'selected' : ''} ${unitCount === 2 ? 'popular' : ''}`}
      onClick={onClick}
    >
      <input type="radio" name="unit" checked={isSelected} readOnly />

      {unitCount === 2 && <div className="ribbon">Most Popular</div>}

      <div className="content">
        <div className="top">
          <span className="unit">{unitCount} Unit</span>
          <span className="badge">{discount}</span>
        </div>

        {isSelected && (
          <>
            <div className="price">
              <span>${price}.00 USD</span>
              <del>$24.00 USD</del>
            </div>
            <DropdownOptions
              count={unitCount}
              values={dropdowns}
              setValues={setDropdowns}
            />
          </>
        )}
      </div>
    </label>
  );
}


export default PricingCard;
