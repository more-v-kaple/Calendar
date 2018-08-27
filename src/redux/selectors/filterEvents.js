import sortByRelevance from 'Utils/sortByRelevance';

const filterEvents = (events, keyword = '') => {
    const filter = keyword.toLowerCase(),
        filteredEvents = events.filter(event => {
            for (let key in event) {
                if(event[key].toLowerCase().includes(filter)) {

                    return event;
                }
            }
        });

    return sortByRelevance(filteredEvents, filter);
};

export default filterEvents;
