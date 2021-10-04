const {Router} = require('express');
const pokemons = require('./pokemons');
const types = require('./types');

const router = Router();
//los mismisimos middlewares//
router.use('/pokemons', pokemons);
router.use('/types', types);

module.exports = router;
