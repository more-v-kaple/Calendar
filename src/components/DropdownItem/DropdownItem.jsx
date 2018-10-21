import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './dropdownItem.scss';

import { displayDateMonth } from 'Utils/formatDate';

class DropdownItem extends PureComponent {

    render () {
        const { title, date, past } = this.props.event,
            formattedDate = displayDateMonth(date),
            style = past ? 'outdated' : '';

        return (
            <li className = {`dropdown__item ${style}`}
                data-date = { date }
            >
                <span className="item__title">
                    {title}
                </span>
                <span className="item__date">
                    {formattedDate}
                </span>
            </li>
        );
    }
}

DropdownItem.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        id: PropTypes.string.isRequired,
        past: PropTypes.bool
    }).isRequired
};

export default DropdownItem;
