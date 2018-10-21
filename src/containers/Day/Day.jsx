import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './day.scss';

import { selectDate, toggleEventForm } from 'Redux/actionCreators';

import {
    getEventFormStatus,
    getSelectedDay,
    getEvent
} from 'Redux/selectors';

import {
    displayDayOfWeekDate,
    formatYearMonthDay,
    displayDate
} from 'Utils/formatDate';
import getToday from 'Utils/calculateDate/getToday';

import Event from 'Components/Event';

class Day extends PureComponent {
    selectDay = () => {
        const {
            toggleEventForm,
            selectDate
        } = this.props;

        selectDate();
        toggleEventForm(true);

    }

    defineStyle = () => {
        const { date, event, selectedDay } = this.props,
            today = getToday();
        let style = '';

        if (formatYearMonthDay(date) === formatYearMonthDay(today)) {

            style = 'day_current';
        }
        if (event) {
            style = 'day_planned';
        }
        if (formatYearMonthDay(date) === formatYearMonthDay(selectedDay)) {
            style = 'day_selected';
        }

        return style;
    }

    render () {
        const {
                isWithTitle,
                event,
                date
            } = this.props,
            formattedDate = isWithTitle ?
                displayDayOfWeekDate(date)
                : displayDate(date),
            style = this.defineStyle();

        return (
            <div className={`day ${style}`}
                onClick = { this.selectDay }
            >
                <span className="date">
                    { formattedDate }
                </span>
                {
                    event && <Event event = { event } />
                }
            </div>
        );
    }
}

Day.propTypes = {
    isEventFormOpened: PropTypes.bool.isRequired,
    isWithTitle: PropTypes.bool.isRequired,
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        members: PropTypes.string,
        description: PropTypes.string
    }),
    date: PropTypes.instanceOf(Date).isRequired,
    toggleEventForm: PropTypes.func.isRequired,
    selectedDay: PropTypes.instanceOf(Date).isRequired,
    selectDate: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
    isEventFormOpened: getEventFormStatus(state),
    selectedDay: getSelectedDay(state),
    event: getEvent(state, props)
});

const mapDispatchToProps = dispatch => ({
    selectDate: payload => dispatch(selectDate(payload)),
    toggleEventForm: payload => dispatch(toggleEventForm(payload))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { date } = ownProps,
        selectDate = dispatchProps.selectDate.bind(null, date);

    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        selectDate
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Day);
