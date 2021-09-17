import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './index.css';

// icons
import { Html5, Css3, Bootstrap, JavaScript, JQuery, Git, Reactjs, Reduxjs, ReactNative, Photoshope, Illustration, AfterEffects, Angular, Python, Nodejs, MySQL, MongoDB, TypeScript, Agile, Nextjs, Sass, EJS, PUG, HBS, RestApi, Graphql, CLanguage, PHP, Linux } from './Icons';

const Skills = () => {
    const Theme = localStorage.getItem('theme') || null;
    const [ mouseInAnimate, setMouseInAnimate ] = useState('');
    return (
        <Element name="skills" className="element">
            <div className='skills'>
                <div className='skills-title' onMouseEnter={() => setMouseInAnimate('specialty')} onMouseLeave={() => setMouseInAnimate('')}>
                    <div className={mouseInAnimate === 'specialty' ? 'animate_infinity_specialty_mouseIn':''}>
                        My Specialty
                    </div>
                </div>
                <div className='skills-container'>
                    <div className='skills-whoAmI' onMouseEnter={() => setMouseInAnimate('skills')} onMouseLeave={() => setMouseInAnimate('')}>
                        <div className={mouseInAnimate === 'skills' ? 'animate_infinity_skills_mouseIn':''}>
                            My Skills
                        </div>
                    </div>
                    <div className={Theme ? 'skills-me-white':'skills-me'}>
                        More than <div className='animate_skills_description'>30 certificates in Udemy</div> moreover my skills rely on front-end tasks like React.js and Redux.js, and more as you can see :)
                    </div>
                    <div className='skills-me-more'>
                        <div className='skills-strongest'>
                            <div className='title' onMouseEnter={() => setMouseInAnimate('strongest')} onMouseLeave={() => setMouseInAnimate('')}>
                                <div className={mouseInAnimate === 'strongest' ? 'animate_infinity_strongest_mouseIn':''}>
                                    Strongest
                                </div>
                            </div>
                            <div className='skills-language'>
                                <Html5 /> &nbsp;
                                <span className={mouseInAnimate === 'html5' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('html5')} onMouseLeave={() => setMouseInAnimate('')}>Html5</span>
                                <hr className='skills-hr hr-html5' />
                            </div>
                            <div className='skills-language'>
                                <Css3 /> &nbsp;<span className={mouseInAnimate === 'css3' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('css3')} onMouseLeave={() => setMouseInAnimate('')}>Css3</span>
                                <hr className='skills-hr hr-css3' />
                            </div>
                            <div className='skills-language'>
                                <Bootstrap /> &nbsp;
                                <span className={mouseInAnimate === 'bootstrap' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('bootstrap')} onMouseLeave={() => setMouseInAnimate('')}>Bootstrap</span>
                                <hr className='skills-hr hr-bootstrap' />
                            </div>
                            <div className='skills-language'>
                                <JavaScript /> &nbsp;
                                <span className={mouseInAnimate === 'javascript' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('javascript')} onMouseLeave={() => setMouseInAnimate('')}>Javascript</span>
                                <hr className='skills-hr hr-javascript' />
                            </div>
                            <div className='skills-language'>
                                <JQuery /> &nbsp;<span className={mouseInAnimate === 'jquery' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('jquery')} onMouseLeave={() => setMouseInAnimate('')}>jQuery</span>
                                <hr className='skills-hr hr-jquery' />
                            </div>
                            <div className='skills-language'>
                                <Git /> &nbsp;<span className={mouseInAnimate === 'git' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('git')} onMouseLeave={() => setMouseInAnimate('')}>Git</span>
                                <hr className='skills-hr hr-git' />
                            </div>
                            <div className='skills-language'>
                                <Reactjs /> &nbsp;
                                <span className={mouseInAnimate === 'react' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('react')} onMouseLeave={() => setMouseInAnimate('')}>React</span>
                                <hr className='skills-hr hr-react' />
                            </div>
                            <div className='skills-language'>
                                <Reduxjs /> &nbsp;
                                <span className={mouseInAnimate === 'redux' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('redux')} onMouseLeave={() => setMouseInAnimate('')}>Redux</span>
                                <hr className='skills-hr hr-redux' />
                            </div>
                            <div className='skills-language'>
                                <ReactNative /> &nbsp;
                                <span className={mouseInAnimate === 'reactnative' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('reactnative')} onMouseLeave={() => setMouseInAnimate('')}>React Native</span>
                                <hr className='skills-hr hr-reactnative' />
                            </div>
                            <div className='skills-language'>
                                <Photoshope /> &nbsp;
                                <span className={mouseInAnimate === 'photoshop' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('photoshop')} onMouseLeave={() => setMouseInAnimate('')}>Adobe Photoshop</span>
                                <hr className='skills-hr hr-photoshop' />
                            </div>
                            <div className='skills-language'>
                                <Illustration /> &nbsp;
                                <span className={mouseInAnimate === 'illustration' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('illustration')} onMouseLeave={() => setMouseInAnimate('')}>Adobe Illustration</span>
                                <hr className='skills-hr hr-illustration' />
                            </div>
                            <div className='skills-language'>
                                <AfterEffects /> &nbsp;
                                <span className={mouseInAnimate === 'afterEffects' ? 'animate_infinity_strongest_mouseIn_skill':''} onMouseEnter={() => setMouseInAnimate('afterEffects')} onMouseLeave={() => setMouseInAnimate('')}>Adobe After Effects</span>
                                <hr className='skills-hr hr-afterEffects' />
                            </div>
                        </div>
                        {/* good but lack of experiance */}
                        <div className='skills-good'>
                            <div className='title' onMouseEnter={() => setMouseInAnimate('good')} onMouseLeave={() => setMouseInAnimate('')}>
                                <span className={mouseInAnimate === 'good' ? 'animate_infinity_good_mouseIn':''}>
                                    Good
                                </span>&nbsp;but lack of experience
                            </div>
                            <div className={mouseInAnimate === 'angular' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('angular')} onMouseLeave={() => setMouseInAnimate('')}>
                                <Angular /> Angular
                                <hr className='skills-hr hr-angular' />
                            </div>
                            <div className={mouseInAnimate === 'python' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('python')} onMouseLeave={() => setMouseInAnimate('')}>
                                <Python /> Python
                                <hr className='skills-hr hr-python' />
                            </div>
                            <div className={mouseInAnimate === 'node' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('node')} onMouseLeave={() => setMouseInAnimate('')}>
                                <Nodejs /> Node, Express
                                <hr className='skills-hr hr-node' />
                            </div>
                            <div className={mouseInAnimate === 'mongodb' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('mongodb')} onMouseLeave={() => setMouseInAnimate('')}>
                                <MongoDB /> MongoDB
                                <hr className='skills-hr hr-mysql' />
                            </div>
                            <div className={mouseInAnimate === 'mysql' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('mysql')} onMouseLeave={() => setMouseInAnimate('')}>
                                <MySQL /> MySQL
                                <hr className='skills-hr hr-mysql' />
                            </div>
                            <div className={mouseInAnimate === 'typescript' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('typescript')} onMouseLeave={() => setMouseInAnimate('')}>
                                <TypeScript /> TypeScript
                                <hr className='skills-hr hr-typescript' />
                            </div>
                            <div className={mouseInAnimate === 'agile' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('agile')} onMouseLeave={() => setMouseInAnimate('')}>
                                <Agile /> Agile
                                <hr className='skills-hr hr-git' />
                            </div>
                            <div className={mouseInAnimate === 'next' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('next')} onMouseLeave={() => setMouseInAnimate('')}>
                                <Nextjs /> Nextjs
                                <hr className='skills-hr hr-git' />
                            </div>
                            <div className={mouseInAnimate === 'sass' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('sass')} onMouseLeave={() => setMouseInAnimate('')}>
                                <Sass /> Sass
                                <hr className='skills-hr hr-git' />
                            </div>
                            <div className={mouseInAnimate === 'ejs' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('ejs')} onMouseLeave={() => setMouseInAnimate('')}>
                                <EJS /> EJS
                                <hr className='skills-hr hr-ejs' />
                            </div>
                            <div className={mouseInAnimate === 'pug' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('pug')} onMouseLeave={() => setMouseInAnimate('')}>
                                <PUG /> PUG
                                <hr className='skills-hr hr-pug' />
                            </div>
                            <div className={mouseInAnimate === 'hbs' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('hbs')} onMouseLeave={() => setMouseInAnimate('')}>
                                <HBS /> HBS
                                <hr className='skills-hr hr-hbs' />
                            </div>
                            <div className={mouseInAnimate === 'restapi' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('restapi')} onMouseLeave={() => setMouseInAnimate('')}>
                                <RestApi /> Rest Api
                                <hr className='skills-hr hr-restapi' />
                            </div>
                            <div className={mouseInAnimate === 'graphql' ? 'skills-language animate_infinity_good_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('graphql')} onMouseLeave={() => setMouseInAnimate('')}>
                                <Graphql /> Graphql
                                <hr className='skills-hr hr-graphql' />
                            </div>
                        </div>
                        {/* basics */}
                        <div className='skills-basics'>
                            <div className='title' onMouseEnter={() => setMouseInAnimate('basic')} onMouseLeave={() => setMouseInAnimate('')}>
                                Only&nbsp;
                                <span className={mouseInAnimate === 'basic' ? 'animate_infinity_basic_mouseIn':''}>
                                    basics
                                </span>
                            </div>
                            <div className={mouseInAnimate === 'c' ? 'skills-language animate_infinity_basic_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('c')} onMouseLeave={() => setMouseInAnimate('')}>
                                <CLanguage /> C language
                                <hr className='skills-hr hr-c' />
                            </div>
                            <div className={mouseInAnimate === 'php' ? 'skills-language animate_infinity_basic_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('php')} onMouseLeave={() => setMouseInAnimate('')}>
                                <PHP /> PHP
                                <hr className='skills-hr hr-php' />
                            </div>
                            <div className={mouseInAnimate === 'linux' ? 'skills-language animate_infinity_basic_mouseIn_skill':'skills-language'} onMouseEnter={() => setMouseInAnimate('linux')} onMouseLeave={() => setMouseInAnimate('')}>
                                <Linux /> Linux
                                <hr className='skills-hr hr-linux' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Skills;
