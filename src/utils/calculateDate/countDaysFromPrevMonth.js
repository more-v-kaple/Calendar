import getFirstDay from './getFirstDay';

const countDaysFromPrevMonth = (year, month) => {
    const firstDay = getFirstDay(year, month);
    let amountDaysFromPrevMonth = null;

    if (!firstDay) {
        amountDaysFromPrevMonth = 6;
    } else {
        amountDaysFromPrevMonth = firstDay - 1;
    }

    return amountDaysFromPrevMonth;
}

export default countDaysFromPrevMonth;
