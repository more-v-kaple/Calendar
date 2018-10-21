import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './week.scss';

import Day from 'Containers/Day';

class Week extends PureComponent {

    render () {
        const { days, index } = this.props;

        return (
            <div className="week">
                {
                    days.map(day => (<Day
                        isWithTitle = { index === 0 }
                        date = { day }
                        key = { day }
                    />))
                }
            </div>
        );
    }
}

Week.propTypes = {
    days: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
    index: PropTypes.number.isRequired
}

export default Week;
