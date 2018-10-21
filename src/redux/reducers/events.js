import {
    FETCH_EVENTS,
    REMOVE_EVENT,
    EDIT_EVENT,
    ADD_EVENT
} from '../actionTypes';

import deepClone from 'Utils/deepClone';

import { ID } from 'Constants';

const events = (state = [], action) => {
    const stateCopy = deepClone(state);

    switch (action.type) {
        case FETCH_EVENTS:
            return [...action.payload];
        case ADD_EVENT:
            return [ ...stateCopy, { ...action.payload
            }];
        case REMOVE_EVENT:

            return stateCopy.reduce((prev, current) => {
                if (current[ID] !== action.payload[ID]) {
                    prev.push(current);
                }

                return prev;
            }, []);
        case EDIT_EVENT:

            return stateCopy.reduce((prev, current) => {
                if (current[ID] === action.payload[ID]) {
                    for (let key in current) {
                        current[key] = action.payload[key];
                    }
                }
                prev.push(current);

                return prev;
            }, []);
        default:
            return state;
    }
};

export default events;
