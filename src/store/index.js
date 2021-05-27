import { createStore, combineReducers } from 'redux';
import blindTrans from './blindTrans';


const reducer = combineReducers({
    blindTrans
});

const store = createStore(reducer);

export default store;