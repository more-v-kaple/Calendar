
import { addEvent } from 'Redux/actionCreators';

const addEventMiddleware = payload => (dispatch, getState, getFirebase) => {
    // const firebase = getFirebase();

    dispatch(addEvent(payload));

}

export default addEventMiddleware;
