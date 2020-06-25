import React from "react";
import Act from './../Act/component.js';
import PropTypes from "prop-types";

export default class ActList extends React.Component {
    render() {
        const acts = this.props.acts;
        return (
            <div className="post-container">
                {acts.map(act => <Act {...act} key={act.id} />)}
            </div>
        );
    }
}

ActList.propTypes = {
    acts: PropTypes.array.isRequired
};