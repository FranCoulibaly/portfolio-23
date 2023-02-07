import React, { createRef, HTMLAttributes, useLayoutEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import './App.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from "gsap";


function App() {
   const parentContainer = useRef(null);

  return (
    <div className="App" >
        <p>
          Hey there.
        </p>
        <div ref={parentContainer}>
          <Header />
          
        </div>
    </div>
  );
}

export default App;
