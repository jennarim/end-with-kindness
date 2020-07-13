/* global toxicity */
import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import Filter from 'bad-words';

const filter = new Filter();

export default class ActForm extends React.Component {
    state = {
        content: '',
        formValid: false,
        isToxic: false
    };

    validateForm = () => {
        const content = this.state.content;
        const hasLength = content.length > 0;
        const isClean = !filter.isProfane(content);
        this.setState({ formValid: hasLength && isClean });
    }

    handleUserInput = event => {
        this.setState({ content: event.target.value }, this.validateForm);
    }

    inputIsToxic = () => {

    }

    handleSubmitAct = event => {
        event.preventDefault();

        const threshold = 0.9;
        const labelsToInclude = ['identity_attack', 'insult', 'threat'];
        toxicity.load(threshold, labelsToInclude).then(model => {
            model.classify(this.state.content).then(predictions => {

                const isToxic = predictions.some(prediction => prediction.results[0].match);
                if (isToxic) {
                    console.log("TOXIC CONTENT. NOT SUBMIITED");
                    this.setState({ isToxic: true });
                } else {
                    this.setState({ isToxic: false }, () => {
                        axios.post('/act', {
                            content: this.state.content
                        }).then(act => {
                            this.props.onSubmit(act.data);
                            this.setState({ content: '' });
                        });
                    });
                }
            });
        });


    }

    render() {
        return (
            <form onSubmit={this.handleSubmitAct} className="act-box-form">
                <textarea
                    type="text"
                    onChange={this.handleUserInput}
                    placeholder="Continue the chain."
                    value={this.state.content}
                    required>
                </textarea>
                <ToxicMessage isToxic={this.state.isToxic} />
                <input type="submit" value="Submit" disabled={!this.state.formValid} />
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

ActForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};