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
    }),
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
    body('confirm-password')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match.');
            }
            return true;
        })
]

router.get('/', addUserController.render)

router.post('/', validateUser, addUserController.addUser);

module.exports = router;