import React from "react";
import clock from './../../public/clock.png';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Act extends React.Component {

    render() {
        const act = this.props;
        return (
            <div className="post">
                {act.content}
                <div className="post-date">
                    <Link to={'/act/' + act.slug}>
                        {act.datePosted}
                    </Link>
                    <img src={clock} alt="Clock icon" className="clock"></img>
                </div>
            </div>
        );
    }
}

Act.propTypes = {
    content: PropTypes.string.isRequired,
    datePosted: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
};

export default Act;