import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";



function Header() {
    const letterRef = useRef();
    useLayoutEffect(function() {
        gsap.to(letterRef, 
        {
            duration: 20, 
            x: Math.random() * 1000,
            y: Math.random() * 1000,
        })
    })
    return(
        <div>
            <div className="name">
            <div className="letter" ref={(): void => {letterRef}}>F</div>
            {/* <div className="letter" ref={letterRef}>R</div>
            <div className="letter" ref={letterRef}>A</div>
            <div className="letter" ref={letterRef}>N</div>
            <div className="letter" ref={letterRef}>C</div>
            <div className="letter" ref={letterRef}>E</div>
            <div className="letter" ref={letterRef}>S</div>
            <div className="letter" ref={letterRef}>C</div>
            <div className="letter" ref={letterRef}>A</div> */}
            </div>
        </div>
    )
}

export default Header;