const { Router } = require('express')
const { Types } = require('../db');
const router = Router()

router.get('/', async (req, res) => {
    let typesPok = await Types.findAll();
    return res.status(200).send(typesPok);
});

module.exports = router;