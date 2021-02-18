import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import AsyncMiddleware from './../middlewares/asyncMiddleware';
import asyncRtM from './../middlewares/asyncRtM';

import playgroundReducer from './../reducers/playgroundReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    
    const store = createStore(combineReducers({
                playground: playgroundReducer
    }),
    composeEnhancers(applyMiddleware(thunk, AsyncMiddleware, asyncRtM))
    );

    return store;
}