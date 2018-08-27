const getCurrentMonthYear = () => {
    const year = new Date().getFullYear(),
        month = new Date().getMonth();

    return {
        year,
        month
    }
};

export default getCurrentMonthYear;
