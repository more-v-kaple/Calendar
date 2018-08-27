
import { editEvent } from 'Redux/actionCreators';

const editEventMiddleware = payload => (dispatch, getState, getFirebase) => {
    // const firebase = getFirebase();

    dispatch(editEvent(payload));

}

export default editEventMiddleware;
