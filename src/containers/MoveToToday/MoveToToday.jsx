import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './moveToToday.scss'

import { TODAY } from 'Constants';

import { changeMonthYear } from 'Redux/actionCreators';
import { selectDate } from 'Redux/actionCreators';

import getCurrentMonthYear from 'Utils/calculateDate/getCurrentMonthYear';
import getToday from 'Utils/calculateDate/getToday';

import Button from 'Components/Button';

class MoveToToday extends PureComponent {
    handleClick = () => {
        const { changeMonthYear, selectDate } = this.props;

        changeMonthYear(getCurrentMonthYear());
        selectDate(getToday());
    }

    render () {
        return (
            <div className="move-to-today">
                <Button
                    handleClick = { this.handleClick }
                    style = "button_regular"
                    name = { TODAY }
                />
            </div>
        );
    }
}

MoveToToday.propTypes = {
    changeMonthYear: PropTypes.func.isRequired,
    selectDate: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    selectDate: payload => dispatch(selectDate(payload)),
    changeMonthYear: payload => dispatch(changeMonthYear(payload))
});

export default connect(null, mapDispatchToProps)(MoveToToday);
