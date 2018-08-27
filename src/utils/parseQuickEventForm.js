import moment from 'moment';

import getCurrentMonthYear from 'Utils/calculateDate/getCurrentMonthYear';

const parseQuickEventForm = (event) => {
    const values = event.split(',').map(value => value.trim()),
        [day, stringMonth] = values[0].split(' '),
        time = values[1],
        title = values[2],
        { year: currentYear, month: currentMonth } = getCurrentMonthYear();
    let date = moment(`${currentYear} ${stringMonth} ${day} ${time}`,
        "YYYY MMM DD HH:mm", "ru").format();
    const month = new Date(date).getMonth();

    if (currentMonth > month) {
        date = moment(`${currentYear + 1} ${stringMonth} ${day} ${time}`,
            "YYYY MMM DD HH:mm", "ru").format();
    }

    return {
        date,
        title
    }
};

export default parseQuickEventForm;
