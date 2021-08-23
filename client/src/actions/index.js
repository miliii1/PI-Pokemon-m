import axios from 'axios';
import {
    GET_POKEMONS,
    GET_POKEMONS_DETAIL,
    CREATE_NEW_POKEMON,
    FILTER_POKEMON,
    SEARCH_POKEMONS,
    GET_TYPES

    } from './constants'

export function getPokemos(){
    return async function (dispatch){
        return await axios.get("http://localhost:3000/pokemons")
        .then(response => {
            dispatch({type: GET_POKEMONS, payload: response.data})
        })
    }
}

export function getPokemonDetail(id) {
    return async function (dispatch){
        axios.get(`http://localhost:3000/pokemons/${id}`)
        .then(response => {
            dispatch({type: GET_POKEMONS_DETAIL, payload:response.data[0]})
        })
    }
}

export function createNewPokemon(datos) {
    return async function (dispatch){
        const res = await axios.GET_POKEMONS_DETAIL('http://localhost:3000/pokemons', datos);
        dispatch({type: CREATE_NEW_POKEMON, payload: res})
    }
}

export function filterPokemon(datos){
    return async function (dispatch){
        dispatch({type: FILTER_POKEMON, payload: datos})
    }
}

export function getTypes() {
    return async (dispatch) => 
    await axios
    .get('https://localhost:3000/pokemons/type')
    .then((res) => res.datos)
    .then((type) = {
        dispatch({type: GET_TYPES, payload: type})
})
}

export const searchPokemons = (name) => async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:3000/pokemons/?name=' + name);
        dispatch({type: SEARCH_POKEMONS, payload: res.datos}); 
    } catch (error) {
        console.log(error)
    }
}