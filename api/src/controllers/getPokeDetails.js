const { getPokeAll } = require('./getPokeAll');

const getPokeDetails = async (search, response) => {
    const detailPoke = await getPokeAll()
    if(search == 'SEARCH_ID') {
        const resp = detailPoke.filter(a => a.id.toString() === response);
        return resp
    }
    if(search == 'SEARCH_NAME') {
        const resp = detailPoke.filter(a => a.name === response);
        return resp
    }
}

module.exports = getPokeDetails