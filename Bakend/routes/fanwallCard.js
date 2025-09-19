const express = require('express');
const router = express.Router();

const createFanwallCard = require('../controllers/createFanwallCard');
const getFanwallCards = require('../controllers/getFanwallCards');

router.post('/createFanwallCard',createFanwallCard);
router.get('/getFanwallCards',getFanwallCards);

module.exports = router;