import {
	GetPokemonOrder,
	GetPokemonOrigin,
	GetPokemonType,
	GetPokemonsViews,
} from '../controllers/index';

const initialState = {
	pokemons: [],
	pokemonDetail: [],
	pokemonViews: {
		all: [],
		now: [],
	},
	pokemonsTypes: [],
	pokemonFilter: 'All',
	pokemonOrigin: 'All',
};

const pokeReducer = (state = initialState, {payload, type}) => {
	switch (type) {
		case 'GET_POKEMONS':
			return {
				...state,
				pokemons: payload,
				pokemonViews: {
					all: payload,
					now: GetPokemonsViews(payload),
				},
			};
		case 'GET_POKEMONS_TYPES':
			return {
				...state,
				pokemonsTypes: payload,
			};
		case 'GET_POKEMON_DETAIL':
			return {
				...state,
				pokemonDetail: payload,
			};
		case 'SET_POKEMONS_VIEWS':
			return {
				...state,
				pokemonViews: {
					...state.pokemonViews,
					now: GetPokemonsViews(
						state.pokemonViews.all,
						payload.min,
						payload.max
					),
				},
			};

		case 'GET_POKEMON_NAME':
			return {
				...state,
				pokemonViews: {
					...state.pokemonViews,
					all: GetPokemonsViews(payload),
					now: GetPokemonsViews(payload),
				},
				pokemonFilter: 'Search',
			};
		case 'POKEMONS_ORDER':
			return {
				...state,
				pokemonViews: {
					...state.pokemonViews,
					now: GetPokemonsViews(
						GetPokemonOrder(payload, state.pokemonViews.all)
					),
				},
				pokemonFilter: payload,
			};
		case 'POKEMONS_ORIGIN':
			return {
				...state,
				pokemonViews: {
					...state.pokemonViews,
					now: GetPokemonsViews(GetPokemonOrigin(payload, state.pokemons)),
					all: GetPokemonOrigin(payload, state.pokemons),
				},

				pokemonOrigin: payload, /// API
				pokemonFilter: payload,
			};
		case 'POKEMONS_TYPE':
			state.pokemonViews.all = GetPokemonType(
				payload,
				GetPokemonOrigin(state.pokemonOrigin, state.pokemons)
			);
			return {
				...state,
				pokemonViews: {
					...state.pokemonViews,
					now: GetPokemonsViews(state.pokemonViews.all),
				},
				pokemonFilter: payload,
			};
		case 'CLEAR_POKEMON_DETAIL':
			return {
				...state,
				pokemonDetail: [],
				pokemonFilter: '',
			};
		default:
			return state;
	}
};

export default pokeReducer;
