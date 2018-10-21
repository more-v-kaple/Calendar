import React from 'react';
import PropTypes from 'prop-types';

import './textField.scss';

const TextField = props => {
    const {
        handleSubmit,
        handleFocus,
        handleInput,
        placeholder,
        handleBlur,
        value,
        name
    } = props;

    return (
        <div className = "text-field-wrapper">
            <textarea
                placeholder = { placeholder }
                onChange = { handleInput }
                onKeyPress = { handleSubmit }
                onFocus = { handleFocus }
                onInput = { handleInput }
                onBlur = { handleBlur }
                value = { value }
                name = { name }
                className = "text-field"
            />
        </div>
    );
}

TextField.defaultProps = {
    placeholder: '',
    value: '',
    name: 'text'
};

TextField.propTypes = {
    placeholder: PropTypes.string,
    handleSubmit: PropTypes.func,
    value: PropTypes.string,
    handleFocus: PropTypes.func,
    handleInput: PropTypes.func,
    handleBlur: PropTypes.func,
    name: PropTypes.string
};

export default TextField;
