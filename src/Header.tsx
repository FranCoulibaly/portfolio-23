import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Props {
    letter: string;
    
}


const Header = (props: Props) => {
    // const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const letterRef = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);
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
        });
        gsap.to(letterRef.current, {
            scrollTrigger: container.current,
            x: "0",
            start: "bottom center"
            // markers: {startColor: "blue", endColor: "red"},
        });

    }, []);

    
    return(
        <div>
            <div className="name" ref={container} >
                <div className="letter" ref={letterRef}>
                    <div>{props.letter}</div>
                </div>
            </div>
        </div>
    )  
      
};

export default Header;