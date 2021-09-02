const getAllApi = require('./getAllApi');
const getAllApp = require('./getAllApp');

const getAllPokemons = async () => {
	let pokeApi = await getAllApi;
	let pokeApp = await getAllApp();
	let pokeTotal = pokeApi.concat(pokeApp);
	return pokeTotal;
};

module.exports = getAllPokemons;

//trae a los datos de los pokemones de la Api y los de la base de datos y los concatena para despues mostrar todo en la pag
