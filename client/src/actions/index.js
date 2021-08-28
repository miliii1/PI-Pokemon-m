import axios from 'axios';
import {
	POKEMON_URL,
	POKEMON_TYPES,
	POKEMON_ID,
	POKEMON_NAME,
} from '../utils/constants';

export const getPokemons = () => async (dispatch) => {
	try {
		const res = await axios.get(POKEMON_URL);
		dispatch({type: 'GET_POKEMONS', payload: res.data});
	} catch (err) {
		console.log(err);
	}
};

export const getPokemonTypes = () => async (dispatch) => {
	try {
		const res = await axios.get(POKEMON_TYPES);
		dispatch({type: 'GET_POKEMONS_TYPES', payload: res.data});
	} catch (err) {
		console.log(err);
	}
};

export const getPokemonDetail = (id) => async (dispatch) => {
	try {
		const res = await axios.get(POKEMON_ID + id);
		dispatch({type: 'GET_POKEMON_DETAIL', payload: res.data});
	} catch (err) {
		console.log(err);
		dispatch({type: 'GET_POKEMON_DETAIL', payload: []});
	}
};

export const getPokemonSearch = (name) => async (dispatch) => {
	try {
		const res = await axios.get(POKEMON_NAME + name);
		dispatch({type: 'GET_POKEMON_NAME', payload: res.data});
	} catch (err) {
		console.log(err);
		dispatch({type: 'GET_POKEMON_NAME', payload: []});
	}
};
export const setPokemonsViews = (page) => (dispatch) => {
	dispatch({
		type: 'SET_POKEMONS_VIEWS',
		payload: {
			page: page.page,
			max: page.max,
			min: page.min,
		},
	});
};

export const setPokemonsOrder = (order) => (dispatch) => {
	dispatch({type: 'POKEMONS_ORDER', payload: order});
};
export const setPokemonsOrigin = (origin) => (dispatch) => {
	dispatch({type: 'POKEMONS_ORIGIN', payload: origin});
};

export const setPokemonsType = (type) => (dispatch) => {
	dispatch({type: 'POKEMONS_TYPE', payload: type});
};

export const clearPokemonDetail = () => (dispatch) => {
	dispatch({type: 'CLEAR_POKEMON_DETAIL'});
};
