import dividePastUpcomingEvents from 'Utils/helpers/dividePastUpcomingEvents';

import {
    sortByAscending,
    sortByDescending
} from 'Utils/sortByDate';

const sortByRelevance = list => {
    const { upComingEvents, pastEvents } = dividePastUpcomingEvents(list);

    return [...upComingEvents.sort(sortByAscending),
        ...pastEvents.sort(sortByDescending)
    ]
};

export default sortByRelevance;
