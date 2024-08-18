const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.post('/', cardController.createCard);
router.get('/', cardController.findAllCards);
router.get('/:title', cardController.findCardByTitle);

module.exports = router;
