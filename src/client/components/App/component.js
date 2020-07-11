import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { summary } from 'date-streaks';
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInDown } from 'react-animations';

import ActList from './../ActList/component.js';
import DaysDisplay from './../DaysDisplay/component.js';
import ActForm from './../ActForm/component.js';
import About from './../About/component.js';
import Ideas from './../Ideas/component.js';
import Rules from './../Rules/component.js';
import ActPage from './../ActPage/component.js';
import NavigationBar from './../NavigationBar/component.js';

const FadeInDown = styled.div`animation: 1s ${keyframes`${fadeInDown}`}`;
const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;

export default class App extends React.Component {
    state = {
        // count: 0,
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

    getConsecutiveDays() {
        const dates = [...this.state.acts].map(act => act.datePosted);
        console.log(summary({ dates }));
        return summary({ dates }).currentStreak;
    }

    render() {
        return (
            <div>
                <Router>
                    <FadeInDown>
                        <NavigationBar />
                    </FadeInDown>
                    <Switch>
                        <Route exact path="/">
                            <div>
                                <DaysDisplay numberOfDays={this.getConsecutiveDays()} />

                                <FadeIn>
                                    <div className="post-container">
                                        <ActForm onSubmit={this.addNewAct} />

                                        <ActList acts={this.state.acts} />

                                    </div>
                                </FadeIn>


                                {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button> */}
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
