import React from 'react';
import axios from 'axios';

import ActList from './../ActList/component.js';
import DaysDisplay from '../DaysDisplay/component.js';

export default class App extends React.Component {
    state = {
        count: 0,
        acts: []
    }

    componentDidMount() {
        axios.get("api/acts")
            .then(res => {
                const acts = res.data.acts;
                this.setState({ acts });
            });
    }

    render() {
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
                    <DaysDisplay numberOfDays={2} />

                    <ActList acts={this.state.acts} />

                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>
                </div>
            </div>
        );
    }
}
