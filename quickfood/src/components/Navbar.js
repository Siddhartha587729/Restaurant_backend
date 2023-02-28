import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                        Quick Food
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                        SignUp
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
