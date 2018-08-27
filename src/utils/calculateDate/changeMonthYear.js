export const changeMonthYear = ({ year, month, change }) => {
    const action = change === 'next' ? 1 : -1;

    return {
        month: new Date(year, month + action).getMonth(),
        year: new Date(year, month + action).getFullYear()
    }
};
