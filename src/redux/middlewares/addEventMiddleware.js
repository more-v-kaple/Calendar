import { addEvent } from 'Redux/actionCreators';

import generateObjectId from 'Utils/generateObjectId';


const addEventMiddleware = payload => (dispatch, getState, getFirebase) => {
    const firebase = getFirebase(),
        id = generateObjectId();

    firebase.database().ref(`events/${id}`).set({ ...payload } );
    dispatch(addEvent({ ...payload, id } ));
}

export default addEventMiddleware;
