import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import PropTypes from "prop-types";
import moment from "moment";

class ActPage extends React.Component {
    state = {
        act: {}
    }

    componentDidMount() {
        const { match } = this.props;
        const slug = match.params.slug;
        axios.get('/api/acts/' + slug)
            .then(res => {
                this.setState({ act: res.data });
                console.log(this.state.act);
            });
    }

    render() {


        return (
            <div className="post act-page">
                {this.state.act.content}
                <div className="post-date">
                    {moment(this.state.act.datePosted).format('MMM Do YYYY h:mmA')}
                </div>
            </div>
        )
    }
}

ActPage.propTypes = {
    match: PropTypes.object.isRequired
}
const ActPageWithRouter = withRouter(ActPage);

export default ActPageWithRouter;
