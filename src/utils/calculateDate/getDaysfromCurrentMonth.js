import getDaysInMonth from './getDaysInMonth';

const getDaysfromCurrentMonth = (year, month) => {
    const days = [],
        totalDays = getDaysInMonth(year, month);

    for (let i = 1; i <= totalDays; i++) {
        days.push(new Date(year, month, i));
    }

    return days;
};

export default getDaysfromCurrentMonth;
