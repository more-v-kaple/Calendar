
import { removeEvent } from 'Redux/actionCreators';

const removeEventMiddleware = payload => (dispatch, getState, getFirebase) => {
    // const firebase = getFirebase();

    dispatch(removeEvent(payload));

}

export default removeEventMiddleware;
