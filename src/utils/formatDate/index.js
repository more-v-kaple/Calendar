import moment from 'moment';

export const displayDayOfWeekDate = date => new Date(date)
    .toLocaleString('ru', {
        day: 'numeric',
        weekday: 'long'
    });

export const formatYearMonthDay = date => new Date(date)
    .toLocaleString('en', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

export const formatFullDate = date => new Date(date)
    .toLocaleString('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });

export const displayDate = date => new Date(date).getDate();

export const displayDateMonth = date => new Date(date)
    .toLocaleString('ru', {
        day: 'numeric',
        month: 'long'
    });

export const displayMonthYear = (year, month) => new Date(year, month)
    .toLocaleString('ru', {
        year: 'numeric',
        month: 'long'
    }).slice(0, -3); //no way to exclude '.г' using native method options

export const formatDateMonthIntoFullDate = date =>
    moment(date, 'DD MMM', 'ru').toDate();

