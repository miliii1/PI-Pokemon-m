const { Pokemon, Types } = require('../db');


const getPokeDB = async () => {
    return await Pokemon.findAll({
        includes: {
            model: Types,
            attributes: ['name'] //
        },
    })
};

module.exports = getPokeDB