

const sizes = ['S', 'M', 'L', 'XL'];
const coloursAvailable = ['Black', 'Red', 'Blue', 'Green'];

function DropdownOptions({ count, values = [], setValues }) {
  const handleChange = (index, field, value) => {
    const updated = [...values];
    updated[index][field] = value;
    setValues(updated);
  };

  return (
    <div className="options">
      {Array.from({ length: count }).map((_, i) => (
        <div className="option-row" key={i}>
          <label>
            <select
              value={values[i]?.size || ''}
              onChange={(e) => handleChange(i, 'size', e.target.value)}
            >
              <option value="">Select Size</option>
              {sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </label>
          <label>
            <select
              value={values[i]?.color || ''}
              onChange={(e) => handleChange(i, 'color', e.target.value)}
            >
              <option value="">Select Colour</option>
              {coloursAvailable.map((color) => (
                <option key={color}>{color}</option>
              ))}
            </select>
          </label>
        </div>
      ))}
    </div>
  );
}


export default DropdownOptions;
