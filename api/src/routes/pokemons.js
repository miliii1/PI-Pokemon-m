const { Router } = require('express');
const { Pokemon } = require('../db');
const { getPokemonsAll } = require('../controllers/pokemons');
const { getPokeDetails } = require('../controllers/pokemons');
const { default: axios } = require('axios');
// const { POKEMON_NAME } = require('../constants');
// const { getPokeTypes } = require('../controllers/Types');
const router = Router();

//LAS RUTAS

router.get('/', async (req, res) => {
    const { name } = req.query;

    let pokemon = await getPokemonsAll();
    // console.log(pokemon)
    if(name){
        const pokeDetails = await getPokeDetails("BUSCAS_NAME", name);
        //console.log(pokeDetails)
        pokeDetails.length ? res.status(200).send(pokeDetails) : res.status(404).send('No se encontro el pokemon');
    } else return res.status(200).send(pokemon);
});

router.get('/:name', async (req, res) => {
    const { name } = req.params;
    try{
        const pokename = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.status(200).send(pokemon)
    } catch(error) {
        res.status(404).send('No se encontro el pokemon');
    }
})

router.get('/:id', async (req, res) => {
     const { id } = req.params;
     if(id){
         let pokeId = await getPokeDetails("BUSCAS_ID", id);
         pokeId.length ? res.status(200).send(pokeId) : res.status(404).send("No se encuentra ese pokemon de ID")
        }
})

router.post('/', async (req, res) => {
    const { name, hp, attack, defense, speed, height, weight, type } = req.body;
    const crearPoke = await Pokemon.create({
        name, hp, attack, defense, speed, height, weight
    })
    
    // if(!name || !type) res.status(400).send('Se requiere el nombre y tipo')


    // const pokeNuevo = await Pokemon.create({
    //     name, hp, attack, defense, speed, height, weight
    // })
    
    // const tiposAll = await getPokeTypes(type);

    // pokeNuevo.setTypes(tiposAll)
    console.log({ crearPoke })

    return res.status(200).json({crearPoke});
})
router.get('/DB', async (req, res) => {
    const result = await getPokeDB()
try{
  return res.status(200).json(result)
}catch(err){
  next(err)
}
})


module.exports = router;
