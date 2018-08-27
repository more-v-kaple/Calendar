const path = require('path');

const root = '../src/';

const aliases = {
    Decorators: path.resolve(__dirname, `${root}decorators/`),
    Components: path.resolve(__dirname, `${root}components/`),
    Containers: path.resolve(__dirname, `${root}containers/`),
    Constants: path.resolve(__dirname, `${root}constants/`),
    Styles: path.resolve(__dirname, `${root}assets/styles`),
    Redux: path.resolve(__dirname, `${root}redux/`),
    Mocks: path.resolve(__dirname, `${root}mocks/`),
    Utils: path.resolve(__dirname, `${root}utils/`)
};

module.exports = aliases;
