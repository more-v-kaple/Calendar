import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './dropdownItem.scss';

class DropdownItem extends PureComponent {

    render () {
        const { title, date } = this.props.event;

        return (
            <li className="dropdown__item"
                data-date = { date }
            >
                <span className="item__title">
                    {title}
                </span>
                <span className="item__date">
                    {date}
                </span>
            </li>
        );
    }
}

DropdownItem.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
}

export default DropdownItem;
