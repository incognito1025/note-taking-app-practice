import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import the SearchBar component
import './Nav.css'; // Import your CSS file

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const timeoutRef = useRef();
    const dashboardRef = useRef();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        timeoutRef.current = setTimeout(() => {
            setMenuOpen(false);
        }, 2500); // Delay closing the menu to allow mouse to re-enter
    };

    const cancelClose = () => {
        clearTimeout(timeoutRef.current);
    };

    const handleClickOutside = (event) => {
        if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.body.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* Nav bar */}
            <div className={`nav-wrapper-one ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className={`nav-links ${isMenuOpen ? 'shift-left' : ''}`}>
                    {/* Your horizontal navigation links go here */}
                    <Link to="/notes/new">
                        <span>New Note</span>
                    </Link>
                    
                    <Link to="/about">
                        <span>About Us</span>
                    </Link>

                    <Link to="/">
                        <span>Home</span>
                    </Link>
                </div>
                <div
                    className="menu-icon"
                    onClick={toggleMenu}
                    onMouseEnter={cancelClose} // Cancel auto-close when mouse enters
                    onMouseLeave={closeMenu}   // Start auto-close when mouse leaves
                >
                    {/* Hamburger menu icon */}
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            {/* Dashboard sidebar */}
            <div ref={dashboardRef} className={`dashboard-sidebar ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/notes/new">
                    <span>New Note</span>
                </Link>
                
                <Link to="/about">
                    <span>About Us</span>
                </Link>

                <Link to="/">
                    <span>Home</span>
                </Link>
            </div>

            {/* Search bar */}
            <SearchBar />
        </div>
    );
};

export default Nav;
