const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err)
      throw err;

    if (!user) {
      res.json({ status: false, message: 'User not found.' });
    } else {
      bcrypt.compare(password, user.password).then((result) => {
        if (!result) {
          res.json({ status: false, message: 'Wrong password.' });
        } else {
          const token = jwt.sign({ email }, process.env.API_SECRET_KEY, { expiresIn: 60 });

          res.json({ status: true, token });
        }
      });
    }
  });
});

module.exports = router;