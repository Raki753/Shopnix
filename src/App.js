// src/App.js
import React, { useState } from 'react';
import SelectTheme from './components/SelectTheme';
import AddProductType from './components/AddProductType';
import AddProductDetails from './components/AddProductDetails';


function App() {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <SelectTheme onNext={() => setStep(2)} />}
      {step === 2 && (
        <AddProductType 
          onBack={() => setStep(1)} 
          onNext={() => setStep(3)} 
          
        />
      )}
      {step === 3 && (
  <AddProductDetails 
    onBack={() => setStep(2)} 
    onNext={() => alert('Form submitted!')} 
  />
)}
    </div>
  );
}

export default App;





