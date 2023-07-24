const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const anmeldenRoute = require('./routes/anmelden');

const app = express();

app.use(bodyParser.json());
app.use('/anmelden', anmeldenRoute);

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Verbindung zur MongoDB-Datenbank hergestellt!');
});

app.listen(3000, () => console.log('Server läuft auf Port 3000'));


/* Standard
const express = require('express');
const mongoose = require('mongoose');
const anmeldenRoutes = require('./routes/anmelden');  // Pfad zu Ihrer Anmelderouten-Datei

const app = express();

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log(err));

app.use(express.json());  // Middleware zum Parsen von JSON-Daten
app.use('/anmelden', anmeldenRoutes);  // Middleware für Anmelderouten

app.listen(3000, () => console.log('Server is running on port 3000'));
*/