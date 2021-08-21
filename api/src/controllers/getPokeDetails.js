const { getPokeAll } = require('./getPokeAll');

const getPokeDetails = async (search, response) => {
    const detailPoke = await getPokeAll()
    if(search == 'BUSCAS_ID') {
        const resp = detailPoke.filter(a => a.id.toString() === response);
        return resp
    }
    if(search == 'BUSCAS_NAME') {
        const resp = detailPoke.filter(a => a.name === response);
        return resp
    }
}

module.exports = getPokeDetails