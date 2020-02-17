import React from 'react';
import Link from 'gatsby-link';
import './navbar.scss';
import Icon from './icon';
import Image from './image'

export default function NavBar() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link to="/" className="nav-element">Home</Link>
                </li>
                <li>
                    <Link to="/apply" className="nav-element">Apply</Link>
                </li>
                <li>
                    <Link to="/course" className="nav-element">Course</Link>
                </li>
                <li>
                    <Link to="/branches" className="nav-element">Branches</Link>
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