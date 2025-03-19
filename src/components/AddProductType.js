// src/components/AddProductType.js
import React, { useState } from 'react';
import './AddProductType.css';

function AddProductType({ onBack, onNext }) {
  const [productType, setProductType] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleNext = () => {
    if (!productType) {
      alert('Please enter a product type');
      return;
    }
    console.log({ productType, category, subCategory });
    onNext();
  };

  return (
    <div className="add-product-type">
      <h2>Let's add a type, category and sub-category</h2>
      <div className="form-group">
        <label>Product Type</label>
        <input 
          type="text" 
          placeholder="e.g., Books" 
          value={productType} 
          onChange={(e) => setProductType(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Category (Optional)</label>
        <input 
          type="text" 
          placeholder="e.g., Academic book" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        />
      </div>

      <div className="form-group">
        <label>Sub-Category (Optional)</label>
        <input 
          type="text" 
          placeholder="e.g., Medical book" 
          value={subCategory} 
          onChange={(e) => setSubCategory(e.target.value)} 
        />
      </div>

      <div className="button-group">
        <button onClick={onBack} className="back-btn">Back</button>
        <button onClick={handleNext} className="next-btn">Next</button>
      </div>
    </div>
  );
}

export default AddProductType;
