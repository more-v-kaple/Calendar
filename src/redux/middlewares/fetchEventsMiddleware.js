
import { fetchEvents } from 'Redux/actionCreators';

const fetchEventsMiddleware = () => (dispatch, getState, getFirebase) => {
    getFirebase().database().ref(`events`).once('value')
        .then(snapshot => snapshot.val())
        .then(data => {
            const events = Object.entries(data).map(event => ({ ...event[1], id: event[0] }));
            dispatch(fetchEvents(events))
        })
}

export default fetchEventsMiddleware;
