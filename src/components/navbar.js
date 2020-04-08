import React from 'react';
import Link from 'gatsby-link';
import './navbar.scss';

const NavBar = ({ toggle }) => {
    
    let navClass = 'navbar';

    if (toggle===true) {
        navClass = 'navbar-open';
    }

    return (   
        <nav>
            <ul className={navClass}>
                <li>
                    <Link to="/" className="nav-element">Home</Link>
                </li>
                <li>
                    <Link to="/course" className="nav-element">Course</Link>
                </li>
                <li>
                    <Link to="/faq" className="nav-element">FAQ</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-element">Contact Us</Link>
                </li>
                <li>
                    <Link to="/apply" className="applyButton">Apply</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;