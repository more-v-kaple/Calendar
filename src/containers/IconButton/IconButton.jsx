import React from 'react';
import PropTypes from 'prop-types';

import './iconButton.scss';

import Icon from 'Components/Icons';

const IconButton = props => {
    const {
            handleClick,
            isShown,
            icon,
            role
        } = props,
        hidden = isShown? '' : 'hidden';

    return (
        <div className = { `button button_icon ${hidden}`}
            onClick={handleClick}
            data-role={role}
        >
            <Icon
                name={icon.name}
                size={icon.size}
            />
        </div>
    );
}

IconButton.defaultProps = {
    isShown: true
};

IconButton.propTypes = {
    icon: PropTypes.shape({
        palette: PropTypes.string,
        name: PropTypes.string.isRequired,
        size: PropTypes.string
    }),
    handleClick: PropTypes.func.isRequired,
    role: PropTypes.string,
    isShown: PropTypes.bool
};

export default IconButton;
