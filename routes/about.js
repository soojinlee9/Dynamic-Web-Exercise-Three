const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('About this app'));
router.get('/me', (req, res) => res.send('About me')); //shows about.js on localhost:4000/about/me


module.exports = router;