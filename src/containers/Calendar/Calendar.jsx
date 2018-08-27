import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './calendar.scss';

import Month from 'Containers/Month';
import Navigation from 'Containers/Navigation';

class Calendar extends PureComponent {

    render () {
        // const { title, children } = this.props;

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

// Calendar.propTypes = {
//     title: PropTypes.string.isRequired
// }

export default Calendar;
