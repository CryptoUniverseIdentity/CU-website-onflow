import { createStore, combineReducers } from 'redux';
import blindTrans from './blindTrans';
import block from './block';
import app from './app';

const reducer = combineReducers({
    blindTrans,
    block,
    app
});

const store = createStore(reducer);

export default store;