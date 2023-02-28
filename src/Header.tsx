import React, { ReactNode, useLayoutEffect, useRef, createRef, useState, MouseEventHandler } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Props {
    letter: string;  
}

const Header = () => {
    const [scrollState, setScrollState] = useState(false);
    const container = useRef<HTMLDivElement>(null);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const nameRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    const nameLetterRefs: any[] = [];
    const titleLetterRefs: any[] = [];
    // letterRefs.current = [];
    let q = gsap.utils.selector(container);

    let name: string = "FRANCESCA COULIBALY";
    let title: string = "FRONTEND DEVELOPER"
    let nameArr: string[] = name.split('');
    let titleArr: string[] = title.split('');
    let tl3 = gsap.timeline();
   

    useLayoutEffect(function(): any {
        let width = windowSize.current[0];
        let height = windowSize.current[1];
        let floating: any = null;
        

        let ctx = gsap.context(() => {
            

            let x = (): number => {
                return gsap.utils.random(0, width - 400);
                }
            let y = (): number => {
                return gsap.utils.random(0, height - 100);
                }
            
            let tl = gsap.timeline();
            nameLetterRefs.forEach(letter => {
                
            gsap.set(letter.current, {x: x, y: y});

            const floatingFunc: any = () =>  {
                floating = tl.to(letter.current, {
                onComplete: floatingFunc,
                ease: "none",
                duration: "random(5, 20)",
                x: x,
                y: y,
                repeat: -1,
                yoyo: true,
            }, 0);
            }
            return floatingFunc();          
        });
        titleLetterRefs.forEach(letter => {
            
        gsap.set(letter.current, {x: x, y: y});
        

        const floatingFunc: any = () =>  {
            floating = tl.to(letter.current, {
            onComplete: floatingFunc,
            ease: "none",
            duration: "random(5, 20)",
            x: x,
            y: y,
            repeat: -1,
            yoyo: true,
        }, 0);
        }
        return floatingFunc();          
    });

    let tl2 = gsap.timeline();
        let scrollAnim =  tl2.to(q(".letter"), {
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
                        return height/1.5
                    }
                },
                duration: 3,
            });
            tl2.to(q(".title"), {
                x: (): number => {
                    if (titleRef.current){
                        let titleWidth = titleRef.current.clientWidth;
                        return (width/4) - (titleWidth/4);
                    } else {
                        return width/1.5
                    } 
                },
                y: (): number  => {
                    if (titleRef.current){
                        let titleHeight = titleRef.current.clientHeight;
                        return (height/4) - (titleHeight/4)
                    } else {
                        return height/1.5
                    }
                },
                duration: 3,
                scale: ".5",
            }, 0);
    
        
        
        ScrollTrigger.create ({
            animation: scrollAnim,
            onEnter: () => {
                setScrollState(true);
                tl.pause();
            },
            trigger: ".container",
            start: "+=1",
            end: "+=400",
            markers: true,
            pin: ".container",
            // pinSpacing: false,
        });
    });
        
    

        return () => ctx.revert(); 
    }, []);
    
    
    const handleMouseMove = (e: any) => {
        let ctx = gsap.context(() => {
            if (!scrollState){
                let xTo = gsap.quickTo(q(".letter"), "x", {duration: 1, ease: "easeOut"}),
                    yTo = gsap.quickTo(q(".letter"), "y", {duration: 1, ease: "easeOut"});

                xTo(e.pageX);
                yTo(e.pageY);
                yTo.tween.pause(0.8);
            }
        });
        return () => ctx.revert();
    }
    return(
        <div className="container" ref={container} onMouseMove={(e) => {handleMouseMove(e)}}>
            <div className="name" ref={nameRef}>
            {
            nameArr.map((value, index) => {
                const newLetterRef = createRef<HTMLDivElement>();
                nameLetterRefs[index] = newLetterRef;
                return <div key={index} className="letter" ref={newLetterRef}>
                    <div>{value}</div>
                </div>
                })
            }
            </div>
            <div className="title" ref={titleRef}>
            {
            titleArr.map((value, index) => {
                const newLetterRef = createRef<HTMLDivElement>();
                titleLetterRefs[index] = newLetterRef;
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
