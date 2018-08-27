const stopPropagination = e => {
    e.stopPropagation();
    e.hasOwnProperty('nativeEvent') && e.nativeEvent.stopImmediatePropagation();
};

export default stopPropagination;
