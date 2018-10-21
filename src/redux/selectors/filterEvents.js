import sortByRelevance from 'Utils/sortByRelevance';

const filterEvents = (events, keyword = '') => {
    const filter = keyword.toLowerCase(),
        filteredEvents = events.filter(event => {
            for (let key in event) {
                if(event[key].toString().toLowerCase().includes(filter)) {

                    return event;
                }
            }
        });

    return sortByRelevance(filteredEvents);
};

export default filterEvents;
