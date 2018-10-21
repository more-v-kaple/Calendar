import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './month.scss';

import clickInterceptor from 'Decorators/clickInterceptor';

import { toggleEventForm } from 'Redux/actionCreators';

import {
    getEventFormStatus,
    getSelectedDay,
    getMonthYear
} from 'Redux/selectors';

import generateCalendar from 'Utils/calculateDate/generateCalendar';
import getWeeksAmount from 'Utils/calculateDate/getWeeksAmount';

import Week from 'Containers/Week';
import EventForm from 'Containers/EventForm';

const initialState = {
    calendar: [],
    weeksAmount: null
};
@clickInterceptor({ target: 'month' })
class Month extends Component {
    constructor (props) {
        super(props);

        this.state = {
            ...initialState
        };
    }

    componentDidMount () {
        this.createCalendar();
    }

    componentDidUpdate (prevProps) {
        const {
            disableClickInterceptor,
            enableClickInterceptor,
            isEventFormOpened,
            outsideClick,
            month,
            year
        } = this.props;

        if (!prevProps.isEventFormOpened && isEventFormOpened) {
            enableClickInterceptor();
        }
        if (prevProps.isEventFormOpened && !isEventFormOpened) {
            disableClickInterceptor();
        }
        if (isEventFormOpened && outsideClick) {
            this.handleCloseForm();
        }
        if (prevProps.year !== year ||
            prevProps.month !== month) {
            this.createCalendar();
        }

    }

    shouldComponentUpdate (nextProps) {
        const { month, year, isEventFormOpened, selectedDay } = this.props;

        if ( month !== nextProps || year !== nextProps.year) {
            return true;
        }

        if (!isEventFormOpened && nextProps.isEventFormOpened) {
            return true;
        }
        if (isEventFormOpened && nextProps.isEventFormOpened &&
            selectedDay !== nextProps.selectedDay) {
            return true;
        }

        return false;
    }

    createCalendar = () => {
        const { year, month } = this.props,
            calendar = generateCalendar(year, month),
            weeksAmount = getWeeksAmount(year, month);

        this.setState({ calendar, weeksAmount });
    }

    handleCloseForm = () => {
        const { disableClickInterceptor, toggleEventForm } = this.props;

        toggleEventForm(false);
        disableClickInterceptor();
    }

    renderWeeks () {
        const { calendar, weeksAmount } = this.state,
            weeks = [];

        for (let i = 0; i < weeksAmount; i++) {
            weeks.push(
                <Week
                    index = { i }
                    key = { weeksAmount * (i + 1) }
                    days = { calendar.slice(i * 7, i * 7 + 7)}
                />);
        }

        return weeks;
    }

    render () {
        const { isEventFormOpened, selectedDay } = this.props;

        return (
            <div className="month">
                { this.renderWeeks() }
                { isEventFormOpened &&
                    <EventForm
                        closeForm = { this.handleCloseForm }
                        date = { selectedDay }
                    />
                }
            </div>
        );
    }
}

Month.propTypes = {
    isEventFormOpened: PropTypes.bool.isRequired,
    toggleEventForm: PropTypes.func.isRequired,
    selectedDay: PropTypes.instanceOf(Date).isRequired,
    disableClickInterceptor: PropTypes.func,
    enableClickInterceptor: PropTypes.func,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    outsideClick: PropTypes.bool
};

const mapStateToProps = state => ({
    isEventFormOpened: getEventFormStatus(state),
    selectedDay: getSelectedDay(state),
    ...getMonthYear(state)
});

const mapDispatchToProps = dispatch => ({
    toggleEventForm: payload => dispatch(toggleEventForm(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(Month);
