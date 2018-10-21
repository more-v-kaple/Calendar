
import { editEvent } from 'Redux/actionCreators';

const editEventMiddleware = (id, event) =>
    (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        firebase.database().ref(`events/${id}`)
            .set({ ...event, date: event.date.toString() } );

        dispatch(editEvent({ ...event, id }));
    }

export default editEventMiddleware;
