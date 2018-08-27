const getLastDay = (year, month) => new Date(year, month + 1, 0).getDay();

export default getLastDay;
