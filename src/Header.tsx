import React, { ReactNode, useLayoutEffect, useRef, createRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Props {
    letter: string;  
}

const Header = () => {
    const container = useRef<HTMLDivElement>(null);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);


    let name: string = "FRANCESCA COULIBALY";
    let nameArr: string[] = name.split('');
    const refs: any[] = [];

    useLayoutEffect(function(): any {
        console.log(nameArr);
        let width = windowSize.current[0];
        let height= windowSize.current[1];
        let x = (): number => {
            return Math.random() * (width - 200);
            }
        let y = (): number => {
            return Math.random() * (height - 200);
            }

        refs.forEach(value => {
            gsap.fromTo(value.current, {
                x: x,
                y: y,
            },
            {
                duration: Math.random() * 100, 
                x: x,
                y: y,
                
            }); 
        });

        refs.forEach(ref => {
            gsap.to(ref.current, {
                x: 0,
                y: 0,
                duration: 10,
                scrollTrigger: {
                    trigger: container.current,
                    // pin: container.current,
                    start: 10,
                    markers: true,
                } 
            })      
        });
    }, []);
     
    return(
        <div className="container" ref={container}>
            <div className="name">
            {
            nameArr.map((value, index) => {
                const newRef = createRef<HTMLDivElement>();
                refs[index] = newRef;
                return <div key={index} className="letter" ref={newRef}>
                    <div>{value}</div>
                </div>
                })
            }
            </div>
        </div>
    )  
      
};

export default Header;