import React, { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div id="menu-top">
                <div className="container">
                    <a href="/" className="logo">
                        END WITH KINDNESS
                    </a>
                    <nav className="navbar">
                        <ul className="navbar-links">
                            <li>
                                <a href="/">HOME</a>
                            </li>
                            <li>
                                <a href="/ideas">IDEAS</a>
                            </li>
                            <li>
                                <a href="/rules">RULES</a>
                            </li>
                            <li>
                                <a href="/about">ABOUT</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            <div>

                <button onClick={() => setCount(count + 1)}>{count}</button>
            </div>
        </div>
    );
}
