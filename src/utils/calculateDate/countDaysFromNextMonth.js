import getLastDay from './getLastDay';

const countDaysFromNextMonth = (year, month) => {
    const lastDay = getLastDay(year, month);
    let amountDaysFromNextMonth = null;

    if (!lastDay) {
        amountDaysFromNextMonth = 0;
    } else {
        amountDaysFromNextMonth = 7 - lastDay;
    }

    return amountDaysFromNextMonth;
}

export default countDaysFromNextMonth;
