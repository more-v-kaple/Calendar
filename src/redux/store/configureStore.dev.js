
import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import rootReducer from 'Redux/reducers';
import { getFirebase } from 'react-redux-firebase';

const middleware = [
    thunk.withExtraArgument(getFirebase)
].filter(Boolean);

const fbConfig = {
    apiKey: 'AIzaSyAntKiNvzLl4aIDL-DeyahTgwsC064ltRY',
    authDomain: 'life-on-a-page.firebaseapp.com',
    databaseURL: 'https://life-on-a-page.firebaseio.com'
};
const rrfConfig = { userProfile: 'users' };

firebase.initializeApp(fbConfig);

function configureStore (initialState) {
    const store = createStore(rootReducer, initialState, compose(
        reactReduxFirebase(firebase, rrfConfig),
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default configureStore;
