const { Types } = require('../db')

const getPokeTypes = async () => {
    const pokeApi = await Types.findAll()
    return pokeApi
    //tendria q devolverlo en formato json??
}


module.exports = getPokeTypes
