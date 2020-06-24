import React, { useState } from "react";
import clock from './../../public/clock.png';

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
                <div className="day-tracker">
                    <div className="day-number"> 7 </div>
                    DAYS OF CONSECUTIVE KINDNESS
                </div>

                <div className="post-container">
                    <div className="post">
                        Cleaned up the streets with the whole neighborhood! #clean
                        <div className="post-date">
                            <a href="/post/cleaned-up-streets">
                                Jan 24th 2020
                            </a>
                            <img src={clock} alt="Clock icon" className="clock"></img>
                        </div>
                    </div>
                    <div className="post">
                        Found a stray cat alone in an alleyway, and brought her to the local animal shelter where she's recovering
                    </div>
                    <div className="post">
                        I helped volunteer at an organization that helps prevent fraud that targets senior citizens. I even was able to be a host for one of the sessions.
                    </div>
                    <div className="post">
                        helped my mom with the groceries
                    </div>
                    <div className="post">
                        today I gave a #donation to a cause I really care about
                    </div>
                </div>
                <button onClick={() => setCount(count + 1)}>{count}</button>
            </div>
        </div>
    );
}
