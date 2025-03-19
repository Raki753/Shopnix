// src/components/AddProductDetails.js
import React, { useState } from 'react';
import './AddProductDetails.css';

function AddProductDetails({ onBack, onNext }) {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [skuCode, setSkuCode] = useState('');
  const [hsnCode, setHsnCode] = useState('');
  const [netPrice, setNetPrice] = useState('');
  const [listPrice, setListPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [gstRate, setGstRate] = useState('');
  const [shippingCharges, setShippingCharges] = useState('');
  const [stockLevel, setStockLevel] = useState('');

  const handleNext = () => {
    if (!productName) {
      alert('Please enter product name');
      return;
    }
    console.log({
      productName,
      description,
      skuCode,
      hsnCode,
      netPrice,
      listPrice,
      discount,
      gstRate,
      shippingCharges,
      stockLevel,
    });
    onNext();
  };

  return (
    <div className="add-product-details">
      <h2>Let's add your first product</h2>

      <div className="form-group">
        <label>Product Name</label>
        <input 
          type="text" 
          placeholder="e.g., Anatomy book" 
          value={productName} 
          onChange={(e) => setProductName(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Product Description</label>
        <textarea 
          placeholder="Enter product description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>

      <div className="form-group">
        <label>Add Image(s)</label>
        <input type="file" />
      </div>

      <div className="checkbox-group">
        <input 
          type="checkbox" 
          checked={skuCode !== ''} 
          onChange={() => setSkuCode(skuCode ? '' : 'PROD0001')} 
        />
        <label>This product has an SKU code</label>
        {skuCode && <input type="text" value={skuCode} readOnly />}
      </div>

      <div className="checkbox-group">
        <input 
          type="checkbox" 
          checked={hsnCode !== ''} 
          onChange={() => setHsnCode(hsnCode ? '' : 'HSN0001')} 
        />
        <label>This product has an HSN/SAC code</label>
        {hsnCode && <input type="text" value={hsnCode} readOnly />}
      </div>

      <h3>Pricing Details</h3>
      <div className="pricing-grid">
        <input 
          type="number" 
          placeholder="Net price" 
          value={netPrice} 
          onChange={(e) => setNetPrice(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="List price" 
          value={listPrice} 
          onChange={(e) => setListPrice(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Discount percentage" 
          value={discount} 
          onChange={(e) => setDiscount(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="GST rate" 
          value={gstRate} 
          onChange={(e) => setGstRate(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Shipping charges" 
          value={shippingCharges} 
          onChange={(e) => setShippingCharges(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Stock level" 
          value={stockLevel} 
          onChange={(e) => setStockLevel(e.target.value)} 
        />
      </div>

      <div className="button-group">
        <button onClick={onBack} className="back-btn">Back</button>
        <button onClick={handleNext} className="next-btn">Next</button>
      </div>
    </div>
  );
}

export default AddProductDetails;
