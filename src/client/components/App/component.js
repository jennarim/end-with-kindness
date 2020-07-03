import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ActList from './../ActList/component.js';
import DaysDisplay from './../DaysDisplay/component.js';
import ActForm from './../ActForm/component.js';
import About from './../About/component.js';
import Ideas from './../Ideas/component.js';
import Rules from './../Rules/component.js';
import ActPage from './../ActPage/component.js';

export default class App extends React.Component {
    state = {
        count: 0,
        acts: []
    }

    componentDidMount() {
        axios.get("api/acts")
            .then(res => {
                console.log("axios:", res);
                const acts = res.data;

                // Get by most recent
                acts.reverse();
                this.setState({ acts });

                // Reorder for left-to-right masonry order
                // const reordered = this.reorder(this.state.acts, 3);
                // this.setState({ acts: reordered });
            });
    }

    reorder = (arr, columns) => {
        /*
            Credit to: https://github.com/jessekorzan/masonry-css-js
        */
        const cols = columns;
        const output = [];
        let col = 0;
        while (col < cols) {
            for (let i = 0; i < arr.length; i += cols) {
                let _val = arr[i + col];
                if (_val !== undefined)
                    output.push(_val);
            }
            col++;
        }
        return output;
    }

    addNewAct = newAct => {
        this.setState(prevState => ({
            acts: [newAct, ...prevState.acts]
        }));
    }

    render() {
        return (
            <div>
                <Router>
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

                    <Switch>
                        <Route exact path="/">
                            <div>
                                <DaysDisplay numberOfDays={2} />

                                <div className="post-container">
                                    <ActForm onSubmit={this.addNewAct} />
                                    <ActList acts={this.state.acts} />
                                </div>

                                <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>
                            </div>
                        </Route>
                        <Route path="/ideas">
                            <Ideas />
                        </Route>
                        <Route path="/rules">
                            <Rules />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/act/:slug">
                            <ActPage />
                        </Route>
                    </Switch>
                </Router>
            </div >
        );
    }
}
