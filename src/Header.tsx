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
    const nameRef = useRef<HTMLDivElement>(null);


    let name: string = "FRANCESCA COULIBALY";
    let nameArr: string[] = name.split('');
    const letterRefs: any[] = [];

    useLayoutEffect(function(): any {
        let width = windowSize.current[0];
        let height= windowSize.current[1];
        let x = (): number => {
            return Math.random() * (width - 200);
            }
        let y = (): number => {
            return Math.random() * (height - 200);
            }
        
        letterRefs.forEach(letterRef => {
            let floating = gsap.fromTo(letterRef.current, {
                x: x,
                y: y,
            },
            {
                id: "letters",
                duration: Math.random() * 100, 
                x: x,
                y: y,
                
            }); 
            // floating.pause();
           let scrollAnim =  gsap.to(letterRef.current, {
                x: (): number => {
                    if (nameRef.current){
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
                        console.log("not ref");
                        return height/1.5
                     }
                },
                duration: 8,
                scrollTrigger: {
                    // trigger: container.current,
                    // pin: container.current,
                    start: 10,
                    markers: true,
                }, 
            }) 
             
        });
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