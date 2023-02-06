import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export interface Props {
    letter: string;
}

const Header = (props: Props) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const letterRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(function(): any {
        gsap.fromTo(letterRef.current, 
        {
            x: "random(0, 1400)",
            y: "random(0, 900)",
        },
        {
            duration: Math.random() * 1000, 
            x: "random(0, 1440)",
            y: "random(0, 900)",
        })
        
    })
    
    return(
        <div>
            <div className="name">
                <div className="letter" ref={letterRef}>
                    {/* <img src={props.letter} alt="f" /> */}
                    <div>{props.letter}</div>
                </div>
            
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