const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// Registration route
router.post('/register', async (req, res) => {

  // Hash the password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
  // Create new user
  const user = new User({
    email: req.body.email,
    password: hashedPassword
  });

  // Save user to DB
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }

});

// Login route
router.post('/login', async (req, res) => {

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send('Invalid email or password');
  }

  // Compare hashed password
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(400).send('Invalid email or password');
  }

  // Send JWT if login successful
  const token = jwt.sign({ _id: user._id }, 'secretKey');
  res.header('auth-token', token).send(token);

});

module.exports = router;
/*
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
*/
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