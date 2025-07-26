const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.render);
router.post('/', loginController.loginAuthenticate);

module.exports = router;