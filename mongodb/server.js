const express = require('express');
const mongoose = require('mongoose');

const app = express();

// JSON parsing middleware
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true });

// Load routing files
const anmeldenRoute = require('./routes/anmelden');

// Use routing files 
app.use('/anmelden', anmeldenRoute);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

/*
const express = require('express');
const mongoose = require('mongoose');
const Nachrichten = require('./models/Nachrichten'); // Pfad zu Ihrem Nachrichtenmodell
const app = express();
const port = 3000;

// MongoDB Verbindung
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

// Middleware Analyse des Körpers von HTTP-POST-Anfragen
app.use(express.json());

// Statisches Hosting von Dateien im "public"-Ordner
app.use(express.static('public'));

// Route für die Nachrichtenseite
app.get('/nachrichten/:seite', async (req, res) => {
  let seite = Number(req.params.seite);
  let limit = 6;
  let skip = (seite - 1) * limit;

  try {
    let nachrichten = await Nachrichten.find().skip(skip).limit(limit);
    res.json(nachrichten);
  } catch(err) {
    res.status(500).send(err);
  }
});
*/

// anderen Routen...
// app.use('/anmelden', require('./routes/anmelden'));

app.listen(port, () => console.log(`App is listening on port ${port}`));


// anderen Routen...
// app.use('/anmelden', require('./routes/anmelden'));

app.listen(port, () => console.log(`App is listening on port ${port}`));

/* Test 1
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
*/

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