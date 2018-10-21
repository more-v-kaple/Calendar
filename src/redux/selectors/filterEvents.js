import sortByRelevance from 'Utils/sortByRelevance';

const filterEvents = (events, keyword = '') => {
    const filter = keyword.toLowerCase(),
        filteredEvents = events.filter(event => {
            for (let key in event) {
                if(event[key].toLowerCase().includes(filter)) {
                    console.log(event, 'event in filterEvents', typeof event.date)
                    return event;
                }
            }
        });

    return sortByRelevance(filteredEvents);
};

export default filterEvents;
