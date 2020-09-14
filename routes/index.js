const express = require('express');
const router = express.Router();
const db = require('../models')


/* GET home page. */
router.get('/', function(req, res, next) {
  db.getAll('users').then(results => {
    res.status(200).json({data: results})
  })
});

router.post('/', function(req, res, next) {
  res.status(200).json({data: results})
});

module.exports = router;
