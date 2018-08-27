import countDaysFromPrevMonth from './countDaysFromPrevMonth';

const getDaysFromPrevMonth = (year, month) => {
    const days = [],
        amountDaysFromPrevMonth = countDaysFromPrevMonth(year, month);

    if (amountDaysFromPrevMonth) {
        for (let i = amountDaysFromPrevMonth-1; i >= 0; i--) {
            days.push(new Date(year, month, -i));
        }
    }

    return days;
};

export default getDaysFromPrevMonth;
