const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/', function(req, res, next) {
  db.getAll('users').then(results => {
    res.status(200).json({data: results})
  })
});

router.post('/', function(req, res, next) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    gender: req.body.gender,
    location: req.body.location,
    picture: req.body.picture,
  }
  db.insertData('users', user).then(results => {
    res.status(201).json({data: results})
  })
});

module.exports = router;
