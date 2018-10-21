import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './calendar.scss';

import fetchEventsMiddleware from 'Redux/middlewares/fetchEventsMiddleware';

import Month from 'Containers/Month';
import Navigation from 'Containers/Navigation';

class Calendar extends PureComponent {
    componentDidMount () {
        const { fetchEvents } = this.props;

        fetchEvents();
    }

    render () {

        return (
            <div className="calendar">
                <div className="calendar__nav">
                    <Navigation/>
                </div>
                <div className="calendar__month">
                    <Month/>
                </div>
            </div>
        );
    }
}

Calendar.propTypes = {
    fetchEvents: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEventsMiddleware())
});

export default connect(null, mapDispatchToProps)(Calendar);
