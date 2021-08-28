import {createStore, applyMiddleware, compose} from 'redux';
import pokeReducer from '../reducer/index';
import thunk from 'redux-thunk';

const store = createStore(pokeReducer, compose(applyMiddleware(thunk)));

export default store;
