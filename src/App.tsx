import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import './fonts/Mabry-Pro-Medium.ttf';


function App() {
  
  const [scrollState, setScrollState] = useState(false);
  return (
    <div className="App">
        <div >
          <Header scrollState={scrollState} setScrollState={setScrollState}/>
        </div>
    </div>
  );
}

export default App;
