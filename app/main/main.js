const express = require('express');
const mongoose = require('mongoose');
const { main } = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Welcome to the Dental Clinic API');
});

module.exports = router;