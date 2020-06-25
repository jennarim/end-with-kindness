import React from 'react';
import PropTypes from 'prop-types';

export default class DaysDisplay extends React.Component {
    render() {
        return (
            <div className="day-tracker">
                <div className="day-number"> {this.props.numberOfDays} </div>
                DAYS OF CONSECUTIVE KINDNESS
            </div>
        );
    }
}

DaysDisplay.propTypes = {
    numberOfDays: PropTypes.number.isRequired
};