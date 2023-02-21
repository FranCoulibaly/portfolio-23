import React, { ReactNode, useLayoutEffect, useRef, createRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Props {
    letter: string;  
}

const Header = () => {
    const container = useRef<HTMLDivElement>(null);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const nameRef = useRef<HTMLDivElement>(null);
    let q = gsap.utils.selector(nameRef);

    let name: string = "FRANCESCA COULIBALY";
    let nameArr: string[] = name.split('');
    const letterRefs: any[] = [];

    useLayoutEffect(function(): any {
        let width = windowSize.current[0];
        let height= windowSize.current[1];
        let x = (): number => {
            return gsap.utils.random(0, width - 200);
            }
        let y = (): number => {
            return gsap.utils.random(0, height - 100);
            }

        let ctx = gsap.context(() => {
            
            gsap.set(q(".letter"), {x: x, y: y});

            let floating = gsap.to(q(".letter"), {
                onComplete: () => {floating.reverse()},
                ease: "none",
                duration: 4,
                x: x,
                y: y,
                
            }); 

           let scrollAnim =  gsap.to(q(".letter"), {
                x: (): number => {
                    if (nameRef.current){
                        // floating.pause();
                        let nameWidth = nameRef.current.clientWidth;
                        return (width/2) - (nameWidth/2);
                     } else {
                        return width/1.5
                     } 
                },
                y: (): number  => {
                    if (nameRef.current){
                        let nameHeight = nameRef.current.clientHeight;
                        return (height/2) - (nameHeight/2)
                     } else {
                        return height/1.5
                     }
                },
                duration: 3,
            });

            ScrollTrigger.create ({
                animation: scrollAnim,
                onEnter: () => { floating.pause()},
                trigger: ".container",
                start: "+=1",
                end: "+=400",
                markers: true,
                pin: ".container",
            });          
        });

        return () => ctx.revert(); 
    }, []);
     
    return(
        <div className="container" ref={container}>
            <div className="name" ref ={nameRef}>
            {
            nameArr.map((value, index) => {
                const newLetterRef = createRef<HTMLDivElement>();
                letterRefs[index] = newLetterRef;
                return <div key={index} className="letter" ref={newLetterRef}>
                    <div>{value}</div>
                </div>
                })
            }
            </div>
        </div>
    )  
      
};

export default Header;
