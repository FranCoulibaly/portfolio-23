import React, { createRef, HTMLAttributes, useLayoutEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import About from './About';
import './App.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from "gsap";


function App() {
  return (
    <div className="App" >
        <div >
          <Header />
          <About />
        </div>
    </div>
  );
}

export default App;
