export const displayDayOfWeekDate = date => new Date(date)
    .toLocaleString('ru', {
        day: 'numeric',
        weekday: 'long'
    });

export const formatYearMonthDay = date => new Date(date)
    .toLocaleString('ru', {
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

export const displayMonthYear = (year, month) => new Date(year, month)
    .toLocaleString('ru', {
        year: 'numeric',
        month: 'long'
    });

