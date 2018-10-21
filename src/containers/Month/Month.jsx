import React, { PureComponent } from 'react';
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
class Month extends PureComponent {
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
        const { year, disableClickInterceptor, month, isEventFormOpened, outsideClick, enableClickInterceptor } = this.props;

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
    disableClickInterceptor: PropTypes.func.isRequired,
    enableClickInterceptor: PropTypes.func.isRequired,
    isEventFormOpened: PropTypes.bool.isRequired,
    selectedDay: PropTypes.string.isRequired,
    outsideClick: PropTypes.bool.isRequired,
    month: PropTypes.number.isRequired,
    toggleEventForm: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired
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
