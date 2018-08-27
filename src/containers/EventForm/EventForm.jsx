import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './eventForm.scss';

import addEventMiddleware from 'Redux/middlewares/addEventMiddleware';
import removeEventMiddleware from 'Redux/middlewares/removeEventMiddleware';
import editEventMiddleware from 'Redux/middlewares/editEventMiddleware';

import { getEvent } from 'Redux/selectors';

import { REMOVE, DONE, ID } from 'Constants';

import EventFormEditing from 'Containers/EventFormEditing';
import IconButton from 'Components/IconButton';
import Button from 'Components/Button';

const icon = {
    name: 'remove',
    size: 'tiny'
};

class EventForm extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            description: props.event.description,
            members: props.event.members,
            title: props.event.title,
            id: props.event.id,
            date: props.date
        };
    }

    eraseValue = e => {
        const name = e.target.closest('[name]').getAttribute('name');

        this.setState({ [name]: '' });
    }

    handleClickDone = () => {
        const { event, addEvent, editEvent, closeForm } = this.props,
            payload = { ...this.state };

        event[ID] ? editEvent(payload) : addEvent(payload);
        closeForm();
    }

    handleRemove = () => {
        const { removeEvent, event, closeForm } = this.props;

        event[ID] && removeEvent(event);
        closeForm();
    }

    turnOnEditingMode = () => {
        this.setState({ isEditing: true });
    }

    handleInput = e => {
        const { name, value } = e.target;

        this.setState(prevState => ({ [name]: value }));
    }

    render () {
        const { closeForm } = this.props,
            { title, description, date, members } = this.state;

        return (
            <div className="event-form">
                <div className="event-form__close">
                    <IconButton
                        handleClick = { closeForm }
                        icon = { icon }
                    />
                </div>

                <EventFormEditing
                    handleEraseValue = { this.eraseValue }
                    handleInput = { this.handleInput }
                    description = { description }
                    members = { members }
                    title = { title }
                    date = { date }
                />
                <div className="event-form__controls">
                    <Button
                        handleClick = { this.handleClickDone }
                        style = "button_regular"
                        name = { DONE }
                    />
                    <Button
                        handleClick = { this.handleRemove }
                        style = "button_regular"
                        name = { REMOVE }
                    />
                </div>
            </div>
        );
    }
}

EventForm.defaultProps = {
    event: {
        title: '',
        date: '',
        members: '',
        description: ''
    }
};

EventForm.propTypes = {
    closeForm: PropTypes.func.isRequired,
    addEvent: PropTypes.func.isRequired,
    removeEvent: PropTypes.func.isRequired,
    editEvent: PropTypes.func.isRequired,
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        members: PropTypes.string,
        description: PropTypes.string
    }),
    date: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => ({
    event: getEvent(state, props)
});

const mapDispatchToProps = dispatch => ({
    addEvent: payload => dispatch(addEventMiddleware(payload)),
    removeEvent: payload => dispatch(removeEventMiddleware(payload)),
    editEvent: payload => dispatch(editEventMiddleware(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
