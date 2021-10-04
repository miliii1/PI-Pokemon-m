const {Router} = require('express');
const {Type} = require('../db');
const router = Router();

router.get('/', async (req, res) => {
	let totalTypes = await Type.findAll();
	return res.status(200).send(totalTypes);
});
module.exports = router;

// los types de la bsaede datos