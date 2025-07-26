const express = require('express');
const router = express.Router();

const addUserController = require('../controllers/addUserController');

router.get('/', addUserController.render)
router.post('/', addUserController.addUser);

module.exports = router;