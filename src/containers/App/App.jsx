import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';

import Header from 'Containers/Header';
import Calendar from 'Containers/Calendar';
import EventForm from 'Containers/EventForm';
import QuickAddEvent from 'Containers/QuickAddEvent';
import configureStore from 'Redux/store/configureStore';

const store = configureStore();
// import Main from './components/Main';

const App = () => (
    <Provider store = { store }>
        <div className="app">
            <Header/>
            <Calendar/>
            {/* <EventForm/>
            <QuickAddEvent/> */}
        </div>
    </Provider>
);

export default App;
