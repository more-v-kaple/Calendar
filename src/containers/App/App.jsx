import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';

import configureStore from 'Redux/store/configureStore';

import Header from 'Containers/Header';
import Calendar from 'Containers/Calendar';

const store = configureStore();

const App = () => (
    <Provider store = { store }>
        <div className="app">
            <Header/>
            <Calendar/>
        </div>
    </Provider>
);

export default App;
