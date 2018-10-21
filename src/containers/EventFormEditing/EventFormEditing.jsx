import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './eventFormEditing.scss';

import {
    PLACEHOLDER_DESCRIPTION,
    PLACEHOLDER_MEMBERS,
    PLACEHOLDER_EVENT,
    PLACEHOLDER_DATE,
    MEMBERS_TITLE,
    DESCRIPTION,
    MEMBERS,
    TITLE,
    DATE
} from 'Constants';

import TextField from 'Components/TextField';
import Input from 'Containers/Input';

class EventFormEditing extends PureComponent {

    render () {
        const {
            handleEraseValue,
            handleInput,
            description,
            handleFocus,
            handleBlur,
            members,
            title,
            date
        } = this.props;

        return (
            <div className="event-form__editing">
                <div className="editing__title">
                    <Input
                        handleEraseValue = { handleEraseValue }
                        placeholder = { PLACEHOLDER_EVENT }
                        style = { title ? 'formatted' : ''}
                        handleFocus = { handleFocus }
                        handleInput = { handleInput }
                        handleBlur = { handleBlur }
                        inputValue = { title }
                        name = { TITLE }
                    />
                </div>
                <div className="editing__date">
                    <Input
                        handleEraseValue = { handleEraseValue }
                        placeholder = { PLACEHOLDER_DATE }
                        style = { date ? 'formatted' : ''}
                        handleInput = { handleInput }
                        handleFocus = { handleFocus }
                        handleBlur = { handleBlur }
                        inputValue = { date }
                        name = { DATE }
                    />
                </div>
                <div className="editing__members">
                    {
                        members &&
                        <p className="members__title">
                            { MEMBERS_TITLE }
                        </p>
                    }
                    <Input
                        handleEraseValue = { handleEraseValue }
                        placeholder = { PLACEHOLDER_MEMBERS }
                        style = { members ? 'formatted' : ''}
                        handleInput = { handleInput }
                        handleFocus = { handleFocus }
                        handleBlur = { handleBlur }
                        inputValue = { members }
                        name = { MEMBERS }
                    />
                </div>
                <div className="editing__description">
                    <TextField
                        placeholder = { PLACEHOLDER_DESCRIPTION }
                        style = { description ? 'formatted' : ''}
                        handleEraseValue = { handleEraseValue }
                        handleInput = { handleInput }
                        handleFocus = { handleFocus }
                        handleBlur = { handleBlur }
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
    handleFocus: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    members: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default EventFormEditing;
