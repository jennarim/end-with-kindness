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
                                Jan 24 2020
                            </a>
                            <img src={clock} alt="Clock icon" className="clock"></img>
                        </div>
                    </div>
                    <div className="post">
                        Found a stray cat alone in an alleyway, and brought her to the local animal shelter where she's recovering
                        <div className="post-date">
                            <a href="/post/cleaned-up-streets">
                                Jan 23 2020
                            </a>
                            <img src={clock} alt="Clock icon" className="clock"></img>
                        </div>
                    </div>
                    <div className="post">
                        I helped volunteer at an organization that helps prevent fraud that targets senior citizens. I even was able to be a host for one of the sessions.
                        <div className="post-date">
                            <a href="/post/cleaned-up-streets">
                                Jan 22 2020
                            </a>
                            <img src={clock} alt="Clock icon" className="clock"></img>
                        </div>
                    </div>
                    <div className="post">
                        helped my mom with the groceries
                        <div className="post-date">
                            <a href="/post/cleaned-up-streets">
                                Jan 21 2020
                            </a>
                            <img src={clock} alt="Clock icon" className="clock"></img>
                        </div>
                    </div>
                    <div className="post">
                        today I gave a #donation to a cause I really care about
                        <div className="post-date">
                            <a href="/post/cleaned-up-streets">
                                Jan 20 2020
                            </a>
                            <img src={clock} alt="Clock icon" className="clock"></img>
                        </div>
                    </div>
                    <div className="post">
                        my friend bought me high quality polyester blankets, but because I already have a ton at home, I decided to donate them to my local homeless shelter. hoping there's someone out there who found good use of them!
                        <div className="post-date">
                            <a href="/post/cleaned-up-streets">
                                Jan 20 2020
                            </a>
                            <img src={clock} alt="Clock icon" className="clock"></img>
                        </div>
                    </div>
                    <div className="post">
                        caught my 7 year old son littering. I gave him a stern lecture, but instead of chastising him, I taught him the importance of recycling and cleaned up the street we live on together
                        <div className="post-date">
                            <a href="/post/cleaned-up-streets">
                                Jan 20 2020
                            </a>
                            <img src={clock} alt="Clock icon" className="clock"></img>
                        </div>
                    </div>
                </div>
                <button onClick={() => setCount(count + 1)}>{count}</button>
            </div>
        </div>
    );
}
