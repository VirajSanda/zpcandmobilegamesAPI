const express = require('express');
const { getAppDetails } = require('../controllers/steamController');

const router = express.Router();

router.get('/', getAppDetails);

module.exports = router;
