import getDaysfromCurrentMonth from './getDaysfromCurrentMonth';
import getDaysFromNextMonth from './getDaysFromNextMonth';
import getDaysFromPrevMonth from './getDaysFromPrevMonth';

const generateCalendar = (year, month) => {

    return [...getDaysFromPrevMonth(year, month),
        ...getDaysfromCurrentMonth(year, month),
        ...getDaysFromNextMonth(year, month)
    ]
};

export default generateCalendar;
