import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

export default class DaysDisplay extends React.Component {
    render() {
        return (
            <div className="day-tracker">
                <div className="day-number"> <CountUp end={this.props.numberOfDays} duration={2} /> </div>
                DAYS OF CONSECUTIVE KINDNESS
            </div>
        );
    }
}

DaysDisplay.propTypes = {
    numberOfDays: PropTypes.number.isRequired
};