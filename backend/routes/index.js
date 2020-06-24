const router = require('express').Router();
const { authenticated } = require('../configs/security');

//account router
router.use('/account',require('./account'));

module.exports = router;