import React, { useRef, useState, } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import githubLogo from './img/github-mark.png';
import linkedinLogo from './img/linkedin-2166.svg';
import mailLogo from './img/mail-5709.svg'

const Footer = () => {
    gsap.registerPlugin(ScrollTrigger);
    const mainRef = useRef<HTMLDivElement>(null);
    const [showWork, setShowWork] = useState(false);
   
    const handleClick = (e: any) => {
        e.preventDefault();
        setShowWork(current => !current);
    }

    return (
        <div className="footerWrapper" ref={mainRef}>
            <div className="work" onMouseLeave={() => setShowWork(false)} >
                <div className="workText" onClick={handleClick}>Work</div>
                
            
                { showWork ? (
                <div className="workItems">
                  
                    <a href="https://apollinaris.co.nz/" target="_blank" className="workItem one">01</a>
                    <a href="https://swapit-yarn.com/" target="_blank" className="workItem two">02</a>
                    <a href="https://thedataangel.com/" target="_blank" className="workItem three">03</a>
                    <a href="https://meetingsstrategy.com/" target="_blank" className="workItem four">04</a>
                </div>
                ) : null }
            </div>
            <div className="icons">
                <div className="icon">
                    <a href="https://github.com/FranCoulibaly" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="github-icon"/>
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/francesca-coulibaly/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="linkedin-icon"/>
                    </a>
                    
                </div>
                <div className="icon">
                    <a href="mailto:fran.coulibaly@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={mailLogo} alt="emailIcon" />
                    </a>
                </div>  
            </div>
            
        </div>
    )
}
export default Footer
