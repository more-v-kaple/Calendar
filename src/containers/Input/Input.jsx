import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './input.scss';

import IconButton from 'Containers/IconButton';

const icon = {
    name: 'remove',
    size: 'tiny'
};

class Input extends PureComponent {
    render () {
        const {
                handleEraseValue,
                handleSubmit,
                handleFocus,
                handleInput,
                placeholder,
                handleBlur,
                inputValue,
                style,
                name
            } = this.props,
            isEraseAvailable = inputValue && handleEraseValue ?
                true : false;

        return (
            <div className = "input-wrapper"
                name = { name }
            >
                <input
                    placeholder = { placeholder }
                    onKeyPress = { handleSubmit }
                    onFocus = { handleFocus }
                    onInput = { handleInput }
                    onBlur = { handleBlur }
                    value = { inputValue }
                    onChange = { handleInput }
                    className={ `input ${style}`}
                    name = { name }
                    type = "text"
                />
                {
                    handleEraseValue &&
                    <IconButton
                        handleClick = { handleEraseValue }
                        isShown = { isEraseAvailable }
                        icon = { icon }
                    />
                }
            </div>
        );
    }
}

Input.defaultProps = {
    placeholder: '',
    name: 'input',
    style: ''
};

Input.propTypes = {
    inputValue: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleEraseValue: PropTypes.func,
    placeholder: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
    style: PropTypes.string,
    name: PropTypes.string
};

export default Input;
