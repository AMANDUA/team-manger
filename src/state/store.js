import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import teams from '../state/teams/reducer';

const reducer = combineReducers({
    teams,
});

export default (initialState) => createStore(reducer, {...initialState}, applyMiddleware(thunk));
