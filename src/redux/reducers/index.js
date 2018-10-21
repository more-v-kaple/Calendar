import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'

import eventForm from './eventForm';
import events from './events';
import date from './date';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    eventForm,
    events,
    date
});

export default rootReducer;
