import { formatYearMonthDay } from 'Utils/formatDate';

import { DATE } from 'Constants';

const getEventByDate = (date, events) => {

    return events.find(event => {

        return formatYearMonthDay(event[DATE]) === formatYearMonthDay(date);
    })
};

export default getEventByDate;
