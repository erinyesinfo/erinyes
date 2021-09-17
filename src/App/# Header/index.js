import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Logo from './logo.png';/* Logo */
import Logo_lower from './logo-lower.jpg';/* Logo */
import ColorBoilplate from './color-boilplate.png';/* Color-boilplate  */
import './index.css';

import { Menu } from './Icons';// menu icon

/* helper */
import LazyLoad from '../ThirdParty-Library/LazyLoad';

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        matches576: window.matchMedia("(max-width: 576px)").matches,
        showMenu: false,
        mouseEnter: false,
        Theme: this.props.Theme,
      };
    };
    UNSAFE_componentWillMount() {
      window.addEventListener('resize', this.handler576);
      window.addEventListener('load', this.handler576);
      window.addEventListener('scroll', this.handler576);
    };
    componentWillUnmount() {
      window.removeEventListener('resize', this.handler576);
      window.removeEventListener('load', this.handler576);
      window.removeEventListener('scroll', this.handler576);
    };
    handler576 = () => this.setState({ matches576: window.innerWidth <= 576 });
    handleShowMenu = () => this.setState(st => ({ showMenu: !st.showMenu }));
    handleShowTheme = () => {
        let elm = document.getElementById('header-theme');
        if (elm && elm.classList.contains('header-theme-close')) { elm.classList.remove('header-theme-close') }
        this.setState({ mouseEnter: true });
    };
    handleCloseTheme = () => {
        let elm = document.getElementById('header-theme');
        if (elm) { elm.classList.add('header-theme-close') }
        let timeOut = setTimeout(() => {
            if (elm && !elm.classList.contains('header-theme-close')) return clearTimeout(timeOut);
            this.setState({ mouseEnter: false });
            clearTimeout(timeOut);
        }, 200);
    };
    handleLightTheme = () => {
        if (localStorage.getItem('theme')) {
            localStorage.removeItem('theme');
            return this.props.handleLightTheme();
        } return null;
    };
    handleDarkTheme = () => {
        if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') return null;
        localStorage.setItem('theme', 'black');
        return this.props.handleDarkTheme();
    };
    render() {
        return (
            <div className={this.state.matches576 ? (
                this.state.Theme ? 'headerWrapper header-add-black-theme':'headerWrapper'):this.state.Theme ? (
                    'headerHelper header-add-black-theme'):'headerHelper'}>
                <div className={this.state.Theme ? 'header-container header-add-black-theme':'header-container'}>
                    <div className='logo-menu'>
                        <Link activeClass="active" className="portfolio-scroll"
                        to="portfolio" spy={true} smooth={true}
                        duration={500}>
                            <div className='header-logo'>
                                <LazyLoad image={{
                                    src: Logo,
                                    alt: 'erinyes',
                                    placeholder: Logo_lower,
                                    draggable: 'false'
                                }}/>
                            </div>
                        </Link>
                        {this.state.matches576 ? (
                            <div className='mobile-576'>
                                <button onClick={this.handleShowMenu}
                                    type='button' className='nav-menu'
                                >
                                    <Menu />
                                </button>
                                <div className='header-navs-color' onMouseEnter={this.handleShowTheme} onMouseLeave={this.handleCloseTheme}>
                                    <img className='header-ColorBoilplate' src={ColorBoilplate} alt='ColorBoilplate' />
                                    {this.state.mouseEnter ? (
                                        <div className={this.state.Theme ? 'header-theme-black':'header-theme'} id='header-theme'>
                                            <div onClick={this.handleLightTheme} className={this.state.Theme ? 'header-theme-color':'header-theme-color theme-active'}>Light</div>
                                            <div onClick={this.handleDarkTheme} className={this.state.Theme ? 'header-theme-color theme-active':'header-theme-color'}>Dark</div>
                                        </div>
                                    ):null}
                                </div>
                            </div>
                        ):null}
                    </div>
                    {!this.state.matches576 || this.state.showMenu ? (
                        <div className='header-navs'>
                            <div className='header-navs-version'>
                                <a className={this.state.Theme ? "version-scroll theme-black":"version-scroll"} rel="noopener noreferrer" href='https://erinyes.vercel.app' target='_blank'>V0</a>
                            </div>
                            <div className='header-navs-portfolio'>
                                <Link activeClass="active" className={this.state.Theme ? "portfolio-scroll theme-black":"portfolio-scroll"}
                                    to="portfolio" spy={true} smooth={true}
                                    duration={500}
                                >
                                    Portfolio
                                </Link>
                            </div>
                            <div className='header-navs-projects'>
                                <Link activeClass="active" className={this.state.Theme ? "projects-scroll theme-black":"projects-scroll"}
                                    to="projects" spy={true} smooth={true}
                                    duration={500}
                                >
                                    Projects
                                </Link>
                            </div>
                            <div className='header-navs-about'>
                                <Link activeClass="active" className={this.state.Theme ? "about-scroll theme-black":"about-scroll"}
                                    to="about" spy={true} smooth={true}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </div>
                            <div className='header-navs-skills'>
                                <Link activeClass="active" className={this.state.Theme ? "skills-scroll theme-black":"skills-scroll"}
                                    to="skills" spy={true} smooth={true}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                            </div>
                            <div className='header-navs-contact'>
                                <Link activeClass="active" className={this.state.Theme ? "contact-scroll theme-black":"contact-scroll"}
                                    to="contact" spy={true} smooth={true}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </div>
                            {!this.state.matches576 ? (
                                <div className='header-navs-color' onClick={this.handleShowTheme} onMouseEnter={this.handleShowTheme} onMouseLeave={this.handleCloseTheme}>
                                    <img className='header-ColorBoilplate' src={ColorBoilplate} alt='ColorBoilplate' />
                                    {this.state.mouseEnter ? (
                                        <div className={this.state.Theme ? 'header-theme-black':'header-theme'} id='header-theme'>
                                            <div onClick={this.handleLightTheme} className={this.state.Theme ? 'header-theme-color':'header-theme-color theme-active'}>Light</div>
                                            <div onClick={this.handleDarkTheme} className={this.state.Theme ? 'header-theme-color theme-active':'header-theme-color'}>Dark</div>
                                        </div>
                                    ):null}
                                </div>
                            ):null}
                        </div>
                    ):null}
                </div>
            </div>
        );
    };
};

export default Header;
