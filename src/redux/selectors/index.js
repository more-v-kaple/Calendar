import { createSelector } from 'reselect';

import filterEvents from './filterEvents';
import getEventByDate from './getEventByDate';

export const eventSelector = state => state.events;

export const getMonthYear = createSelector(
    state => state.date.year,
    state => state.date.month,
    (year, month) => ({
        year,
        month
    })
);

export const getEventFormStatus = state => state.eventForm.isOpen;

export const getSelectedDay = state => state.date.selected;

export const getEventsFilter = (state, props) => props.keyword;

export const getEventDate = (state, props) => props.date;

export const getFilteredEvents = createSelector(
    getEventsFilter,
    eventSelector,
    (filter, events) => filterEvents(events, filter)
);

export const getEvent = createSelector(
    getEventDate,
    eventSelector,
    (date, events) => getEventByDate(date, events)
);

export const getSelectedEvent = createSelector(
    getSelectedDay,
    eventSelector,
    (date, events) => getEventByDate(date, events)
);
