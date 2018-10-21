import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './event.scss';

class Event extends PureComponent {

    render () {
        const { title, members } = this.props.event;

        return (
            <div className="event">
                <span className="event__title">
                    { title }
                </span>
                <span className="event__members">
                    { members }
                </span>
            </div>
        );
    }
}

Event.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        members: PropTypes.string,
        description: PropTypes.string
    }).isRequired
};

export default Event;
