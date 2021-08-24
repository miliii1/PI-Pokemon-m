const { Router } = require('express');
const { Pokemon } = require('../db');
const { getPokemonsAll } = require('../controllers/pokemons');
const { getPokeDetails } = require('../controllers/pokemons');
const { getPokeTypes } = require('../controllers/Types');
const router = Router();


router.get('/', async (req, res) => {
    const { name } = req.query;

    let pokemon = await getPokemonsAll();
    // console.log(pokemon)

    
    if(name){
        const pokeDetails = await getPokeDetails(BUSCAS_NAME, name);
        pokeDetails.length ? res.status(200).send(pokeDetails) : res.status(404).send('No se ha encontrado');
    } else return res.status(200).send(pokemon);
});

router.get('/:id', async (req, res) => {
     const { id } = req.params;
     if(id){
         let pokeId = await getPokeDetails("BUSCAS_ID", id);
         pokeId.length ? res.status(200).send(pokeId) : res.status(404).send("No se encuentra ese pokemon de ID")
        }
})

router.post('/', async (req, res) => {
    const { name, hp, attack, defense, speed, height, weight, type } = req.body;
    if(!name || !type) res.status(400).send('Se requiere el nombre y tipo')

    const pokeNuevo = await Pokemon.create({
        name, hp, attack, defense, speed, height, weight
    })
    const tiposAll = await getPokeTypes(type);

    pokeNuevo.setTypes(tiposAll)

    return res.status(200).send(pokeNuevo);
})

module.exports = router;
