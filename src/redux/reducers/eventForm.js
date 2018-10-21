import {
    TOGGLE_EVENT_FORM
} from '../actionTypes';

const initialState = {
    isOpen: false
};

const eventForm = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_EVENT_FORM:

            return { isOpen: action.payload };
        default:
            return state;
    }
};

export default eventForm;
