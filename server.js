const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

// Verbinden Sie sich mit MongoDB (Sie können einen Docker-Container mit MongoDB verwenden)
mongoose.connect('mongodb://localhost:27017/userAuth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Erstellen Sie ein Mongoose-Schema und -Modell für Benutzer
const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
});

const User = mongoose.model('User', userSchema);

// Endpoint für die Benutzerregistrierung
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).send({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(400).send({ error: 'Registration failed!' });
    }
});

// Endpoint für die Benutzeranmeldung
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ error: 'User not found!' });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(400).send({ error: 'Invalid password!' });

    const token = jwt.sign({ id: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
    res.send({ message: 'Logged in successfully!', token });
});

// Starten Sie den Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
