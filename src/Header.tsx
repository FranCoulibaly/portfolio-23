import React, { ReactNode, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Props {
    letter: string;  
}



const Header = () => {
    const letterRef = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);

    let name: string = "FRANCESCA COULIBALY";
    let nameArr: string[] = Array.from(name);

    useLayoutEffect(function(): any {
        let tl = gsap.timeline();
        let letters = gsap.utils.toArray(letterRef.current);

        console.log("letters:", letters);
        console.log("letterref:", letterRef);
        console.log("letterref current:", letterRef.current);
        // letters.forEach(letterRef => {
        //     gsap.fromTo(letterRef)
        // });
        // let randomLetters = gsap.fromTo(letterRef, 
        //  {
        //      x: "random(0, 1400)",
        //      y: "random(0, 900)",
        //  },
        //  {
        //      duration: Math.random() * 1000, 
        //      x: "random(0, 1440)",
        //      y: "random(0, 900)",
        //  });

        //  tl.randomLetters;
         
         
    
        //  let snapLetters = gsap.to(letterRef.current, {
        //      x: 0,
        //      y: 0,
        //      duration: 2,
        //  })
    
        //  ScrollTrigger.create({
        //      trigger: container.current,
        //      // pin: container.current,
        //      start: "bottom",
        //      animation: snapLetters,
        //      markers: true,
             
        //  });
     }, []);
    
    
    return(
        <div className="container" ref={container}>
            <div className="name">
            {
            nameArr.map((value, key) => {
            return <div key={key} className="letter" ref={letterRef}>
                    <div>{value}</div>
                </div>
                })
            }
            </div>
        </div>
    )  
      
};

export default Header;