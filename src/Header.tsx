import React, { ReactNode, useLayoutEffect, useCallback, useRef, createRef, useState, MouseEventHandler } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export interface Props {
    scrollState: boolean;
    setScrollState: (scrollState: boolean) => void; 
}

const Header = (props: Props) => {
    
    const [mouseHover, setMouseHover] = useState({});
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
    const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])

    useLayoutEffect(() => {
            window.onbeforeunload = function () {
            resetWindowScrollPosition()
          }
    
        let width = windowSize.current[0];
        let height = windowSize.current[1];
        let floating: any = null;
        

        let ctx = gsap.context(() => {

            
            let randomPalette: any = Math.floor(Math.random() * 6);
            nameRef.current && nameRef.current.style.setProperty('font-palette', '--'+randomPalette);
            titleRef.current && titleRef.current.style.setProperty('font-palette', '--'+randomPalette);

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
                        return (height/2) - (nameHeight/2);
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
                props.setScrollState(true);
                tl.pause();
            },
            // toggleActions: "play pause resume reset",
            trigger: ".container",
            start: "=+1",
            end: "100%",
            // markers: true,
            // scrub: true,
            
            pin: ".container",
            // pinSpacing: false,
        });

        

    });
        return () => ctx.revert(); 
    }, [resetWindowScrollPosition]);

    useLayoutEffect(() => {
        let fCursor = q(".fCursor");
        const moveCursor = (e: MouseEvent) => {
            // console.log("moving");
            gsap.to(fCursor, {
                x: e.pageX,
                y: e.pageY,
                ease: "elastic.out(1, 0.3)"
              });
        }

        window.addEventListener('mousemove', moveCursor);
        

    },[])

    return(
        <div className="container" ref={container}>
            <div className='fCursor'><svg viewBox="0 0 150 150">
  <path d="M75,100 C88.8071187,100 100,88.8071187 100,75 C100,61.1928813 88.8071187,50 75,50 C61.1928813,50 50,61.1928813 50,75 C50,88.8071187 61.1928813,100 75,100 Z"></path>
  </svg></div>
            <Footer/>
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

// mouse repel example
// https://codepen.io/biblos/pen/KRJmey
// https://greensock.com/forums/topic/23468-mouse-repel-animation/