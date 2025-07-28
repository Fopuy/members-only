const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const db = require('../db/queries');
const addUserController = require('../controllers/addUserController');

const validateUser = [
    body('email')
        .isEmail().withMessage('Please enter a valid email address.')
        .bail() // Stop running validations if previous one failed
        .custom(async (value) => {
        const existingUser = await db.findUserByEmail(value);
        if (existingUser) {
            throw new Error('E-mail already in use.');
        }
        return true;
        }),
    body('username').custom(async (value) => {
        const existingUser = await db.findUserbyUsername(value);
        if (existingUser) {
            throw new Error('Username already in use.');
        }
        return true;
    })    
]

router.get('/', addUserController.render)

router.post('/', validateUser, addUserController.addUser);

module.exports = router;