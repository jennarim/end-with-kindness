import React from "react";
import clock from './../../public/clock.png';
import PropTypes from "prop-types";

class Act extends React.Component {

    render() {
        const act = this.props;
        return (
            <div className="post">
                {act.content}
                <div className="post-date">
                    <a href={act.url}>
                        {act.date_posted}
                    </a>
                    <img src={clock} alt="Clock icon" className="clock"></img>
                </div>
            </div>
        );
    }
}

Act.propTypes = {
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date_posted: PropTypes.string.isRequired,
};

export default Act;