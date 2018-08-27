import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './month.scss';

import { getMonthYear } from 'Redux/selectors';

import generateCalendar from 'Utils/calculateDate/generateCalendar';
import getWeeksAmount from 'Utils/calculateDate/getWeeksAmount';

import Week from 'Components/Week';

const initialState = {
    calendar: [],
    weeksAmount: null
};

class Month extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            ...initialState
        }
    }

    componentDidMount () {
        this.createCalendar();
    }

    componentDidUpdate (nextProps) {
        const { year, month } = this.props;

        if (nextProps.year !== year ||
            nextProps.month !== month) {
            this.createCalendar();
        }
    }

    createCalendar = () => {
        const { year, month } = this.props,
            calendar = generateCalendar(year, month),
            weeksAmount = getWeeksAmount(year, month);

        this.setState({ calendar, weeksAmount });
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

        return (
            <div className="month">
                { this.renderWeeks() }
            </div>
        );
    }
}

Month.propTypes = {
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
};

const mapStateToProps = state => getMonthYear(state);

export default connect(mapStateToProps)(Month);
