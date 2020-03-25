const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Cool call back at root'));

module.exports = router;