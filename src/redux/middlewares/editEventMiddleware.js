
import { editEvent } from 'Redux/actionCreators';

const editEventMiddleware = (id, event) =>
    (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        firebase.database().ref(`events/${id}`).set({ ...event } );

        dispatch(editEvent({ ...event, id }));
    }

export default editEventMiddleware;
