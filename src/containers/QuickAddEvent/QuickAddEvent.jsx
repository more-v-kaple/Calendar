import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './quickAddEvent.scss';

import addEventMiddleware from 'Redux/middlewares/addEventMiddleware';

import parseQuickEventForm from 'Utils/parseQuickEventForm';

import { PLACEHOLDER_ADD_EVENT, CREATE } from 'Constants';

import Input from 'Components/Input';
import IconButton from 'Components/IconButton';
import Button from 'Components/Button';

const icon = {
    name: 'remove',
    size: 'tiny'
};


const initialValue = {
    inputValue: ''
}

class QuickAddEvent extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            ...initialValue
        }
    }

    handleInput = e => {
        const inputValue = e.target.value;

        this.setState(prevState => ({ inputValue }));
    }

    handleEraseValue = () => {
        this.setState(prevState => ({ inputValue: '' }));
    }

    createEvent = () => {
        const event = this.state.inputValue,
            { addEvent, handleCloseForm } = this.props,
            parsedEvent = parseQuickEventForm(event);

        addEvent(parsedEvent);
        handleCloseForm();
    }

    render () {
        const { inputValue } = this.state,
            { handleCloseForm } = this.props;

        return (
            <div className="quick-add-event">
                <div className="quick-add-event__close">
                    <IconButton
                        handleClick = { handleCloseForm }
                        icon = { icon }
                    />
                </div>
                <div className="quick-add-event__input">
                    <Input
                        handleEraseValue = { this.handleEraseValue }
                        placeholder = { PLACEHOLDER_ADD_EVENT }
                        handleInput = { this.handleInput }
                        inputValue = { inputValue }
                    />
                </div>
                <div className="quick-add-event__controls">
                    <Button
                        name = { CREATE }
                        style = "button_regular"
                        handleClick = { this.createEvent }
                    />
                </div>
            </div>
        );
    }
}

QuickAddEvent.propTypes = {
    handleCloseForm: PropTypes.func.isRequired,
    addEvent: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => ({
    addEvent: payload => dispatch(addEventMiddleware(payload))
});

export default connect(null, mapDispatchToProps)(QuickAddEvent);
