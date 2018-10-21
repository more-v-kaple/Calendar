// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line no-undef
    module.exports = require('./configureStore.prod');
} else {
    // eslint-disable-next-line no-undef
    module.exports = require('./configureStore.dev');
}
