const axios = require('axios');
const {POKEMON_URL} = require('../utils/constants');

const getApi = async () => {
	let pokeUrl = await axios.get(POKEMON_URL);
	let pokeUrlNext = await axios.get(pokeUrl.data.next);
	let pokeTotal = pokeUrl.data.results.concat(pokeUrlNext.data.results);
//para menos tiempos se puede usar promise all se puede ir mandando de a 10 con slice 

	for (let el of pokeTotal) {
		let pDate = await axios.get(el.url);
		pDate = pDate.data;
		el.id = pDate.id;
		el.hp = pDate.stats[0].base_stat;
		el.attack = pDate.stats[1].base_stat;
		el.defense = pDate.stats[2].base_stat;
		el.speed = pDate.stats[5].base_stat;
		el.height = pDate.height;
		el.weight = pDate.weight;
		el.Types = pDate.types.map((el) => {
			return {name: el.type.name};
		});
		el.sprite = pDate.sprites.front_default;
		delete el.url;
	}

	return pokeTotal;
};

const getAllApi = getApi();

module.exports = getAllApi;
