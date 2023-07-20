const express = require('express');
const router = express.Router();

// Hier definieren Sie Ihre Routen
// Zum Beispiel:
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = router;
