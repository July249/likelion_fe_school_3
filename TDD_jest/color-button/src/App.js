import React, { useState } from 'react';
import './App.css';

function App() {
  const [colorName, setColorName] = useState('red');
  const changeColor = colorName === 'red' ? 'blue' : 'red';

  const handleBackgroundColor = () => {
    if (colorName === 'red') {
      setColorName('blue');
    } else if (colorName === 'blue') {
      setColorName('red');
    }
  };

  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor: `${colorName}` }}
        onClick={handleBackgroundColor}
      >
        {`change to ${changeColor}!`}
      </button>
    </div>
  );
}

export default App;
