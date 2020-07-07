import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div id="menu-top">
                <div className="container">
                    <Link to="/" className="logo">
                        END WITH KINDNESS
                    </Link>
                    <nav className="navbar">
                        <ul className="navbar-links">
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/ideas">IDEAS</Link>
                            </li>
                            <li>
                                <Link to="/rules">RULES</Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}