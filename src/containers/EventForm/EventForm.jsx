import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './eventForm.scss';

import addEventMiddleware from 'Redux/middlewares/addEventMiddleware';
import removeEventMiddleware from 'Redux/middlewares/removeEventMiddleware';
import editEventMiddleware from 'Redux/middlewares/editEventMiddleware';

import { getEvent } from 'Redux/selectors';

import { displayDateMonth, formatDateMonthIntoFullDate } from 'Utils/formatDate';

import { REMOVE, DONE, ID } from 'Constants';

import EventFormEditing from 'Containers/EventFormEditing';
import IconButton from 'Containers/IconButton';
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
            date: displayDateMonth(props.date)
        };
    }

    componentDidMount () {
        this.locateForm();
    }

    componentDidUpdate (prevProps) {
        const { date, event } = this.props;

        if (prevProps.date !== date) {
            this.setState({ ...event, date: displayDateMonth(date) });
            this.locateForm();
        }
    }

    locateForm = () => {
        let position = null,
            dayCoords = null;
        const form = document.querySelector('.event-form'),
            dayIsDisplayedInCalendar = document.querySelector('.day_selected');

        if (dayIsDisplayedInCalendar) {
            dayCoords = dayIsDisplayedInCalendar.getBoundingClientRect();
            position = dayCoords.left - form.offsetWidth > 0 ? 'left' : 'right';
        } else {
            position = 'center';
        }
        switch (position) {
            case "left":
                form.style.left = `${dayCoords.left - form.offsetWidth}px`;
                form.classList.remove('arrow-left');
                form.classList.add('arrow-right');
                break;
            case "right":
                form.style.left = `${dayCoords.left + dayCoords.width}px`;
                form.classList.remove('arrow-right');
                form.classList.add('arrow-left');
                break;
            case "center":
                form.style.left = `calc(50% - ${form.offsetWidth/2}px)`;
                form.style.top = `calc(50% - ${form.offsetHeight/2}px)`;
                form.classList.remove('arrow-right');
                form.classList.remove('arrow-left');
                break;
        }
        form.style.top = `${dayCoords.top + window.pageYOffset}px`;
    }

    eraseValue = e => {
        const name = e.target.closest('[name]').getAttribute('name');

        this.setState({ [name]: '' });
    }

    handleClickDone = () => {
        const { addEvent, editEvent, closeForm } = this.props,
            { date, id, ...data } = this.state,
            formattedDate = formatDateMonthIntoFullDate(date);
        const event = { ...data, date: formattedDate.toString() };

        id ? editEvent(id, event) : addEvent(event);
        closeForm();
    }

    handleRemove = () => {
        const { removeEvent, event, closeForm } = this.props;

        event[ID] && removeEvent(event);
        closeForm();
    }

    handleInput = e => {
        const { name, value } = e.target;

        this.setState(prevState => ({ [name]: value }));
    }

    handleFocus = e => {
        e.target.classList.remove('formatted');
    }

    handleBlur = e => {
        const { name } = e.target;

        this.state[name] && e.target.classList.add('formatted');
    }

    render () {
        const { closeForm } = this.props,
            { title, description, date, members } = this.state;

        return (
            <div className="event-form arrow-right">
                <div className="event-form__close">
                    <IconButton
                        handleClick = { closeForm }
                        icon = { icon }
                    />
                </div>

                <EventFormEditing
                    handleEraseValue = { this.eraseValue }
                    handleFocus = { this.handleFocus }
                    handleBlur = { this.handleBlur }
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
        title: PropTypes.string,
        date: PropTypes.string.isRequired,
        id: PropTypes.string,
        members: PropTypes.string,
        description: PropTypes.string
    }),
    date: PropTypes.instanceOf(Date)
};

const mapStateToProps = (state, props) => ({
    event: getEvent(state, props)
});

const mapDispatchToProps = dispatch => ({
    addEvent: payload => dispatch(addEventMiddleware(payload)),
    removeEvent: payload => dispatch(removeEventMiddleware(payload)),
    editEvent: (id, event) => dispatch(editEventMiddleware(id, event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
