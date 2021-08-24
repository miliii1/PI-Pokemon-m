const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Pokemons = require ('./pokemons');
const Types = require ('./types');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//AQUI ESTAN LOS MIDDLEWARE
router.use('/pokemons', Pokemons);
router.use('/types', Types)


module.exports = router;
