const getPokeApi = require('./getPokeApi');
const getPokeDB = require('./getPokeDB');

const getPokeAll = async () => {
    const apiPok = await getPokeApi();
    const dbPok = await getPokeDB();
    const pokAll = apiPok.concat(dbPok);
    return pokAll;
};

module.exports = getPokeAll