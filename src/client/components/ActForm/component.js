// /* global toxicity */
import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import Filter from 'bad-words';
import { MIN_LENGTH, MAX_LENGTH } from './../../../lib/constants.js';

const filter = new Filter();

export default class ActForm extends React.Component {
    state = {
        content: '',
        formValid: false,
        isToxic: false,
        isLoading: false
    };

    validateForm = () => {
        const content = this.state.content.trim();
        const hasValidLength = content.length >= MIN_LENGTH && content.length <= MAX_LENGTH;
        const isClean = !filter.isProfane(content);
        this.setState({ formValid: hasValidLength && isClean });
    }

    handleUserInput = event => {
        this.setState({ content: event.target.value }, this.validateForm);
    }

    handleSubmitAct = event => {
        event.preventDefault();
        axios.post('/act', {
            content: this.state.content
        }).then(act => {
            this.props.onSubmit(act.data);
            this.setState({ content: '' });
        });

        // this.setState({ formValid: false, isLoading: true }, () => {
        //     const threshold = 0.9;
        //     const labelsToInclude = ['identity_attack', 'insult', 'threat'];
        //     toxicity.load(threshold, labelsToInclude).then(model => {
        //         model.classify(content).then(predictions => {

        //             const isToxic = predictions.some(prediction => prediction.results[0].match);
        //             if (isToxic) {
        //                 console.log("TOXIC CONTENT. NOT SUBMIITED");
        //                 this.setState({ isToxic: true });
        //             } else if (formValid) {
        //                 this.setState({ isToxic: false }, () => {
        //                     axios.post('/act', {
        //                         content: content
        //                     }).then(act => {
        //                         this.props.onSubmit(act.data);
        //                         this.setState({ content: '', isLoading: false });
        //                     });
        //                 });
        //             }
        //         });
        //     });
        // });


    }

    render() {
        return (
            <form onSubmit={this.handleSubmitAct} className="act-box-form">
                <textarea
                    type="text"
                    minLength={5}
                    maxLength={300}
                    onChange={this.handleUserInput}
                    placeholder="Continue the chain."
                    value={this.state.content}
                    required>
                </textarea>
                {/* <ToxicMessage isToxic={this.state.isToxic} /> */}
                <input type="submit" value="Submit" disabled={!this.state.formValid} />
                <LoadingSpinner isLoading={this.state.isLoading} />
            </form>
        );
    }
}

function ToxicMessage(props) {
    const isToxic = props.isToxic;
    if (isToxic) {
        return <div className="toxic-message"> This message was deemed too toxic. Please exercise respect when using this website. </div>
    } else {
        return <> </>;
    }
}

function LoadingSpinner(props) {
    const isLoading = props.isLoading;
    if (isLoading) {
        return <span className="loading-spinner"> <i className="fa fa-circle-o-notch fa-spin"></i> </span>
    }
    return <> </>;
}

ActForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};