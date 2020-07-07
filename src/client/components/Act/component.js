import React from "react";
import clock from './../../public/clock.png';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

class Act extends React.Component {

    formatDate(date) {
        return moment(date).format('MMM Do YYYY hA');
    }

    render() {
        const act = this.props;
        return (
            <div className="post">
                {act.content}
                <div className="post-date">
                    <Link to={'/act/' + act.slug}>
                        {this.formatDate(act.datePosted)}
                    </Link>
                    <img src={clock} alt="Clock icon" className="clock"></img>
                </div>
            </div>
        );
    }
}

// datePosted in model is a Date object, but once set to the client, becomes string
Act.propTypes = {
    content: PropTypes.string.isRequired,
    datePosted: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
};

export default Act;