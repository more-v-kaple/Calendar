const getToday = () => new Date().toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
});

export default getToday;
