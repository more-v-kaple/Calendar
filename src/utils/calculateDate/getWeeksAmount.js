import getFirstDay from './getFirstDay';
import getDaysInMonth from './getDaysInMonth';

const getWeeksAmount = (year, month) => {
    const firstDay = getFirstDay(year, month),
        days = getDaysInMonth(year, month);

    return Math.ceil((firstDay + days)/7);
};

export default getWeeksAmount;
