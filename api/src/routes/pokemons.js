const {Router} = require('express');
const {Pokemon} = require('../db');
const {getPokemonDetail, getAllPokemons} = require('../controllers');
const router = Router();

router.get('/', async (req, res) => {
	const {name} = req.query;
	let pokeTotal = await getAllPokemons();
	if (name) {
		let pokeName = await getPokemonDetail('GET_NAME', name);
		pokeName.length
			? res.status(200).send(pokeName)
			: res.status(404).send('Pokemon not found');
	}
	return res.status(200).send(pokeTotal);
});

router.get('/:id', async (req, res) => {
	const {id} = req.params;
	if (id) {
		let pokeId = await getPokemonDetail('GET_ID', id);
		pokeId.length
			? res.status(200).send(pokeId)
			: res.status(404).send('Pokemon not found');
	}
});

router.post('/', async (req, res) => {
	const {
		name,
		hp,
		attack,
		defense,
		speed,
		height,
		weight,
		type,
		sprite,
	} = req.body;

	if (!name || !type)
		return res.status(400).send('Error: Necessary parameters are required');
	const createPokemon = await Pokemon.create({
		name,
		hp,
		attack,
		defense,
		speed,
		height,
		weight,
		sprite,
	});
	await createPokemon.setTypes(type);
	return res.status(200).send(createPokemon);
});

module.exports = router;
