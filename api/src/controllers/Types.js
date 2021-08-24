const { Types } = require('../db')

const getPokeTypes = async () => {
    const pi = await Types.findAll()
    return pi
}


module.exports = getPokeTypes