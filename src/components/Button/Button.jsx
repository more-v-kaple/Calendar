import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = props => {
    const {
        handleClick,
        style,
        name
    } = props;

    return (
        <div className={`button ${style}`}
            onClick={handleClick}
        >
            {name}
        </div>
    );
}

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    style: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Button;
