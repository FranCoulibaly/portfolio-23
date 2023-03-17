import React, { createRef, HTMLAttributes, useLayoutEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
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
