const axios = require('axios');
// const { POKEMON_URL } = require('../constants');
const { Pokemon, Types } = require('../db');


const getPokeApi = async () => {
	let elUrl = await axios.get('https://pokeapi.co/api/v2/pokemon');
	let laUrl = await axios.get(elUrl.data.next);
	let pokeApi = elUrl.data.results.concat(laUrl.data.results);

	for (let a of pokeApi) {
		let aDate = await axios.get(a.url);
		aDate = aDate.data;
		a.id = aDate.id;
		a.hp = aDate.stats[0].base_stat;
		a.attack = aDate.stats[1].base_stat;
		a.defense = aDate.stats[2].base_stat;
		a.speed = aDate.stats[5].base_stat;
		a.height = aDate.height;
		a.weight = aDate.weight;
		a.Types = aDate.types.map((a) => {
			return {name: a.type.name};
		});
		a.sprite = aDate.sprites.front_default;
		delete a.url;
	}

	return pokeApi;
};


// const getPokeApi = async () => {
//     const laURL = await axios.get(POKEMON_URL);
//     const elURL = await axios.get(laURL.data.next);
//     const pokeApi = laURL.data.results.concat(elURL.data.results);


//     const pokemons = await Promise.all(pokeApi.map(async (pokemon) => {
//         const brock = await axios(pokemon.url);
//         console.log(brock)
//         const data = brock.data;
//         return {
//             id: data.id,
//             name: data.name,
//             Types: data.Types.map(type => {
//                 return { name: type.type.name };
//             }),
//             hp: data.stats[0].base_stat,
//             attack: data.stats[1].base_stat,
//             defense: data.stats[2].base_stat,
//             speed: data.stats[5].base_stat,
//             height: data.height,
//             weight: data.weight
//         }
//     }))
//     return pokemons;
// }

const getPokeDB = async () => {
    return await Pokemon.findAll({
        includes: {
            model: Types,
            attributes: ['name'],
        },
    })
};

const getPokeDetails = async (search, response) => {
    const detailPoke = await getPokemonsAll()
    if(search === 'BUSCAS_ID') {
        const resp = detailPoke.filter(a => a.id.toString() === response);
        return resp
    }
    if(search === 'BUSCAS_NAME') {
        const resp = detailPoke.filter(a => a.name === response);
        return resp
    }
}

const getPokemonsAll = async () => {
	let pokeApi = await getPokeApi();
	let pokeDB = await getPokeDB();
	let fin = pokeApi.concat(pokeDB);
	return fin;
};

module.exports = {getPokeApi, 
    getPokeDB,
    getPokeDetails,
    getPokemonsAll
}

/*como coloco la imagen*/