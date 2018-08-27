import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './day.scss';

import clickInterceptor from 'Decorators/clickInterceptor';

import { selectDate } from 'Redux/actionCreators';

import { getSelectedDay } from 'Redux/selectors';
import { getEvent } from 'Redux/selectors';

import {
    displayDayOfWeekDate,
    formatYearMonthDay,
    displayDate
} from 'Utils/formatDate';
import getToday from 'Utils/calculateDate/getToday';

import EventForm from 'Containers/EventForm';
import Event from 'Components/Event';

const initialState = {
    isEventFormOpened: false
};

@clickInterceptor({ target: 'event-form' })
class Day extends PureComponent {
    constructor (props){
        super(props);

        this.state = {
            ...initialState
        }
    }

    componentDidUpdate () {
        const { outsideClick } = this.props,
            { isEventFormOpened } = this.state;

        if (isEventFormOpened && outsideClick) {
            this.handleCloseForm();
        }
    }

    handleCloseForm = () => {
        const { disableClickInterceptor } = this.props;

        this.setState(prevState => ({ isEventFormOpened: false }));
        disableClickInterceptor();
    }

    selectDay = () => {
        const { selectDate, enableClickInterceptor } = this.props;

        selectDate();
        this.setState(prevState => ({ isEventFormOpened: true }));
        enableClickInterceptor();
    }

    defineStyle = () => {
        const { date, event, selectedDay } = this.props,
            today = getToday();
        let style = '';

        if (formatYearMonthDay(date) === today) {
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
        const { date, isWithTitle, event } = this.props,
            { isEventFormOpened } = this.state,
            formattedDate = isWithTitle ?
                displayDayOfWeekDate(date)
                : displayDate(date),
            style = this.defineStyle();

        return (
            <Fragment>
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
                {
                    isEventFormOpened &&
                    <EventForm
                        closeForm = { this.handleCloseForm }
                        date = { date }
                    />
                }
            </Fragment>
        );
    }
}

Day.propTypes = {
    disableClickInterceptor: PropTypes.func.isRequired,
    enableClickInterceptor: PropTypes.func.isRequired,
    outsideClick: PropTypes.string.isRequired,
    isWithTitle: PropTypes.bool.isRequired,
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        members: PropTypes.string,
        description: PropTypes.string
    }),
    date: PropTypes.string.isRequired,
    selectedDay: PropTypes.string.isRequired,
    selectDate: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
    event: getEvent(state, props),
    selectedDay: getSelectedDay(state)
});

const mapDispatchToProps = dispatch => ({
    selectDate: payload => dispatch(selectDate(payload))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { date } = ownProps,
        selectDate = dispatchProps.selectDate.bind(null, date);

    return {
        ...stateProps,
        ...ownProps,
        selectDate
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Day);
