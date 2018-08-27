
import { fetchEvents } from 'Redux/actionCreators';

const fetchEventsMiddleware = payload => (dispatch, getState, getFirebase) => {
    // const firebase = getFirebase();

    dispatch(fetchEvents(payload));

}

export default fetchEventsMiddleware;
