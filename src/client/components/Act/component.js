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
                    <a href={'/act/' + act.slug}>
                        {act.datePosted}
                    </a>
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