const iechoRouter = require('express').Router();

const { reverseText } = require('../controllers/iecho');


iechoRouter.use('/', (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({ error: 'no text' });
    }

    const result = reverseText(text);
    res.json({ text: result, palindrome: text === result });
});

module.exports = iechoRouter;