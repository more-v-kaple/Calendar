import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'

import events from './events';
import date from './date';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    events,
    date
});

export default rootReducer;
