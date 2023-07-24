const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  res.send('Anmeldeformular');  // Hier würden Sie normalerweise Ihr Anmeldeformular rendern
});

router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

/* Standard
const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Pfad zu Ihrem Benutzermodell

router.get('/', (req, res) => {
  res.send('Anmeldeformular');  // Hier würden Sie normalerweise Ihr Anmeldeformular rendern
});

router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
*/