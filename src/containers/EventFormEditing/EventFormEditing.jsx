import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './eventFormEditing.scss';

import {
    PLACEHOLDER_DESCRIPTION,
    PLACEHOLDER_MEMBERS,
    PLACEHOLDER_EVENT,
    PLACEHOLDER_DATE,
    DESCRIPTION,
    MEMBERS,
    TITLE,
    DATE
} from 'Constants';

import TextField from 'Components/TextField';
import Input from 'Components/Input';

class EventFormEditing extends PureComponent {

    render () {
        const {
            handleEraseValue,
            handleInput,
            description,
            members,
            title,
            date
        } = this.props;

        return (
            <div className="event-form__editing">
                <div className="editing__title">
                    <Input
                        handleEraseValue = { handleEraseValue}
                        placeholder = { PLACEHOLDER_EVENT }
                        handleInput = { handleInput }
                        inputValue = { title }
                        name = { TITLE }
                    />
                </div>
                <div className="editing__date">
                    <Input
                        handleEraseValue = { handleEraseValue }
                        placeholder = { PLACEHOLDER_DATE }
                        handleInput = { handleInput }
                        inputValue = { date }
                        name = { DATE }
                    />
                </div>
                <div className="editing__members">
                    <Input
                        handleEraseValue = { handleEraseValue }
                        placeholder = { PLACEHOLDER_MEMBERS }
                        handleInput = { handleInput }
                        inputValue = { members }
                        name = { MEMBERS }
                    />
                </div>
                <div className="editing__description">
                    <TextField
                        placeholder = { PLACEHOLDER_DESCRIPTION }
                        handleEraseValue = { handleEraseValue }
                        handleInput = { handleInput }
                        value = { description }
                        name = { DESCRIPTION }
                    />
                </div>
            </div>
        );
    }
}

EventFormEditing.propTypes = {
    handleEraseValue: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    members: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default EventFormEditing;
