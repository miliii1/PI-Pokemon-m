const axios = require('axios');
const { POKEMON_URL } = require('../constants')


const getPokeApi = async () => {
    const laURL = await axios.get(POKEMON_URL);
    const elURL = await axios.get(laURL.data.next);
    const pokeApi = laURL.data.results.concat(elURL.data.results);


    const pokemons = await Promise.all(pokeApi.map(async (pokemon) => {
        const brock = await axios(pokemon.url);
        console.log(brock)
        const data = brock.data;
        return {
            id: data.id,
            name: data.name,
            Types: data.Types.map(type => {
                return { name: type.type.name };
            }),
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight
        }
    }))
    return pokemons;
}

module.exports = getPokeApi

/*como coloco la imagen*/