import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Skills from './Talent';
import './index.css';

const About = () => {
    const [ mouseInAnimate, setMouseInAnimate ] = useState('');
    return (
        <Element name="about" className="element">
            <div className='about'>
                <div className='about-title' onMouseEnter={() => setMouseInAnimate('about')} onMouseLeave={() => setMouseInAnimate('')}>
                    <div className={mouseInAnimate === 'about' ? 'animate_infinity_about_mouseIn':''}>
                        About me
                    </div>
                </div>
                <div className='about-container'>
                    <div className='about-whoAmI' onMouseEnter={() => setMouseInAnimate('whoAmI')} onMouseLeave={() => setMouseInAnimate('')}>
                        <div className={mouseInAnimate === 'whoAmI' ? 'animate_infinity_whoAmI_mouseIn':''}>
                            Who Am I?
                        </div>
                    </div>
                    <div className='about-me'>
                        Hi I'm Hicham design lover based in Algeria. <span>I'm available for freelance work and projects</span>. I specialise in front-end design.
                        <br />
                        <div className='about-contact-btn'>
                            <a rel="noopener noreferrer" href='https://drive.google.com/file/d/1a0AFS6N3Ont8lovXVTdF0uFu95daUbst/view?usp=sharing' target='_blank'>View CV</a>
                        </div>
                    </div>
                    <div className='about-me-more'>
                        <span style={{display: 'flex'}}>
                            <span className={mouseInAnimate === 'funny' ? 'animate_infinity_funny_mouseIn':''} onMouseEnter={() => setMouseInAnimate('funny')} onMouseLeave={() => setMouseInAnimate('')}>
                                I am funny.
                            </span>&nbsp;
                            <span className={mouseInAnimate === 'smart' ? 'animate_infinity_smart_mouseIn':''} onMouseEnter={() => setMouseInAnimate('smart')} onMouseLeave={() => setMouseInAnimate('')}>
                                I am smart.
                            </span>&nbsp;
                            <span className={mouseInAnimate === 'hardWorker' ? 'animate_infinity_hardWorker_mouseIn':''} onMouseEnter={() => setMouseInAnimate('hardWorker')} onMouseLeave={() => setMouseInAnimate('')}>
                                I am a hard worker.
                            </span>
                        </span>
                        <br /><br />
                        Creative and self-taught with over 5 years of front-end experience and passion for responsive website design and a firm believer in the mobile-first approach. And I love working with React and Redux.
                        <br /><br />
                        Writer, and teacher, and publisher that has been curated by <a rel="noopener noreferrer" href="https://erinyesinfo.medium.com" target='_blank'>Medium</a> many times.
                        <br /><br />
                        The more you learn, the stronger you will be.
                    </div>
                </div>
                <Skills />
            </div>
        </Element>
    );
};

export default About;
