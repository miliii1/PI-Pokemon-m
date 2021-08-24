const { Types } = require('../db')

const getPokeTypes = async () => {//Y POR AQUI LOS TIPOS DE DATOS DE LA BASE DE DATOS
    const pokeApi = await Types.findAll()
    return pokeApi
    //tendria q devolverlo en formato json??
}


module.exports = getPokeTypes
