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
          let userId = user._id;
          const token = jwt.sign({ userId }, process.env.API_SECRET_KEY, { expiresIn: 6000 });
          const role = user.role;

          res.json({ status: true, token, role });
        }
      });
    }
  });
});

module.exports = router;