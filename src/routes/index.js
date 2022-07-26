const router = require('express').Router();

router.use('/iecho', require('./iecho'));

module.exports = router;