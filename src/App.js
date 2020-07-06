import React, { useState, useEffect } from 'react';
import './App.css';

import NasaImage from './Components/NasaImage'

function App() {

  const [imageData, setImageData] = useState([])



  return (
    <div className="App">
      <h1>Welcome to the unofficial viewing of NASA's Image of the day</h1>
      <div>
        <NasaImage />
      </div>
      
    </div>
  );
}

export default App;
