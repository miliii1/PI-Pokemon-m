const { Router } = require('express');
const { Pokemon } = require('../db');
const { getPokeAll } = require('../controllers/getPokeAll')
const { getPokeDetails } = require('../controllers/getPokeDetails');
const router = require('.');


router.get('/', async (req, res) => {
    const { name } = req.query;

    let pokemon = await getPokeAll();

    if(name){
        const pokeDetails = await getPokeDetails(BUSCAS_NAME, name);
        pokeDetails.length ? res.status(200).send(pokeDetails) : res.status(404).send('No se ha encontrado');
    } else return res.status(200).send(pokemon);
});

// router.get('/', async (req, res) => {

// })