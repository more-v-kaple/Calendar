import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './monthControls.scss';

import { changeMonthYear } from 'Redux/actionCreators';

import { getMonthYear } from 'Redux/selectors';

import { PREVIOUS, NEXT } from 'Constants'

import { displayMonthYear } from 'Utils/formatDate';
import {
    changeMonthYear as changeMonthYearUtil
} from 'Utils/calculateDate/changeMonthYear';

import IconButton from 'Components/IconButton';

const icon = {
    name: 'arrow',
    size: 'tiny'
};

class MonthControls extends PureComponent {

    changeDate = e => {
        const { changeMonthYear, year, month } = this.props,
            change = e.currentTarget.dataset.role;

        changeMonthYear(changeMonthYearUtil({ year, month, change }));
    }

    render () {
        const { year, month } = this.props,
            formattedDate = displayMonthYear(year, month);

        return (
            <div className="month-controls">
                <IconButton
                    handleClick = { this.changeDate }
                    role = { PREVIOUS }
                    icon = { icon }
                />
                <span className="month-controls__date">
                    { formattedDate }
                </span>
                <IconButton
                    handleClick = { this.changeDate }
                    role = { NEXT }
                    icon = { icon }
                />
            </div>
        );
    }
}

MonthControls.propTypes = {
    changeMonthYear: PropTypes.func.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
}

const mapStateToProps = state => getMonthYear(state);

const mapDispatchToProps = dispatch => ({
    changeMonthYear: payload => dispatch(changeMonthYear(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthControls);
