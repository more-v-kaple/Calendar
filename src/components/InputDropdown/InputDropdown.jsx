import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'Containers/Dropdown';
import Input from 'Components/Input';

const InputDropdown = props => {
    const {
        isDropdownOpened,
        handleSubmit,
        handleFocus,
        handleInput,
        placeholder,
        handleClick,
        handleBlur,
        inputValue,
        autofocus
    } = props;

    return (
        <div className="input-wrapper"
        >
            <Input
                placeholder = { placeholder }
                onKeyPress = { handleSubmit }
                handleFocus = { handleFocus }
                handleInput = { handleInput }
                autoFocus = { autofocus }
                handleBlur = { handleBlur }
                inputValue = { inputValue }
                className = "input"
                type = "text"
            />
            {
                isDropdownOpened &&
                <Dropdown
                    handleClick = { handleClick }
                    keyword = { inputValue }
                />
            }
        </div>
    );
}

InputDropdown.defaultProps = {
    isDropdownOpened: false,
    autofocus: false,
    placeholder: ''
};

InputDropdown.propTypes = {
    inputValue: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    isDropdownOpened: PropTypes.bool,
    placeholder: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleClick: PropTypes.func,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
    autofocus: PropTypes.bool
};

export default InputDropdown;
