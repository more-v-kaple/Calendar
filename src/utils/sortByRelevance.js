import {
    A_GREATER_THAN_B,
    A_LESS_THAN_B,
    A_EQUAL_B,
    TITLE,
    DATE
} from 'Constants';

const sortByRelevance = (list, keyword) => {
    return list.sort((a, b) => {
        const dateA = new Date(a[DATE]),
            dateB = new Date(b[DATE]),
            titleA = a[TITLE].toLowerCase(),
            titleB = b[TITLE].toLowerCase();

        if ((titleA.startsWith(keyword) &&
         !titleB.startsWith(keyword))
         || dateA>dateB) {
            return A_LESS_THAN_B;
        }
        if ((!titleA.startsWith(keyword) &&
        titleB.startsWith(keyword))
        || dateA<dateB
        ) {
            return A_GREATER_THAN_B;
        }

        return A_EQUAL_B;
    })

};

export default sortByRelevance;
