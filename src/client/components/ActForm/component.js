import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import Filter from 'bad-words';

const filter = new Filter();

export default class ActForm extends React.Component {
    state = {
        content: '',
        formValid: false
    };

    validateForm = () => {
        const hasLength = this.state.content.length > 0;
        const isClean = !filter.isProfane(this.state.content);
        this.setState({ formValid: hasLength && isClean });
    }

    handleUserInput = event => {
        this.setState({ content: event.target.value }, () => this.validateForm());
    }

    handleSubmitAct = event => {
        event.preventDefault();

        axios.post('/act', {
            content: this.state.content
        }).then(act => {
            this.props.onSubmit(act.data);
            this.setState({ content: '' });
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
                <input type="submit" value="Submit" disabled={!this.state.formValid} />
            </form>
        );
    }
}

ActForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};