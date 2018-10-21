import {
    CHANGE_MONTH_YEAR,
    TOGGLE_EVENT_FORM,
    FETCH_EVENTS,
    REMOVE_EVENT,
    SELECT_DATE,
    EDIT_EVENT,
    ADD_EVENT
} from '../actionTypes';

export const addEvent = payload => ({
    type: ADD_EVENT,
    payload
});

export const fetchEvents = payload => ({
    type: FETCH_EVENTS,
    payload
});

export const removeEvent = payload => ({
    type: REMOVE_EVENT,
    payload
});

export const editEvent = payload => ({
    type: EDIT_EVENT,
    payload
});

export const changeMonthYear = payload => ({
    type: CHANGE_MONTH_YEAR,
    payload
});

export const selectDate = payload => ({
    type: SELECT_DATE,
    payload
});

export const toggleEventForm = payload => ({
    type: TOGGLE_EVENT_FORM,
    payload
});
