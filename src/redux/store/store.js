import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {composeWithDevTools} from "redux-devtools-extension";

const middleware=[thunk]
const enhancer= composeWithDevTools( applyMiddleware(...middleware))
const store = createStore(
    rootReducer,
    enhancer,
);

export default store;