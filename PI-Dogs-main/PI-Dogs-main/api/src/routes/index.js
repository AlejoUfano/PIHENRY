const { Router } = require('express');
const dogsRouter = require('./dogs.js');
const router = Router();

router.use('/', dogsRouter);

module.exports = router;
