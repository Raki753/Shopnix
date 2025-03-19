// src/components/SelectTheme.js
import React, { useState } from 'react';
import './SelectTheme.css';

const themes = [
  {
    id: 1,
    name: 'Bags theme',
    img: 'backpack.jpg',
    recommended: true
  },
  {
    id: 2,
    name: 'Flex theme',
    img: 'flex.jpg',
    recommended: false
  },
  {
    id: 3,
    name: 'Chic theme',
    img: 'chic.jpg',
    recommended: false
  }
];

function SelectTheme({ onNext }) {
  const [selectedTheme, setSelectedTheme] = useState(1);

  const handleSelectTheme = (id) => {
    setSelectedTheme(id);
  };

  return (
    <div className="select-theme">
      <h2>Apply a theme</h2>
      <div className="theme-container">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`theme-card ${selectedTheme === theme.id ? 'selected' : ''}`}
            onClick={() => handleSelectTheme(theme.id)}
          >
            <img src={theme.img} alt={theme.name} />
            <div className="theme-info">
              <h3>{theme.name}</h3>
              {theme.recommended && <span className="recommended">Recommended</span>}
              {selectedTheme === theme.id ? (
                <div className="checkmark">✔</div>
              ) : (
                <button className="apply-btn">Apply</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={onNext}>Next</button>
    </div>
  );
}

export default SelectTheme;
