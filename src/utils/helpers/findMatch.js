const findMatch = (keyword, event) => {
    if (keyword) {
        return Object.values(event)
            .find(value => value.toLowerCase().includes(keyword.toLowerCase()))
    }

    return '';
};

export default findMatch;
