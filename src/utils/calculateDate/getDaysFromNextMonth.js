import countDaysFromNextMonth from './countDaysFromNextMonth';
import getDaysInMonth from './getDaysInMonth';

const getDaysFromNextMonth = (year, month) => {
    const days = [],
        totalDays = getDaysInMonth(year, month),
        amountDaysFromNextMonth = countDaysFromNextMonth(year, month);

    if (amountDaysFromNextMonth) {
        for (let i = 1; i <= amountDaysFromNextMonth; i++) {
            days.push(new Date(year, month, totalDays + i));
        }
    }

    return days;
};

export default getDaysFromNextMonth;
