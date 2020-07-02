import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

export default class ActForm extends React.Component {
    state = { content: '' };

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

                    onChange={event => this.setState({ content: event.target.value })}
                    placeholder="Continue the chain."
                    required>
                    {this.state.content}
                </textarea>
                <button>Submit</button>
            </form>
        );
    }
}

ActForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};