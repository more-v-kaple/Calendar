import {
    CHANGE_MONTH_YEAR,
    SELECT_DATE
} from '../actionTypes';

import getCurrentMonthYear from 'Utils/calculateDate/getCurrentMonthYear';

import { YEAR, MONTH } from 'Constants';

const { year, month } = getCurrentMonthYear();

const initialState = {
    selected: '',
    year,
    month
};

const events = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MONTH_YEAR:

            return { ...state,
                year: action.payload[YEAR], month: action.payload[MONTH]
            };
        case SELECT_DATE:

            return { ...state,
                selected: action.payload
            };
        default:
            return state;
    }
};

export default events;
