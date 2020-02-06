import React from 'react';
import Link from 'gatsby-link';
import './navbar.scss';
import Icon from './icon';
import Image from './image'

export default function NavBar() {
    return (
        <nav>
            <div className="logo">
               <Icon/>
            </div>
            <ul className="navbar">
                <li>
                    <Link to="/" className="nav-element">Home</Link>
                </li>
                <li>
                    <Link to="/course" className="nav-element">Course</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-element">About</Link>
                </li>
                <li>
                    <Link to="/faq" className="nav-element">FAQ</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-element">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}