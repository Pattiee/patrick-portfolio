import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png'
import SunIcon from '../../assets/react.svg'
import MoonIcon from '../../assets/moon.png'
import contactImg from '../../assets/contact.png'
import Menu from '../../assets/menu.jpg'
import { Link } from "react-scroll"



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    
    const icon = document.getElementById("icon");
    const [dark_theme, setDark_theme] = useState(false);

    const changeTheme = (e) => {
        document.body.classList.toggle("dark-theme");
        setDark_theme((prev) => !(prev));
    }
    
    return(
        <nav className="navbar center px-3 w-100 flex-row">
            <a href="/" className="navbar-brand text-primary fs-1">PK
            <img src={logo} alt="Logo" className="logo d-none h-auto"/></a>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={false} offset={-50} duration={500} className="desktopMenuListItem text-decoration-none">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={false} offset={-50} duration={500} className="desktopMenuListItem text-decoration-none">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={false} offset={-50} duration={500} className="desktopMenuListItem text-decoration-none">Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={false} offset={-50} duration={500} className="desktopMenuListItem text-decoration-none">Clients</Link>
            </div>

            <img src={ dark_theme ? SunIcon : MoonIcon } alt="theme" id="icon" className="btn" onClick={() => changeTheme()}/>


            <button className="desktopMenuBtn btn btn-primary px-2 mx-3 mt-0 text-capitalize rounded-pill" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</button>

            {/* Bugger menu */}
            <img src={Menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu"  style={{display: showMenu? 'flex' : 'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={false} offset={-50} duration={750} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={false} offset={-50} duration={750} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={false} offset={-50} duration={750} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={false} offset={-50} duration={750} className="listItem" onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={false} offset={-70} duration={750} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
}
export default Navbar