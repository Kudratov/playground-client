import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import AsyncMiddleware from './../middlewares/asyncMiddleware';
import asyncRtM from './../middlewares/asyncRtM';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    
    const store = createStore(combineReducers({
                
    }),
    composeEnhancers(applyMiddleware(thunk, AsyncMiddleware, asyncRtM))
    );

    return store;
}