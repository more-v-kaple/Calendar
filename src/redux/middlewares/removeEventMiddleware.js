
import { removeEvent } from 'Redux/actionCreators';

const removeEventMiddleware = payload => (dispatch, getState, getFirebase) => {
    const firebase = getFirebase(),
        { id } = payload;
    firebase.database().ref(`events/${id}`).remove();
    dispatch(removeEvent(payload));
}

export default removeEventMiddleware;
