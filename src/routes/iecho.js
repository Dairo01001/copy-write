const iechoRouter = require('express').Router();

const { reverseText, isPalindrome } = require('../controllers/iecho');


iechoRouter.use('/', (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({ error: 'no text' });
    }

    res.json({ text: reverseText(text), palindrome: isPalindrome(text) });
});

module.exports = iechoRouter;