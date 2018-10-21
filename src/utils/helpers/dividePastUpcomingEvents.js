import { DATE } from 'Constants';

import getToday from 'Utils/calculateDate/getToday';
import { formatYearMonthDay } from 'Utils/formatDate';

const today = getToday();

const dividePastUpcomingEvents = list => {
    const pastEvents = [],
        upComingEvents = [];

    list.forEach(event => {

        new Date(formatYearMonthDay(today)) >
        new Date(formatYearMonthDay(event[DATE])) ?
            pastEvents.push({ ...event, past: true })
            : upComingEvents.push(event)
    });

    return {
        upComingEvents,
        pastEvents
    }
};

export default dividePastUpcomingEvents;
