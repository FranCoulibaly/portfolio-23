import React, { ReactNode, useLayoutEffect, useRef, createRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Props {
    letter: string;  
}

const Header = () => {
    const container = useRef<HTMLDivElement>(null);

    let name: string = "FRANCESCA COULIBALY";
    let nameArr: string[] = Array.from(name);
    const refs: any[] = [];

    useLayoutEffect(function(): any {
        refs.forEach(value => {
            // console.log("refs:", value.current);
            gsap.fromTo(value.current, {
                x: "random(0, 1400)",
                y: "random(0, 900)",
            },
            {
                duration: Math.random() * 1000, 
                x: "random(0, 1440)",
                y: "random(0, 900)",
            });

            
        });
        
         
        const snapLetters: any = () => {
            refs.forEach(value => {
                gsap.to(value.current, {
                    x: 0,
                    y: 0,
                    duration: 2,
                });
                console.log(value.current);
            })
        } 
        // console.log([...refs]);
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
                const newRef = createRef<HTMLDivElement>();
                refs[key] = newRef;
                return <div key={key} className="letter" ref={newRef}>
                    <div>{value}</div>
                </div>
                })
            }
            </div>
        </div>
    )  
      
};

export default Header;