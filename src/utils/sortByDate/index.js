import { DATE } from 'Constants';

export const sortByAscending = (a, b) => {

    return new Date(a[DATE]) - new Date(b[DATE]);
};

export const sortByDescending = (a, b) => {

    return new Date(b[DATE]) - new Date(a[DATE]);
};
